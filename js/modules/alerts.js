const KEY = 'truckspot.alerts';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function initAlerts(form) {
  if (!form) return;

  const email = form.querySelector('#email');
  const error = form.querySelector('#email-error');
  const ok    = form.querySelector('#alerts-success');

  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (saved?.email) email.value = saved.email;
  } catch {}

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideMsg();

    const value = email.value.trim();
    if (!EMAIL_RE.test(value)) return showError('Please enter a valid email address.');

    const channels = [...form.querySelectorAll('input[name="channel"]:checked')].map(i => i.value);
    if (!channels.length) return showError('Choose at least one channel.');

    try { localStorage.setItem(KEY, JSON.stringify({ email: value, channels, ts: Date.now() })); } catch {}

    ok.hidden = false;
    setTimeout(() => { ok.hidden = true; }, 5000);
  });

  function showError(msg) {
    error.textContent = msg;
    error.hidden = false;
    email.setAttribute('aria-invalid', 'true');
    email.focus();
  }

  function hideMsg() {
    error.hidden = true;
    email.removeAttribute('aria-invalid');
    ok.hidden = true;
  }
}
