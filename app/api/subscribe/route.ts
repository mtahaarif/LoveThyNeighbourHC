import { deliver, readSubmission } from '@/lib/form-submissions';

export async function POST(request: Request) {
  const data = await readSubmission(request, ['email']);
  if (!data) return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  const ok = await deliver('subscribe', data);
  return ok ? Response.json({ ok: true }) : Response.json({ error: 'Delivery failed' }, { status: 502 });
}
