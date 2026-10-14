// Content from the original home page section "Better Skills - Better Care - Better Results".
export type CareHighlight = {
  title: string;
  description: string;
  href: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const careHighlights = {
  title: "Better Skills - Better Care - Better Results",
  cards: [
    {
      "title": "Individualized Care Plans",
      "description": "Our home health services include personalized care plans that are tailored to meet individual medical needs, guided by skilled nursing care and focused on achieving recovery goals for better health outcomes at home.",
      "href": "/individualized-care-plans",
      "image": {
        "src": "/assets/images/1-f4531c4a.jpg",
        "width": 1500,
        "height": 1500,
        "alt": "Stethoscope with paper hearts symbolizing heart health and care."
      }
    },
    {
      "title": "Reduced Hospital Re-Admissions",
      "description": "Our skilled clinical team provides personalized care plans and closely monitors each patient through our home health services to prevent complications and reduce unnecessary hospital visits, helping patients heal safely at home.",
      "href": "/reduced-hospital-re-ad",
      "image": {
        "src": "/assets/images/2-5135e91e.jpg",
        "width": 1095,
        "height": 1095,
        "alt": "Empty hospital beds with blue privacy curtains in a clean ward."
      }
    },
    {
      "title": "Patient Experience and Communication",
      "description": "Clear, compassionate communication with patients, families, and healthcare providers ensures trust and a supportive care experience, especially in home health services that focus on personalized care plans and skilled nursing care.",
      "href": "/patient-experience-and",
      "image": {
        "src": "/assets/images/3-3ac50dd6.jpg",
        "width": 1500,
        "height": 1500,
        "alt": "A young woman affectionately hugging an elderly woman sitting on a couch."
      }
    }
  ] satisfies CareHighlight[],
};

// ---- generated home sections ----
import type { Img, Rich } from './types';

export const home: {
  split: { eyebrow: string; title: string; body: Rich; image: Img };
  servicesTitle: string;
  cta: { lines: string[]; button: string };
  contact: { title: string; intro: string; body: Rich; address: string; formTitle: string; submit: string };
  newsletter: { title: string; description: string; label: string; button: string };
} = {
  "split": {
    "eyebrow": "In Love Thy Neighbor Home Health Care",
    "title": "Your health is our priority",
    "body": "<p>Your well-being comes first in everything we do. We are committed to providing <strong>compassionate, personalized care plans</strong> that include skilled nursing care, supporting your health, comfort, and peace of mind every step of the way.</p>",
    "image": {
      "src": "/assets/images/Untitled-design-14-606c675e.jpg",
      "width": 1920,
      "height": 1080,
      "alt": "Hand arranging wooden blocks with health-related icons symbolizing medical care."
    }
  },
  "servicesTitle": "The Services We Offer",
  "cta": {
    "lines": [
      "Let us provide the care you deserve",
      "Call today to speak with our team"
    ],
    "button": "CALL US"
  },
  "contact": {
    "title": "Contact Us",
    "intro": "Your health and comfort matter—contact us now to get started with personalized home care services.",
    "body": "<p>For inquiries about our home health services, please email us at <a href=\"mailto:homehealth@lovethyneighborcs.com\">homehealth@lovethyneighborcs.com</a>. We specialize in personalized care plans and skilled nursing care to meet your needs. You can also reach us by phone at +1 352-787-0499 or fax at 352-561-2064.</p>",
    "address": "2620 Industrial St Ste 110, Leesburg, FL, United States",
    "formTitle": "Drop us a line!",
    "submit": "Send"
  },
  "newsletter": {
    "title": "Subscribe to our Newsletter",
    "description": "Sign up to be the first to know about our soft launch events for home health services, where we will showcase our personalized care plans and skilled nursing care options.",
    "label": "Email",
    "button": "Sign up"
  }
};
