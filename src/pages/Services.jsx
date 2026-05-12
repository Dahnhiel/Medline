import React from 'react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: 'Occupational Health',
    icon: 'fa-briefcase-medical',
    description: 'Specialized medical evaluations designed to determine employee fitness and ensure workplace safety.',
    features: ['Fitness-for-Duty Evaluations', 'Return-to-Work Assessments', 'Post-Offer Medical Screenings', 'OSHA Compliance Checks']
  },
  {
    title: 'Behavioral & Mental Health',
    icon: 'fa-brain-circuit',
    description: 'Comprehensive psychological and behavioral assessments for regulated industries and safety-sensitive roles.',
    features: ['Psychological Fitness Exams', 'Behavioral Health Screening', 'Stress & Resilience Testing', 'Substance Abuse Referrals']
  },
  {
    title: 'Clinical Support',
    icon: 'fa-user-md',
    description: 'Licensed providers delivering mobile, on-site, and remote clinical expertise to support your operations.',
    features: ['On-Site Clinical Staffing', 'Remote Consultation Services', 'Health Policy Development', 'Emergency Response Support']
  }
];

export default function Services() {
  return (
    <div className="pt-24 bg-white">
      {/* Header */}
      <section className="py-20 px-6 bg-[#f8fdfd]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#0B6E6E] font-bold tracking-[0.2em] uppercase text-xs">Expertise & Capabilities</span>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-[#063d3d] mt-4 mb-6">Our Core Services</h1>
          <p className="font-dm-sans text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Medline Health Services, LLC provides a full spectrum of clinical and behavioral health solutions tailored to the needs of modern organizations.
          </p>
        </div>
      </section>

      {/* Service Grids */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-6 text-[#0B6E6E]">
                  <i className={`fa-solid ${cat.icon} text-3xl`}></i>
                </div>
                <h2 className="font-playfair text-3xl font-bold text-[#063d3d] mb-6">{cat.title}</h2>
                <p className="font-dm-sans text-slate-600 text-lg mb-8 leading-relaxed">{cat.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cat.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-teal-200 transition-colors">
                      <i className="fa-solid fa-circle-check text-teal-600"></i>
                      <span className="font-dm-sans font-semibold text-sm text-[#063d3d]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#063d3d]/20 to-transparent"></div>
                  <img 
                    src={`https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000`} 
                    alt={cat.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}