'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import FloatingField from './FloatingField';
import { EMAIL_RE, formMessages } from './messages';

type Props = { title: string; submit?: string; tone?: 'light' | 'dark'; /** Keeps the page outline in order (h1 → h2 → h3). */ headingLevel?: 'h2' | 'h3' };
type State = 'idle' | 'sending' | 'done';

/** Name / Email* / Message form posting to /api/contact. */
export default function ContactForm({ title, submit = 'Send', tone = 'light', headingLevel: Heading = 'h3' }: Props) {
  const [state, setState] = useState<State>('idle');
  const [error, setError] = useState<string>();
  const [failure, setFailure] = useState<string>();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!EMAIL_RE.test(data.email?.trim() ?? '')) { setError(formMessages.invalidEmail); return; }
    setError(undefined);
    setFailure(undefined);
    setState('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      setState('done');
    } catch {
      setFailure(formMessages.failure);
      setState('idle');
    }
  }

  const dark = tone === 'dark';
  return (
    <div className="relative">
      {state === 'done' ? (
        <div
          className="flex min-h-[22rem] animate-rise flex-col items-center justify-center text-center"
          role="status"
        >
          <span
            className="grid size-16 animate-pop [animation-delay:100ms] place-items-center rounded-full bg-emerald-500 text-white shadow-card"
          >
            <CheckCircle2 className="size-8" aria-hidden />
          </span>
          <p className={`mt-6 max-w-sm font-display text-2xl font-bold ${dark ? 'text-white' : 'text-brand-950'}`}>{formMessages.contactSuccess}</p>
        </div>
      ) : (
        <form method="post" action="/api/contact" onSubmit={onSubmit} noValidate className="space-y-4">
          <Heading className={`font-display text-2xl font-bold ${dark ? 'text-white' : 'text-brand-950'}`}>{title}</Heading>
          <FloatingField name="name" label="Name" autoComplete="name" tone={tone} />
          <FloatingField name="email" type="email" label="Email*" autoComplete="email" required error={error} tone={tone} />
          <FloatingField name="message" label="Message" multiline tone={tone} />
          {failure && <p role="alert" className="text-[13px] font-semibold text-red-500">{failure}</p>}
          <button
            type="submit"
            disabled={state === 'sending'}
            className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-wait disabled:opacity-80 sm:w-auto"
          >
            {state === 'sending' ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />}
            {state === 'sending' ? formMessages.sending : submit}
          </button>
        </form>
      )}
    </div>
  );
}
