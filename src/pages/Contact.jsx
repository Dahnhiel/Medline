import React from 'react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-[#0B6E6E] font-bold tracking-widest uppercase text-xs">Connect With Us</span>
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-[#063d3d] mt-4 mb-8">How Can We Help Your Organization?</h1>
            <p className="font-dm-sans text-slate-600 text-lg mb-12">
              Our team is ready to discuss your specific occupational or behavioral health requirements. Reach out today for a clinical consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B6E6E] flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#063d3d]">Phone</h4>
                  <p className="text-slate-600">404-464-6925</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#0B6E6E] flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#063d3d]">Email</h4>
                  <p className="text-slate-600">medlinehsllc@gmail.com</p>
                </div>
              </div>

              <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 mt-12">
                <div className="flex gap-4 items-center mb-3">
                  <i className="fa-solid fa-shield-halved text-[#0B6E6E]"></i>
                  <h4 className="font-bold text-[#063d3d]">Privacy Disclaimer</h4>
                </div>
                <p className="text-xs text-slate-600 font-dm-sans leading-relaxed">
                  Please do not include sensitive personal health information (PHI) in this form. For specific clinical inquiries, please contact our office directly via phone to ensure HIPAA compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B6E6E] focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Organization</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B6E6E] focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B6E6E] focus:ring-2 focus:ring-teal-100 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B6E6E] focus:ring-2 focus:ring-teal-100 outline-none transition-all bg-white">
                  <option>Occupational Health Evaluation</option>
                  <option>Behavioral Health Assessment</option>
                  <option>Clinical Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0B6E6E] focus:ring-2 focus:ring-teal-100 outline-none transition-all"></textarea>
              </div>
              <button className="w-full py-4 bg-[#0B6E6E] text-white font-bold rounded-xl shadow-lg hover:bg-[#085a5a] hover:-translate-y-0.5 transition-all active:scale-95">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}