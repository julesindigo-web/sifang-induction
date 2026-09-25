/* ============================================================
   QUIZ — Pre-test & Post-test engine (with critical LSR section)
   ============================================================ */

const Quiz = (() => {
  let data = null;

  async function load() {
    const lang = (typeof I18n !== 'undefined' ? I18n.lang() : 'id');
    if (data && data._lang === lang) return data;
    const files = lang === 'zh' ? ['data/quiz-zh.json', 'data/quiz.json'] : ['data/quiz.json'];
    data = null;
    for (const f of files) {
      try {
        const r = await fetch(f);
        data = await r.json();
        data._lang = (f.indexOf('-zh') >= 0) ? 'zh' : 'id';
        break;
      } catch (e) { /* coba berkas berikut / fallback minimal */ }
    }
    if (!data) data = { _lang: lang, pretest: [], posttest: { sections: { lsr: { questions: [] }, umum: { questions: [] } } } };
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
          <div class="kicker k-teal">${I18n.t('q_eval_awal')}</div>
          <h2><em>${I18n.t('q_pre_h')}</em> — ${I18n.t('q_pre_h_sub')}</h2>
          <p class="lead">${I18n.t('q_pre_lead')}</p>
          <div class="quiz" id="pretestList"></div>
          <div id="pretestSummary" class="quiz-summary" style="display:${submitted ? 'block' : 'none'}">
            <div class="score">${saved.score || 0}%</div>
            <div class="verdict">${I18n.t('q_pre_done')}</div>
            <button class="navbtn primary" id="pretestContinue" style="margin-top:14px">${I18n.t('q_go_next')}</button>
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
        submit.textContent = I18n.t('q_send');
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
    Effects.toast(I18n.t('q_toast_pre') + score + '%', 'ok');
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
          <div class="kicker">${I18n.t('q_eval_akhir')}</div>
          <h2><em>${I18n.t('q_post_h')}</em> — ${I18n.t('q_post_h_sub')}</h2>
          <p class="lead">${I18n.t('q_post_lead_a')}<b style="color:var(--amber)">Life-Saving Rules</b>${I18n.t('q_post_lead_b')}${d.posttest.passing}%.</p>

          <h3 style="margin-top:24px; font-size:14px; color:var(--amber); letter-spacing:.1em; text-transform:uppercase;">${I18n.t('q_sec_a')}</h3>
          <div class="quiz" id="lsrList"></div>

          <h3 style="margin-top:24px; font-size:14px; color:var(--teal); letter-spacing:.1em; text-transform:uppercase;">${I18n.t('q_sec_b')}</h3>
          <div class="quiz" id="umList"></div>

          <div id="posttestSummary" class="quiz-summary" style="display:${submitted ? 'block' : 'none'}">
            <div class="score">${saved.score || 0}%</div>
            <div class="verdict">${saved.score >= 80 ? '✅ ' + I18n.t('q_pass_v') : '❌ ' + I18n.t('q_fail_v')}</div>
            ${saved.score >= 80
              ? `<button class="navbtn primary" id="posttestContinue" style="margin-top:14px">${I18n.t('q_go_sign')}</button>`
              : `<button class="navbtn" id="posttestRetry" style="margin-top:14px">${I18n.t('q_retry')}</button>`}
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
        submit.textContent = I18n.t('q_grade');
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
      Effects.toast('🎉 ' + I18n.t('q_toast_pass') + score + '%', 'ok');
      Effects.confetti({ count: 60 });
    } else {
      const reasons = [];
      if (!lsrPass) reasons.push(I18n.t('q_lsr_need'));
      if (!umPass) reasons.push(I18n.t('q_umum_need') + umScore + '% (< ' + d.posttest.passing + '%)');
      Effects.toast(I18n.t('q_fail_v').split('.')[0] + ': ' + reasons.join('; '), 'bad');
    }
    renderPosttest();
  }

  function buildQuestion(q, i, group, submitted, saved) {
    const wrap = document.createElement('div');
    wrap.className = 'quiz-q';
    const qno = document.createElement('div');
    qno.className = 'qno';
    qno.textContent = I18n.t('q_qno') + (i + 1) + I18n.t('q_qno_b');
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
      fb.innerHTML = `<b>${ok ? I18n.t('q_ok') : I18n.t('q_bad')}</b> ${q.fb}`;
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
      'l1': I18n.t('risk_l1'),
      'l2': I18n.t('risk_l2'),
      'l3': I18n.t('risk_l3'),
      'l4': I18n.t('risk_l4'),
      'l5': I18n.t('risk_l5'),
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
      { id: 'las', name: I18n.t('apd_t_las'), items: ['helmet','glass','glove','boot','vest','leather-apron'] },
      { id: 'chem', name: I18n.t('apd_t_chem'), items: ['helmet','glass','chem-suit','chem-glove','chem-boot','vest'] },
      { id: 'h', name: I18n.t('apd_t_h'), items: ['helmet','glass','harness','boot','vest'] },
      { id: 'noise', name: I18n.t('apd_t_noise'), items: ['helmet','glass','earp','boot','vest'] },
      { id: 'dust', name: I18n.t('apd_t_dust'), items: ['helmet','glass','mask','boot','vest'] },
      { id: 'weld-grind', name: I18n.t('apd_t_grind'), items: ['helmet','face-shield','glass','glove','boot','vest'] },
      { id: 'elec', name: I18n.t('apd_t_elec'), items: ['helmet','glass','elec-glove','boot','arc-suit'] },
      { id: 'water', name: I18n.t('apd_t_water'), items: ['helmet','glass','vest','boot','life-jacket'] },
    ];

    const apdLib = {};
    ['helmet','glass','glove','boot','vest','leather-apron','chem-suit','chem-glove','chem-boot','harness','earp','mask','face-shield','elec-glove','arc-suit','life-jacket'].forEach(id => {
      const k = id.replace(/-/g, '_');
      apdLib[id] = { name: I18n.t('apd_n_' + k), sub: I18n.t('apd_s_' + k) };
    });

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
        txt = `<b style="color:var(--red)">${I18n.t('apd_need')}</b> ${I18n.t('apd_still')}${missing.map(x => `<code>${apdLib[x]?.name || x}</code>`).join(', ')}.`;
      } else {
        cls = 'ok'; icon = '✓';
        txt = `<b style="color:var(--green)">${I18n.t('apd_ready')}</b> ${I18n.t('apd_ready_for')} <b>${activeTask.name}</b>.`;
      }
      if (extra.length > 0) {
        txt += `<br><span style="color:var(--amber)">⚠ ${I18n.t('apd_extra')}${extra.map(x => apdLib[x]?.name || x).join(', ')}.</span>`;
      }
      res.innerHTML = `<div class="apd-result ${cls}"><span style="font-size:18px">${icon}</span> ${txt}</div>`;
    }
  }

  return { renderPretest, renderPosttest, bindRiskMatrix, bindAPDSelector };
})();
