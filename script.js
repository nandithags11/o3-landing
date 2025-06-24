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

  if (!val) {
    alert('Please provide your email or phone.');
    return;
  }

  fetch('http://127.0.0.1:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: val })
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      alert(`✅ ${data.message}`);
    } else if (data.error) {
      alert(`⚠️ ${data.error}`);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Something went wrong while submitting. Please try again later.');
  });
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
