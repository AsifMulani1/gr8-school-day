// Page behaviour: nav, hero zoom, reveals, project stages, skills, form, sticky CTA.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { stages, skills } = window.GR8;

  function onScroll(fn) {
    let queued = false;
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; fn(); }); } }, { passive: true });
    fn();
  }

  // Nav turns solid after the hero; the sticky phone CTA hides over the form.
  const nav = $('[data-nav]'), sticky = $('[data-sticky]'), register = $('#register'), media = $('[data-hero-media]');
  onScroll(() => {
    const y = scrollY;
    nav.classList.toggle('solid', y > 40);
    const reg = register.getBoundingClientRect();
    sticky.classList.toggle('show', y > innerHeight * 0.8 && reg.top > innerHeight * 0.9);
    if (!still && media) {
      const k = Math.min(Math.max((y - 60) / (innerHeight * 0.8), 0), 1);
      media.style.transform = `scale(${1 + k * 0.08})`;
    }
  });

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
  $$('.reveal').forEach(el => io.observe(el));

  // Accessible tabs: arrow keys move between options.
  function tabs(container, items, render) {
    const buttons = items.map((html, i) => {
      const b = Object.assign(document.createElement('button'), { type: 'button', innerHTML: html });
      b.setAttribute('role', 'tab');
      b.addEventListener('click', () => select(i));
      b.addEventListener('keydown', e => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (d) { e.preventDefault(); const n = (i + d + items.length) % items.length; select(n); buttons[n].focus(); }
      });
      container.appendChild(b);
      return b;
    });
    function select(i) {
      buttons.forEach((b, j) => { b.setAttribute('aria-selected', String(i === j)); b.tabIndex = i === j ? 0 : -1; });
      render(i);
    }
    select(0);
    return buttons;
  }

  const img = $('[data-stage-img]'), stageText = $('[data-stage-text]');
  tabs($('[data-stages]'), stages.map(([t], i) => `<small>Step ${i + 1}</small>${t}`), i => {
    const [, text, key, alt] = stages[i];
    stageText.textContent = text;
    img.classList.add('fade');
    const next = new Image();
    next.src = `assets/img/${key}-1440.webp`;
    next.decode().catch(() => {}).then(() => { img.src = next.src; img.alt = alt; img.classList.remove('fade'); });
  }).forEach(b => b.classList.add('stage'));

  tabs($('[data-skills]'), skills.map(([s], i) => `<small>0${i + 1}</small>${s}`), i => {
    $('[data-cap]').textContent = skills[i][1];
    $('[data-ex]').textContent = skills[i][2];
  }).forEach(b => b.classList.add('skill'));

  // Form: validate on submit and on blur, show a success state; nothing is sent.
  const form = $('[data-form]');
  const checks = {
    name: f => f.elements.name.value.trim().length > 1,
    mobile: f => /^[6-9]\d{9}$/.test(f.elements.mobile.value.trim()),
    email: f => !f.elements.email.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.elements.email.value.trim()),
    grade: f => !!f.querySelector('input[name="grade"]:checked'),
    consent: f => f.elements.consent.checked,
  };
  const fieldOf = k => form.elements[k]?.closest?.('.field') || form.querySelector(`[name="${k}"]`).closest('.field');
  function check(k) {
    const ok = checks[k](form);
    if (k === 'consent') $('#e-consent').classList.toggle('show', !ok);
    else fieldOf(k).classList.toggle('invalid', !ok);
    const input = k === 'grade' ? null : form.elements[k];
    if (input) input.setAttribute('aria-invalid', String(!ok));
    return ok;
  }
  ['name', 'mobile', 'email'].forEach(k => form.elements[k].addEventListener('blur', () => { if (form.elements[k].value) check(k); }));
  form.elements.mobile.addEventListener('input', () => { form.elements.mobile.value = form.elements.mobile.value.replace(/\D/g, '').slice(0, 10); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const bad = Object.keys(checks).filter(k => !check(k));
    if (bad.length) {
      const first = bad[0] === 'grade' ? form.querySelector('input[name="grade"]') : form.elements[bad[0]];
      first.focus();
      return;
    }
    form.classList.add('done');
    const ok = $('[data-success]');
    ok.hidden = false;
    ok.tabIndex = -1;
    ok.focus();
  });
})();
