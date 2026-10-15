'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, Loader2, PartyPopper } from 'lucide-react';
import { EMAIL_RE, formMessages } from './messages';

/** Inline email signup posting to /api/subscribe. */
export default function NewsletterForm({ label, button }: { label: string; button: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState<string>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get('email') ?? '').trim();
    if (!EMAIL_RE.test(email)) { setError(formMessages.invalidEmail); return; }
    setError(undefined);
    setState('sending');
    try {
      const res = await fetch('/api/subscribe', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error(String(res.status));
      setState('done');
    } catch {
      setError(formMessages.failure);
      setState('idle');
    }
  }

  return (
    state === 'done' ? (
      <p
        role="status"
        className="inline-flex animate-rise items-center gap-3 rounded-full bg-white/15 px-6 py-4 font-bold text-white ring-1 ring-white/25"
      >
        <PartyPopper className="size-5 text-accent-300" aria-hidden /> {formMessages.subscribeSuccess}
      </p>
    ) : (
      <form method="post" action="/api/subscribe" onSubmit={onSubmit} noValidate className="w-full max-w-xl">
        <div className="flex flex-col gap-3 rounded-[1.75rem] bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur-xl sm:flex-row sm:rounded-full">
          <label htmlFor="newsletter-email" className="sr-only">{label}</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={label}
            aria-invalid={Boolean(error)}
            className="min-w-0 flex-1 rounded-full bg-transparent px-5 py-3 text-[15px] text-white placeholder:text-brand-100/70 focus:outline-none"
          />
          <button
            type="submit"
            disabled={state === 'sending'}
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3 text-[15px] font-bold text-brand-950 transition-all hover:bg-accent-400 disabled:opacity-80"
          >
            {state === 'sending' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
            {button}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </button>
        </div>
        {error && <p role="alert" className="mt-3 pl-4 text-[14px] font-semibold text-accent-300">{error}</p>}
      </form>
    )
  );
}
