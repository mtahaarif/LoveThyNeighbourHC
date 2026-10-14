// Answers draw only on facts published elsewhere on this site (About, Services, Insurance, Contact).
// The original page still carried GoDaddy's placeholder questions ("When will … launch?").
import type { Rich } from './types';

export const faqs: { title: string; items: { question: string; answer: Rich }[] } = {
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "Who is Love Thy Neighbor Home Health Care?",
      "answer": "<p>Love Thy Neighbor Home Health Care, Inc. is a <strong>Medicare-certified, Medicaid-licensed and AHCA-licensed</strong> home health agency. Our licensed healthcare professionals deliver patient-centered care in the comfort and safety of home, and every care plan is built around the patient’s medical needs, physician’s recommendations and personal goals. <a href=\"/about\">Learn more about our agency</a>.</p>"
    },
    {
      "question": "Which areas do you serve?",
      "answer": "<p>We proudly serve individuals and families throughout <strong>Lake, Marion, Citrus and Sumter counties</strong> in Florida. Our office is at 2620 Industrial St, Suite 110, Leesburg, FL 34748.</p>"
    },
    {
      "question": "What home health services do you offer?",
      "answer": "<p>Our services include <a href=\"/skilled-nursing-care\">skilled nursing care</a>, <a href=\"/non-skilled-care\">non-skilled care</a> for everyday living, <a href=\"/private-duty-nursing\">private duty nursing</a>, <a href=\"/pediatric-private-nurse\">pediatric private duty nursing</a> and premium <a href=\"/concierge-services\">concierge home health services</a>.</p>"
    },
    {
      "question": "What is the difference between skilled and non-skilled care?",
      "answer": "<p>Skilled nursing care is clinical treatment delivered by licensed nurses under physician supervision, to support recovery, manage chronic conditions and prevent unnecessary hospital stays. Non-skilled care is compassionate support with everyday living that helps a person stay comfortable, safe and independent at home.</p>"
    },
    {
      "question": "Is home health care covered by insurance?",
      "answer": "<p>Often, yes. Coverage depends on your insurance plan, medical necessity and the services required. We are Medicare-certified and Medicaid-licensed, and we also accept Anthem Blue Cross Blue Shield, CareCentrix, Cigna, Humana, Northwell, Palmetto GBA, Sunshine Health and UnitedHealthcare. Self-pay options are available, and our team helps families verify eligibility. See our <a href=\"/insurance-information\">insurance information</a> or call us to check your coverage.</p>"
    },
    {
      "question": "How do I get started?",
      "answer": "<p>Call us at <a href=\"tel:+13527870499\">+1 352-787-0499</a> or send your details through our <a href=\"/how-to-get-started\">get started form</a>, and a member of our team will contact you within 24 hours.</p>"
    },
    {
      "question": "What are your office hours?",
      "answer": "<p>Our office is open <strong>Monday to Friday, 9:00 AM to 5:00 PM</strong>, and closed on Saturday and Sunday.</p>"
    },
    {
      "question": "Do you provide care without discrimination?",
      "answer": "<p>Yes. We deliver services without discrimination based on race, religion, age, gender, disability, ethnicity, cultural background or national origin. Our mission is simple: to treat every patient like family and every home like our own.</p>"
    }
  ]
};
