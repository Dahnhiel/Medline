import React from 'react';

const teamMembers = [
  {
    name: "Dr. Augustina O. A",
    role: "Clinical Director",
    credentials: "PHD, PMHNP-BC",
    bio: "A board-certified Psychiatric-Mental Health Nurse Practitioner with extensive clinical expertise, Dr. Augustina leads Medline's behavioral health evaluations and specialized workforce assessments.",
    image: "https://static.wixstatic.com/media/1c999c_46766794880348c989934a68a0caddef~mv2.jpg/v1/crop/x_0,y_0,w_1075,h_731/fill/w_441,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/woman_edited.jpg"
  },
  {
    name: "Mr. Valentine Ndukwe",
    role: "Senior Clinical Associate",
    credentials: "MSN, BSN",
    bio: "With advanced training in clinical nursing and medical support, Mr. Ndukwe oversees on-site screenings and medical compliance protocols for our organizational partners.",
    image: "https://static.wixstatic.com/media/1c999c_536296db537d4eab9a7ded9b904c06b8~mv2.jpeg/v1/crop/x_0,y_0,w_1282,h_870/fill/w_443,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-04-29%20at%206_36_01%20PM%20(1).jpeg"
  }
];

export default function Team() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#0B6E6E] font-bold tracking-[0.2em] uppercase text-xs">Our Leadership</span>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-[#063d3d] mt-4 mb-6">Expert Providers</h1>
          <p className="font-dm-sans text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Medline is led by highly credentialed clinical experts dedicated to workforce health, safety, and regulatory excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {teamMembers.map((member, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-8 shadow-xl shadow-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#063d3d]/40 to-transparent opacity-60"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-playfair text-3xl font-bold text-[#063d3d]">{member.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#0B6E6E] font-bold text-xs uppercase tracking-widest">{member.role}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-slate-500 text-xs font-bold uppercase">{member.credentials}</span>
                </div>
                <div className="h-px w-12 bg-teal-600 my-4"></div>
                <p className="font-dm-sans text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Credential Callout */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto p-10 bg-teal-50 rounded-3xl border border-teal-100 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#0B6E6E] shadow-sm flex-shrink-0">
             <i className="fa-solid fa-certificate text-2xl"></i>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-playfair text-xl font-bold text-[#063d3d] mb-2">Verified Board Certifications</h4>
            <p className="font-dm-sans text-sm text-slate-600">
              Our providers maintain active licensure and board certifications in their respective fields, ensuring every evaluation meets the highest clinical and ethical standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}