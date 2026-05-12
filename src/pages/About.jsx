import React from 'react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: 'fa-microscope',
    title: 'Evidence-Based',
    desc: 'Our evaluations are grounded in the latest clinical research and diagnostic standards.'
  },
  {
    icon: 'fa-gavel',
    title: 'Defensible Metrics',
    desc: 'We provide thorough documentation that stands up to regulatory and legal scrutiny.'
  },
  {
    icon: 'fa-user-check',
    title: 'Patient-Centered',
    desc: 'Even in high-stakes assessments, we treat every individual with dignity and professional care.'
  }
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-slate-50 py-20 px-6 border-b border-teal-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-[#0B6E6E] text-xs font-bold tracking-widest uppercase mb-6">
              Our Identity
            </span>
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-[#063d3d] leading-tight mb-8">
              Clinical Excellence for a <br/>
              <span className="text-[#0B6E6E]">Ready Workforce.</span>
            </h1>
            <p className="font-dm-sans text-lg text-slate-600 leading-relaxed mb-6">
              Medline Health Services, LLC was founded to bridge the gap between high-level clinical expertise and the practical needs of workforce health and safety. 
            </p>
            <p className="font-dm-sans text-slate-600 leading-relaxed italic border-l-4 border-teal-600 pl-6 py-2">
              "Our mission is to strengthen organizations by ensuring their most valuable asset—their people—are healthy, safe, and mission-ready."
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Professionalism" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-[#063d3d] p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <p className="text-3xl font-bold text-teal-400">100%</p>
              <p className="text-xs uppercase tracking-widest opacity-70">Regulatory Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Medline Difference */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-[#063d3d] mb-6">Built on Trust, Backed by Science</h2>
            <p className="font-dm-sans text-slate-600">
              Unlike traditional clinics, Medline specializes in the intersection of medicine and regulation. We understand the specific demands of federal and state healthcare requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-10 rounded-2xl bg-teal-50/50 border border-teal-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-[#0B6E6E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${value.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#063d3d] mb-4">{value.title}</h3>
                <p className="font-dm-sans text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Credential Section */}
      <section className="py-24 px-6 bg-[#063d3d] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold leading-tight">
              A Team of Licensed & <br/> 
              <span className="text-teal-400 italic">Board-Certified</span> Experts.
            </h2>
            <p className="font-dm-sans text-teal-100/70 text-lg">
              Our provider network includes specialized clinicians ranging from PHDs and MSNs to Psychiatric-Mental Health Nurse Practitioners (PMHNPs). 
            </p>
            <ul className="space-y-4">
              {[
                'Advanced Clinical Degrees & Certifications',
                'Deep Knowledge of DOT & Federal Standards',
                'Expert Witness & Forensic Experience',
                'Multidisciplinary Mental Health Support'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-check text-teal-400"></i>
                  <span className="font-dm-sans font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/team" className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all">
              Meet Our Providers
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
               <div className="aspect-[3/4] bg-teal-900/50 rounded-2xl border border-white/10 flex items-center justify-center p-4">
                  <i className="fa-solid fa-file-signature text-5xl text-teal-400/20"></i>
               </div>
               <div className="aspect-square bg-teal-900/50 rounded-2xl border border-white/10 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" alt="Clinic" className="w-full h-full object-cover opacity-50" />
               </div>
            </div>
            <div className="space-y-4">
               <div className="aspect-square bg-teal-900/50 rounded-2xl border border-white/10 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600" alt="Lab" className="w-full h-full object-cover opacity-50" />
               </div>
               <div className="aspect-[3/4] bg-[#0B6E6E] rounded-2xl border border-white/10 flex flex-col justify-end p-8">
                  <h4 className="font-playfair text-4xl font-bold mb-2">15+</h4>
                  <p className="text-xs uppercase tracking-widest font-bold">Years of Experience</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Callout */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
          <h2 className="font-playfair text-white text-3xl font-bold mb-6">Fully Licensed & HIPAA Compliant</h2>
          <p className="font-dm-sans text-slate-400 mb-8 leading-relaxed">
            Medline Health Services, LLC operates with the highest standards of ethics and security. We ensure that all patient data, workforce evaluations, and clinical records are managed with strict adherence to HIPAA guidelines and federal privacy laws.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-teal-400 tracking-tighter uppercase">Georgia Licensed</span>
            <span className="px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-teal-400 tracking-tighter uppercase">Credentialed Staff</span>
            <span className="px-4 py-2 border border-white/10 rounded-lg text-xs font-bold text-teal-400 tracking-tighter uppercase">Board Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}