// Messages configured on the original site's form widgets.
export const formMessages = {
  contactSuccess: 'Thank you for your inquiry! We will get back to you within 48 hours.',
  subscribeSuccess: 'Thanks so much for signing up!',
  invalidEmail: 'Please enter a valid email address.',
  failure: 'Something went wrong while sending your message, please try again later',
  sending: 'Sending',
} as const;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
