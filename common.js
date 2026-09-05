const timeElement = document.getElementById('time');
const dayElement = document.getElementById('day');

function updateClock() {
  if (!timeElement || !dayElement) return;
  const now = new Date();
  timeElement.textContent = new Intl.DateTimeFormat('ja-JP', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }).format(now).replaceAll(':', ' : ');
  dayElement.textContent = new Intl.DateTimeFormat('ja-JP', { weekday: 'long' }).format(now);
}

const waterMode = document.querySelector('.water-mode');
if (waterMode) {
  waterMode.addEventListener('click', () => {
    const isCalm = document.body.classList.toggle('calm');
    waterMode.setAttribute('aria-pressed', String(isCalm));
    waterMode.textContent = isCalm ? '静かな水面' : '水面モード';
  });
}

updateClock();
if (timeElement) setInterval(updateClock, 1000);
