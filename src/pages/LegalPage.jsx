import React from 'react';
import { usePageSeo } from '../utils/seo';
import { DOCTOR_INFO } from '../data/siteData';

export default function LegalPage({ type = 'privacy' }) {
  let title = "Privacy Policy";
  let canonicalUrl = "/privacy-policy/";
  let content = null;

  if (type === 'terms') {
    title = "Terms & Conditions";
    canonicalUrl = "/terms-and-conditions/";
    content = (
      <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          Welcome to the official website of <strong>Prof. Dr. Mumraiz Naqshband</strong> (https://drmumraiznaqshband.com/). By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">1. Not Medical Advice</h3>
        <p>
          The content of this website is for general educational, informative, and appointment scheduling purposes only. It is not intended as a substitute for professional medical advice, clinical diagnosis, or individualized surgical treatment. Always seek the advice of a qualified orthopaedic surgeon or medical provider regarding any physical condition or symptoms.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">2. Intellectual Property & Credentials</h3>
        <p>
          All content, photographs, clinical descriptions, design assets, and logos are the property of Prof. Dr. Mumraiz Naqshband and may not be reproduced, copied, or modified without explicit written permission.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">3. Appointment Requests</h3>
        <p>
          Submitting an appointment request through online forms or messaging channels does not guarantee an immediate confirmed consultation slot. Our clinical coordinator will contact you to verify schedule availability.
        </p>
      </div>
    );
  } else if (type === 'disclaimer') {
    title = "Medical Disclaimer";
    canonicalUrl = "/medical-disclaimer/";
    content = (
      <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
          <strong>Important Clinical Notice:</strong> The information provided on https://drmumraiznaqshband.com/ is intended strictly for general informational guidance. Orthopaedic conditions require personalized physical examination, history taking, and radiological correlation.
        </div>

        <h3 className="text-xl font-bold font-heading text-brand-deep">Individual Surgical Outcomes</h3>
        <p>
          Every surgical procedure, including robotic knee replacement, total hip arthroplasty, and arthroscopic ligament reconstruction, involves clinical risks. Surgical recovery timelines, degrees of mobility restoration, and functional outcomes vary widely according to individual anatomy, body mass index (BMI), bone density, joint deformity, comorbidities, and dedication to post-operative physical therapy.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">No Doctor-Patient Relationship Established</h3>
        <p>
          Interacting with this website or sending information via contact forms or WhatsApp does not constitute the establishment of a formal doctor-patient relationship. A doctor-patient relationship is formed only after an in-person or official clinical consultation has taken place.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">Emergency Care</h3>
        <p>
          This website is not monitored 24/7 for acute trauma emergencies. If you are experiencing acute trauma, severe fracture, or medical emergency, proceed immediately to the nearest hospital emergency department.
        </p>
      </div>
    );
  } else {
    // Privacy Policy
    content = (
      <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          This Privacy Policy describes how <strong>Prof. Dr. Mumraiz Naqshband</strong> collects, uses, and safeguards personal information provided by visitors to our website (https://drmumraiznaqshband.com/).
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">1. Information We Collect</h3>
        <p>
          When you request an appointment or contact our clinical desk via forms, phone, or WhatsApp, we may collect your name, phone number, email address, preferred clinic location, and any symptoms or prior medical notes you voluntarily choose to share.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">2. Confidentiality & Medical Privacy</h3>
        <p>
          We adhere to strict ethical medical confidentiality standards. Your personal and health-related information is used exclusively by Prof. Dr. Mumraiz Naqshband and authorized clinical coordinators for the purpose of communicating with you and arranging your medical care. We never sell, rent, or trade patient personal data to third parties.
        </p>

        <h3 className="text-xl font-bold font-heading text-brand-deep">3. Inquiries</h3>
        <p>
          If you have questions regarding our privacy practices or wish to update or delete your contact details from our scheduling logs, please contact our clinic desk at <strong>{DOCTOR_INFO.phone}</strong>.
        </p>
      </div>
    );
  }

  usePageSeo({
    title: `${title} | Prof. Dr. Mumraiz Naqshband`,
    description: `Official ${title} for the medical practice and website of Prof. Dr. Mumraiz Naqshband, Consultant Orthopaedic Surgeon in Lahore.`,
    canonicalUrl
  });

  return (
    <div className="bg-white">
      
      <section className="bg-gradient-to-b from-brand-deep to-[#0e2c47] text-white py-12 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            {title}
          </h1>
          <p className="text-white/70 text-sm mt-2">
            Prof. Dr. Mumraiz Naqshband | Consultant Orthopaedic Surgeon | Lahore, Pakistan
          </p>
        </div>
      </section>

      <section className="py-14 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-sm">
            {content}
          </div>
        </div>
      </section>
    </div>
  );
}
