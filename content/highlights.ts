// The original pages still carried GoDaddy template text ("…a platform…real-time chat", "from web development to
// digital marketing", "high-quality electronics to stylish fashion accessories"). The sections below are rewritten
// using only facts the agency publishes elsewhere on this site (About, services, home cards and its own articles).
import type { Highlight } from './types';

export const highlights: Highlight[] = [
  {
    "slug": "individualized-care-plans",
    "title": "Individualized Care Plans",
    "sections": [
      {
        "heading": "Built Around the Patient",
        "body": "<p>Every care plan we provide is thoughtfully designed around the <strong>patient’s medical needs, physician’s recommendations and personal goals</strong> for recovery and well-being. We believe healing happens best at home, surrounded by dignity, respect and compassionate support.</p>"
      },
      {
        "heading": "Guided by Skilled Nursing",
        "body": "<p>Our licensed nurses deliver physician-directed care and work closely with physicians, therapists and other healthcare professionals, so each plan stays tailored to the patient. Care can include monitoring vital signs, managing medications, wound care, managing chronic conditions such as diabetes or heart disease, and educating patients and families.</p>"
      },
      {
        "heading": "Adjusted as Recovery Progresses",
        "body": "<p>Nurses carry out a professional assessment at each visit, which lets them identify concerns early and work with the patient’s physician when the care plan needs to change, from the initial consultation to full recovery or long-term support.</p>"
      }
    ]
  },
  {
    "slug": "reduced-hospital-re-ad",
    "title": "Reduced Hospital Re-Admissions",
    "sections": [
      {
        "heading": "Close Monitoring at Home",
        "body": "<p>Our skilled clinical team provides personalized care plans and <strong>closely monitors each patient</strong> to prevent complications and reduce unnecessary hospital visits, helping patients heal safely at home.</p>"
      },
      {
        "heading": "Support After a Hospital Stay",
        "body": "<p>After surgery, hospitalization or illness, patients often need close monitoring to support healing. Skilled nurses provide wound care, medication management and assessments at each visit, and communicate with the physician as soon as adjustments are needed.</p>"
      },
      {
        "heading": "Education That Prevents Setbacks",
        "body": "<p>Beyond clinical care, our nurses teach patients and families about medications, lifestyle changes and disease management. That confidence helps patients manage their health, maintain their independence and avoid going back to the hospital.</p>"
      }
    ]
  },
  {
    "slug": "patient-experience-and",
    "title": "Patient Experience and Communication",
    "sections": [
      {
        "heading": "Clear, Compassionate Communication",
        "body": "<p>Clear, compassionate communication with patients, families and healthcare providers builds trust and a supportive care experience. We keep <strong>families informed every step of the way</strong>.</p>"
      },
      {
        "heading": "Partnership With Families and Physicians",
        "body": "<p>Our mission is to deliver compassionate, high-quality care through licensed healthcare professionals, personalized care plans and meaningful partnerships with patients, families and physicians, so every person receives the respect, safety and support they deserve.</p>"
      },
      {
        "heading": "Every Patient Treated Like Family",
        "body": "<p>We treat every patient like family and every home like our own, and we deliver services without discrimination based on race, religion, age, gender, disability, ethnicity, cultural background or national origin.</p>"
      }
    ]
  }
];

export const getHighlight = (slug: string) => highlights.find((h) => h.slug === slug);
