/* ============================================================
   QUIZ — Pre-test & Post-test engine (with critical LSR section)
   ============================================================ */

const Quiz = (() => {
  let data = null;

  async function load() {
    if (data) return data;
    try {
      const r = await fetch('data/quiz.json');
      data = await r.json();
    } catch (e) {
      // Fallback minimal data
      data = { pretest: [], posttest: { sections: { lsr: { questions: [] }, umum: { questions: [] } } } };
    }
    return data;
  }

  function renderPretest() {
    load().then(d => {
      const c = document.getElementById('quizContainer');
      if (!c) return;
      const saved = State.get('pretest') || {};
      const submitted = saved.submitted;
      c.innerHTML = `
        <div class="inner">
          <div class="kicker k-teal">Evaluasi Awal</div>
          <h2><em>Pre-test</em> — Cek Pemahaman Awal</h2>
          <p class="lead">Lima pertanyaan singkat. Hasilnya tidak menggagalkan kelulusan, tetapi membantu memetakan pengetahuan awal Anda.</p>
          <div class="quiz" id="pretestList"></div>
          <div id="pretestSummary" class="quiz-summary" style="display:${submitted ? 'block' : 'none'}">
            <div class="score">${saved.score || 0}%</div>
            <div class="verdict">Pre-test selesai — lanjutkan ke materi inti.</div>
            <button class="navbtn primary" id="pretestContinue" style="margin-top:14px">Lanjut ke Materi</button>
          </div>
        </div>
      `;
      const list = document.getElementById('pretestList');
      d.pretest.forEach((q, i) => {
        list.appendChild(buildQuestion(q, i, 'pretest', submitted, saved.answers || {}));
      });
      if (!submitted) {
        const submit = document.createElement('button');
        submit.className = 'navbtn primary';
        submit.style.marginTop = '18px';
        submit.textContent = 'Kirim Jawaban';
        submit.onclick = () => gradePretest(d);
        c.querySelector('.inner').appendChild(submit);
      } else {
        document.getElementById('pretestContinue').onclick = () => Navigation.go(Navigation.idx + 1);
      }
    });
  }

  function gradePretest(d) {
    const answers = {};
    let correct = 0;
    d.pretest.forEach((q, i) => {
      const sel = document.querySelector(`input[name="pretest-${i}"]:checked`);
      const ans = sel ? +sel.value : -1;
      answers[`pretest-${i}`] = ans;
      if (ans === q.a) correct++;
    });
    const score = Math.round((correct / d.pretest.length) * 100);
    State.set('pretest', { answers, submitted: true, score });
    Effects.toast('Pre-test selesai! Skor: ' + score + '%', 'ok');
    renderPretest();
  }

  function renderPosttest() {
    load().then(d => {
      const c = document.getElementById('quizContainer');
      if (!c) return;
      const saved = State.get('posttest') || {};
      const submitted = saved.submitted;
      const lsr = d.posttest.sections.lsr;
      const um = d.posttest.sections.umum;

      c.innerHTML = `
        <div class="inner">
          <div class="kicker">Evaluasi Akhir</div>
          <h2><em>Post-test</em> — Sertifikasi Induksi</h2>
          <p class="lead">Terdiri atas dua bagian. <b style="color:var(--amber)">Life-Saving Rules</b> harus dijawab benar 100%. Nilai pengetahuan umum minimal ${d.posttest.passing}%.</p>

          <h3 style="margin-top:24px; font-size:14px; color:var(--amber); letter-spacing:.1em; text-transform:uppercase;">Bagian A — Life-Saving Rules</h3>
          <div class="quiz" id="lsrList"></div>

          <h3 style="margin-top:24px; font-size:14px; color:var(--teal); letter-spacing:.1em; text-transform:uppercase;">Bagian B — Pengetahuan Umum</h3>
          <div class="quiz" id="umList"></div>

          <div id="posttestSummary" class="quiz-summary" style="display:${submitted ? 'block' : 'none'}">
            <div class="score">${saved.score || 0}%</div>
            <div class="verdict">${saved.score >= 80 ? '✅ LULUS — lanjut ke tanda tangan & sertifikat.' : '❌ Belum lulus. Pelajari ulang materi & coba remedial.'}</div>
            ${saved.score >= 80
              ? '<button class="navbtn primary" id="posttestContinue" style="margin-top:14px">Lanjut ke Tanda Tangan</button>'
              : '<button class="navbtn" id="posttestRetry" style="margin-top:14px">Reset & Coba Lagi</button>'}
          </div>
        </div>
      `;
      const lsrList = document.getElementById('lsrList');
      lsr.questions.forEach((q, i) => lsrList.appendChild(buildQuestion(q, i, 'lsr', submitted, saved.answers || {})));
      const umList = document.getElementById('umList');
      um.questions.forEach((q, i) => umList.appendChild(buildQuestion(q, i, 'umum', submitted, saved.answers || {})));

      if (!submitted) {
        const submit = document.createElement('button');
        submit.className = 'navbtn primary';
        submit.style.marginTop = '18px';
        submit.textContent = 'Kirim & Nilai';
        submit.onclick = () => gradePosttest(d);
        c.querySelector('.inner').appendChild(submit);
      } else {
        const cont = document.getElementById('posttestContinue');
        if (cont) cont.onclick = () => Navigation.go(Navigation.idx + 1);
        const retry = document.getElementById('posttestRetry');
        if (retry) retry.onclick = () => {
          State.set('posttest', { answers: {}, submitted: false, score: 0 });
          renderPosttest();
        };
      }
    });
  }

  function gradePosttest(d) {
    const answers = {};
    const lsrQs = d.posttest.sections.lsr.questions;
    const umQs = d.posttest.sections.umum.questions;
    let lsrCorrect = 0, umCorrect = 0;

    lsrQs.forEach((q, i) => {
      const sel = document.querySelector(`input[name="lsr-${i}"]:checked`);
      const ans = sel ? +sel.value : -1;
      answers[`lsr-${i}`] = ans;
      if (ans === q.a) lsrCorrect++;
    });
    umQs.forEach((q, i) => {
      const sel = document.querySelector(`input[name="umum-${i}"]:checked`);
      const ans = sel ? +sel.value : -1;
      answers[`umum-${i}`] = ans;
      if (ans === q.a) umCorrect++;
    });

    const lsrPass = lsrCorrect === lsrQs.length;
    const umScore = Math.round((umCorrect / umQs.length) * 100);
    const umPass = umScore >= d.posttest.passing;
    const pass = lsrPass && umPass;
    const score = pass ? Math.round(((lsrCorrect + umCorrect) / (lsrQs.length + umQs.length)) * 100) : Math.max(0, umScore - (lsrPass ? 0 : 30));

    State.set('posttest', { answers, submitted: true, score, lsrPass, umPass });
    if (pass) {
      Effects.toast('🎉 LULUS! Skor: ' + score + '%', 'ok');
      Effects.confetti({ count: 60 });
    } else {
      const reasons = [];
      if (!lsrPass) reasons.push('Life-Saving Rules belum 100%');
      if (!umPass) reasons.push('Pengetahuan umum ' + umScore + '% (< ' + d.posttest.passing + '%)');
      Effects.toast('Belum lulus: ' + reasons.join('; '), 'bad');
    }
    renderPosttest();
  }

  function buildQuestion(q, i, group, submitted, saved) {
    const wrap = document.createElement('div');
    wrap.className = 'quiz-q';
    const qno = document.createElement('div');
    qno.className = 'qno';
    qno.textContent = 'Soal ' + (i + 1);
    wrap.appendChild(qno);

    const txt = document.createElement('div');
    txt.className = 'qtxt';
    txt.textContent = q.q;
    wrap.appendChild(txt);

    const opts = document.createElement('div');
    opts.className = 'quiz-opts';
    q.opts.forEach((o, j) => {
      const opt = document.createElement('label');
      opt.className = 'quiz-opt';
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `${group}-${i}`;
      radio.value = j;
      radio.style.display = 'none';
      opt.appendChild(radio);

      const dot = document.createElement('span');
      dot.className = 'dot';
      opt.appendChild(dot);

      const lbl = document.createElement('span');
      lbl.textContent = o;
      opt.appendChild(lbl);

      const prev = saved[`${group}-${i}`];
      if (prev !== undefined && +prev === j) opt.classList.add('selected');

      if (submitted) {
        if (j === q.a) opt.classList.add('correct');
        else if (prev !== undefined && +prev === j) opt.classList.add('wrong');
        opt.style.pointerEvents = 'none';
      } else {
        opt.addEventListener('click', () => {
          opts.querySelectorAll('.quiz-opt').forEach(el => el.classList.remove('selected'));
          opt.classList.add('selected');
          radio.checked = true;
        });
      }
      opts.appendChild(opt);
    });
    wrap.appendChild(opts);

    if (submitted && q.fb) {
      const sel = saved[`${group}-${i}`];
      const ok = sel !== undefined && +sel === q.a;
      const fb = document.createElement('div');
      fb.className = 'quiz-feedback ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = `<b>${ok ? '✓ Benar.' : '✗ Kurang tepat.'}</b> ${q.fb}`;
      wrap.appendChild(fb);
      wrap.classList.add(ok ? 'correct' : 'wrong');
    }

    return wrap;
  }

  /* ============================================================
     RISK MATRIX INTERACTIVE BIND
     ============================================================ */
  function bindRiskMatrix() {
    const matrix = document.getElementById('riskMatrix');
    if (!matrix) return;
    const examples = {
      'l1': 'Risiko rendah. Contoh: berjalan di area pedestrian. APD standar cukup.',
      'l2': 'Risiko rendah–sedang. Contoh: inspeksi visual area kerja.',
      'l3': 'Risiko sedang. Contoh: bekerja di dekat alat berat dengan jarak aman.',
      'l4': 'Risiko tinggi. Contoh: bekerja di atas 1,8 m tanpa harness, atau dekat highwall aktif.',
      'l5': 'Risiko ekstrem. Contoh: confined space tanpa permit, hot work dekat bahan mudah terbakar, geoteknik hazard aktif. STOP WORK.',
    };
    matrix.querySelectorAll('.rm-cell').forEach(c => {
      c.addEventListener('click', () => {
        Effects.toast(examples[c.dataset.level] || '', c.dataset.level === 'l5' ? 'bad' : c.dataset.level === 'l4' ? 'warn' : 'ok');
        matrix.querySelectorAll('.rm-cell').forEach(x => x.style.outline = '');
        c.style.outline = '3px solid var(--amber)';
        c.style.outlineOffset = '2px';
      });
    });
  }

  /* ============================================================
     APD SELECTOR INTERACTIVE BIND
     ============================================================ */
  function bindAPDSelector() {
    const tasks = [
      { id: 'las', name: 'Pengelasan (Welding)', items: ['helmet','glass','glove','boot','vest','leather-apron'] },
      { id: 'chem', name: 'Penanganan Asam Sulfat', items: ['helmet','glass','chem-suit','chem-glove','chem-boot','vest'] },
      { id: 'h', name: 'Kerja di Ketinggian', items: ['helmet','glass','harness','boot','vest'] },
      { id: 'noise', name: 'Area Bising (Plant)', items: ['helmet','glass','earp','boot','vest'] },
      { id: 'dust', name: 'Area Berdebu', items: ['helmet','glass','mask','boot','vest'] },
      { id: 'weld-grind', name: 'Grinding / Cutting', items: ['helmet','face-shield','glass','glove','boot','vest'] },
      { id: 'elec', name: 'Pekerjaan Listrik', items: ['helmet','glass','elec-glove','boot','arc-suit'] },
      { id: 'water', name: 'Di Atas Air (Jetty)', items: ['helmet','glass','vest','boot','life-jacket'] },
    ];

    const apdLib = {
      'helmet': { name: 'Helm Safety', sub: 'SNI/ANSI, chinstrap' },
      'glass': { name: 'Kacamata Safety', sub: 'Side shield' },
      'glove': { name: 'Sarung Tangan Umum', sub: 'Cut-resistant' },
      'boot': { name: 'Safety Boots', sub: 'Steel toe + anti-slip' },
      'vest': { name: 'High-Vis Vest', sub: 'Reflektif' },
      'leather-apron': { name: 'Apron Kulit', sub: 'Tahan percikan api' },
      'chem-suit': { name: 'Chemical Suit', sub: 'Tahan asam' },
      'chem-glove': { name: 'Sarung Tangan Kimia', sub: 'Nitrile/butyl' },
      'chem-boot': { name: 'Boots Tahan Kimia', sub: 'PVC/rubber' },
      'harness': { name: 'Full Body Harness', sub: 'Double lanyard' },
      'earp': { name: 'Earplug/Earmuff', sub: '≥85 dBA' },
      'mask': { name: 'Respirator', sub: 'Fit-tested' },
      'face-shield': { name: 'Face Shield', sub: 'Full face' },
      'elec-glove': { name: 'Sarung Tangan Isolasi', sub: 'Class sesuai tegangan' },
      'arc-suit': { name: 'Arc Flash Suit', sub: 'CAT 2+' },
      'life-jacket': { name: 'Life Jacket', sub: 'Auto-inflate' },
    };

    const btns = document.getElementById('apdTaskBtns');
    const list = document.getElementById('apdList');
    const res = document.getElementById('apdResult');
    let activeTask = null;

    btns.addEventListener('click', e => {
      const b = e.target.closest('.apd-task');
      if (!b) return;
      btns.querySelectorAll('.apd-task').forEach(x => x.style.background = '');
      b.style.background = 'var(--amber-soft)';
      b.style.borderColor = 'var(--amber)';
      activeTask = tasks.find(t => t.id === b.dataset.task);
      renderList();
    });

    function renderList() {
      if (!activeTask) return;
      list.innerHTML = activeTask.items.map(id => `
        <label class="apd-row" data-id="${id}">
          <span class="check"></span>
          <span class="name">${apdLib[id]?.name || id}<small>${apdLib[id]?.sub || ''}</small></span>
        </label>
      `).join('');
      list.querySelectorAll('.apd-row').forEach(r => {
        r.addEventListener('click', () => {
          r.classList.toggle('selected');
          updateResult();
        });
      });
      res.innerHTML = '';
    }

    function updateResult() {
      const need = new Set(activeTask.items);
      const got = new Set([...list.querySelectorAll('.apd-row.selected')].map(el => el.dataset.id));
      const missing = [...need].filter(x => !got.has(x));
      const extra = [...got].filter(x => !need.has(x));

      let cls = 'ok', icon = '✓', txt = '';
      if (missing.length > 0) {
        cls = 'fail'; icon = '✗';
        txt = `<b style="color:var(--red)">APD belum lengkap.</b> Anda masih perlu: ${missing.map(x => `<code>${apdLib[x]?.name || x}</code>`).join(', ')}.`;
      } else {
        cls = 'ok'; icon = '✓';
        txt = `<b style="color:var(--green)">APD lengkap.</b> Anda siap bekerja untuk tugas <b>${activeTask.name}</b>.`;
      }
      if (extra.length > 0) {
        txt += `<br><span style="color:var(--amber)">⚠ Anda memilih APD ekstra: ${extra.map(x => apdLib[x]?.name || x).join(', ')}.</span>`;
      }
      res.innerHTML = `<div class="apd-result ${cls}"><span style="font-size:18px">${icon}</span> ${txt}</div>`;
    }
  }

  return { renderPretest, renderPosttest, bindRiskMatrix, bindAPDSelector };
})();
