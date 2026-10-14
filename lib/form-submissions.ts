const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Submission = Record<string, string>;

/** True for a plain HTML form post (JavaScript off), which expects a page back rather than JSON. */
export const isFormPost = (request: Request) => !(request.headers.get('content-type') ?? '').includes('application/json');

/** After a plain form post, sends the visitor back to the page they came from. */
export function backToForm(request: Request, ok: boolean) {
  const self = new URL(request.url);
  let back = new URL(request.headers.get('referer') ?? '/', self);
  if (back.origin !== self.origin) back = new URL('/', self); // never redirect off-site
  back.searchParams.set('form', ok ? 'sent' : 'error');
  return Response.redirect(back, 303);
}

/**
 * Reads the submitted string fields (a JSON body from the enhanced forms, or form data when JavaScript is
 * off), keeping only the allowed keys (trimmed, length-capped).
 */
export async function readSubmission(request: Request, fields: string[]): Promise<Submission | null> {
  let body: unknown;
  try {
    body = isFormPost(request) ? Object.fromEntries(await request.formData()) : await request.json();
  } catch {
    return null;
  }
  if (!body || typeof body !== 'object') return null;
  const out: Submission = {};
  for (const f of fields) {
    const v = (body as Record<string, unknown>)[f];
    out[f] = typeof v === 'string' ? v.trim().slice(0, 5000) : '';
  }
  return EMAIL.test(out.email ?? '') ? out : null;
}

/**
 * Delivers a submission. The original site posted to GoDaddy's form service; here submissions are
 * forwarded as JSON to FORMS_WEBHOOK_URL when it is configured (e.g. a Zapier/Make/Slack hook or your
 * own mail service), and always logged on the server.
 */
export async function deliver(kind: 'contact' | 'subscribe', data: Submission): Promise<boolean> {
  console.info(`[forms] ${kind} submission`, { ...data, receivedAt: new Date().toISOString() });
  const url = process.env.FORMS_WEBHOOK_URL;
  if (!url) return true;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ kind, ...data, site: 'lovethyneighborhhc.com' }),
    });
    return res.ok;
  } catch (e) {
    console.error('[forms] webhook delivery failed', e);
    return false;
  }
}
