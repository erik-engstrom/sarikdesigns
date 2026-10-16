// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');

function setOpen(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('open', open);
}

toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// Free site review form.
// Paste a Formspree (or similar) endpoint here to receive submissions directly,
// e.g. 'https://formspree.io/f/abcdwxyz'. Left empty, the form opens a
// pre-filled email to CONTACT_EMAIL instead, so it still works.
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'hello@sarikdesigns.com';

const form = document.getElementById('review-form');
const statusEl = form.querySelector('.form-status');
const submitBtn = form.querySelector('button[type="submit"]');
const formNote = document.getElementById('form-note');
if (FORM_ENDPOINT) formNote.textContent = 'This sends your details straight to us.';

// "Book a free site review" links jump to the form and put the cursor in it
document.querySelectorAll('a[href="#contact"]').forEach((a) =>
  a.addEventListener('click', () => setTimeout(() => form.elements.name.focus({ preventScroll: true }), 400))
);

function validate() {
  let firstBad = null;
  for (const el of form.querySelectorAll('[required]')) {
    const ok = el.value.trim() !== '' && el.checkValidity();
    el.setAttribute('aria-invalid', String(!ok));
    if (!ok && !firstBad) firstBad = el;
  }
  if (firstBad) {
    statusEl.textContent = 'Please add your name, business name and a valid email.';
    firstBad.focus();
  }
  return !firstBad;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (form.elements._gotcha.value) return; // bot filled the hidden field
  if (!validate()) return;

  const data = Object.fromEntries(new FormData(form));
  delete data._gotcha;

  if (!FORM_ENDPOINT) {
    const body = [
      `Name: ${data.name}`,
      `Business: ${data.business}`,
      `Email: ${data.email}`,
      `Current website: ${data.website || 'None yet'}`,
      '',
      data.notes || '',
    ].join('\n');
    const subject = `Free site review: ${data.business}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    statusEl.textContent = `Your email app should open with this filled in. If it doesn't, email ${CONTACT_EMAIL}.`;
    return;
  }

  submitBtn.disabled = true;
  statusEl.textContent = 'Sending…';
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(res.statusText);
    form.reset();
    statusEl.textContent = "Thanks! We got it and will be in touch soon.";
  } catch {
    statusEl.textContent = `Something went wrong. Please email ${CONTACT_EMAIL} instead.`;
  } finally {
    submitBtn.disabled = false;
  }
});
