// GSAP ScrollTrigger for fade-up
gsap.registerPlugin(ScrollTrigger);
document.querySelectorAll('.fade-up').forEach(el => {
  gsap.to(el, {
    scrollTrigger: { trigger: el, start: 'top 80%', toggleClass: 'is-visible' },
  });
});

// Waitlist button alert
document.getElementById('joinBtn').addEventListener('click', () => {
  const val = document.getElementById('emailInput').value.trim();
  alert(val ? `Thanks! We'll keep you posted: ${val}` : 'Please provide your email or phone.');
});

// Custom cursor logic
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(2)');
  el.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(2)',''));
});
