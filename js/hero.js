// "Step inside" hero: the headline lifts away, the room zooms in, then one line lands.
(() => {
  const section = document.querySelector('[data-shero]');
  if (!section) return;
  const img = section.querySelector('[data-shero-img]');
  const copy = section.querySelector('[data-shero-copy]');
  const line = section.querySelector('[data-shero-line]');
  const dim = section.querySelector('[data-shero-dim]');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = v => Math.min(Math.max(v, 0), 1);
  const seg = (p, a, b) => clamp((p - a) / (b - a));

  function render() {
    const r = section.getBoundingClientRect();
    const p = clamp(-r.top / (r.height - innerHeight));
    const out = seg(p, 0.02, 0.26), land = seg(p, 0.34, 0.66);
    copy.style.opacity = String(1 - out);
    copy.style.transform = still ? '' : `translateY(${-out * 90}px)`;
    copy.style.visibility = out >= 1 ? 'hidden' : '';
    if (!still) img.style.transform = `scale(${1 + p * 0.28})`;
    document.body.classList.toggle('over-hero', r.bottom > 80);
    dim.style.opacity = String(land);
    line.style.opacity = String(land);
    line.style.transform = still ? '' : `translateY(${(1 - land) * 40}px) scale(${0.96 + land * 0.04})`;
  }

  let queued = false;
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; render(); }); } }, { passive: true });
  addEventListener('resize', render);
  render();

  // The five day blocks rise in together when they arrive.
  const blocks = document.querySelector('[data-dblocks]');
  if (blocks) new IntersectionObserver(([e], io) => { if (e.isIntersecting) { blocks.classList.add('in'); io.disconnect(); } }, { threshold: 0.2 }).observe(blocks);
})();
