'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Info } from 'lucide-react';
import FloatingField from '@/components/forms/FloatingField';
import { EMAIL_RE, formMessages } from '@/components/forms/messages';
import type { Field } from '@/content/types';

type Props = { fields: Field[]; submit: string; phone: { display: string; href: string } };

/**
 * Account forms from the original site. Accounts lived in GoDaddy's member system, which this site no
 * longer uses, so after validation visitors are pointed to the phone line instead.
 */
export default function AccountForm({ fields, submit, phone }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Record<string, string> = {};
    for (const f of fields) {
      const v = (data[f.name] ?? '').trim();
      if (f.required && !v) next[f.name] = `${f.label} is required.`;
      else if (f.type === 'email' && v && !EMAIL_RE.test(v)) next[f.name] = formMessages.invalidEmail;
    }
    if (data.confirmPassword !== undefined && data.password !== data.confirmPassword) next.confirmPassword = 'Passwords do not match.';
    setErrors(next);
    setNotice(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className={`grid gap-4 ${fields.length === 4 ? 'sm:grid-cols-2' : ''}`}>
        {fields.map((f) => (
          <FloatingField
            key={f.name}
            name={f.name}
            type={f.type === 'textarea' ? 'text' : f.type}
            label={f.label}
            autoComplete={f.autoComplete}
            required={f.required}
            error={errors[f.name]}
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full cursor-pointer rounded-full bg-brand-600 px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-700"
      >
        {submit}
      </button>
      <AnimatePresence>
        {notice && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex gap-3 rounded-2xl bg-brand-50 p-4 text-[14px] leading-relaxed text-brand-900 ring-1 ring-brand-100"
          >
            <Info className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden />
            <span>
              Online accounts aren’t available yet. Please call us at{' '}
              <a href={phone.href} className="font-bold text-brand-600 underline underline-offset-4">{phone.display}</a>.
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
