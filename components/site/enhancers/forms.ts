import { listen, type Cleanup } from './dom';

// Messages configured on the original GoDaddy widgets.
const MESSAGES = {
  contact: {
    endpoint: '/api/contact',
    success: 'Thank you for your inquiry! We will get back to you within 48 hours.',
    failure: 'Something went wrong while sending your message, please try again later',
    sending: 'Sending',
  },
  subscribe: {
    endpoint: '/api/subscribe',
    success: 'Thanks so much for signing up!',
    failure: 'Something went wrong, please try again later',
    sending: 'Sending',
  },
} as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function submit(form: HTMLFormElement, kind: keyof typeof MESSAGES) {
  const cfg = MESSAGES[kind];
  const email = form.querySelector<HTMLInputElement>('input[name="email"]');
  // Some widgets render the error twice (one per breakpoint); CSS shows the right one.
  const errors = [...form.querySelectorAll<HTMLElement>('[data-form-error]')];
  const showError = (text?: string) => errors.forEach((e) => {
    if (text) (e.querySelector('p') ?? e).textContent = text;
    e.hidden = false;
  });
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!email || !EMAIL.test(email.value.trim())) {
    showError();
    email?.focus();
    return;
  }
  errors.forEach((e) => (e.hidden = true));

  const data = Object.fromEntries(
    [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[name], textarea[name]')].map((f) => [f.name, f.value]),
  );
  const label = button?.textContent ?? '';
  if (button) { button.disabled = true; button.textContent = cfg.sending; }
  try {
    const res = await fetch(cfg.endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
    if (!res.ok) throw new Error(String(res.status));
    const done = form.nextElementSibling instanceof HTMLElement && form.nextElementSibling.matches('[data-form-success]')
      ? form.nextElementSibling : null;
    if (done) { done.textContent = cfg.success; done.hidden = false; }
    form.hidden = true;
  } catch {
    showError(cfg.failure);
  } finally {
    if (button) { button.disabled = false; button.textContent = label; }
  }
}

/** Contact and newsletter forms: validation, submission and the confirmation message. */
export function enhanceForms(): Cleanup {
  return listen(document, 'submit', (e) => {
    const form = e.target instanceof HTMLFormElement ? e.target : null;
    const kind = form?.dataset.form as keyof typeof MESSAGES | undefined;
    if (!form) return;
    e.preventDefault(); // every form on the site is handled here (membership forms are display-only)
    if (kind && kind in MESSAGES) void submit(form, kind);
  });
}
