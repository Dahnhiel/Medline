import React from 'react';

const reviews = [
  {
    quote: "Medline has been instrumental in our return-to-work protocols. Their evaluations are thorough, defensible, and delivered with professional speed.",
    author: "Robert Miller",
    position: "EHS Director, Logistics Corp",
    type: "Organization"
  },
  {
    quote: "The behavioral health assessments provided for our safety-sensitive roles gave us the confidence we needed to ensure full compliance.",
    author: "Linda Thompson",
    position: "HR Manager",
    type: "Corporate"
  },
  {
    quote: "Truly patient-centered care. Even though it was a required medical screening, the providers made me feel heard and respected throughout.",
    author: "James W.",
    position: "Commercial Pilot",
    type: "Individual"
  },
  {
    quote: "Professional, licensed experts who actually understand the intersection of medicine and federal regulations. Highly recommended.",
    author: "Jessica R.",
    position: "Operations Manager",
    type: "Organization"
  }
];

export default function Testimonials() {
  return (
    <div className="pt-24 min-h-screen bg-[#f8fdfd]">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-end mb-20">
            <div className="lg:col-span-2">
              <span className="text-[#0B6E6E] font-bold tracking-widest uppercase text-xs">Trust & Reliability</span>
              <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-[#063d3d] mt-4">What Our Partners Say</h1>
            </div>
            <div className="flex gap-2 pb-2">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star text-yellow-400"></i>
              ))}
              <span className="ml-2 font-bold text-[#063d3d]">5.0 Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-teal-50 relative group hover:shadow-xl transition-all duration-300">
                <i className="fa-solid fa-quote-right absolute top-10 right-10 text-teal-50 text-6xl group-hover:text-teal-100 transition-colors"></i>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-teal-50 text-[#0B6E6E] text-[0.6rem] font-black uppercase tracking-widest rounded-full mb-6">
                    {item.type}
                  </span>
                  <p className="font-playfair text-xl text-[#063d3d] leading-relaxed mb-8 italic">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#0B6E6E] font-bold">
                      {item.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#063d3d] leading-none">{item.author}</h4>
                      <p className="text-slate-500 text-xs mt-1">{item.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-24 text-center p-12 bg-[#063d3d] rounded-3xl text-white">
            <h2 className="font-playfair text-3xl font-bold mb-4">Join our network of healthy organizations</h2>
            <p className="text-teal-100/70 mb-8 max-w-xl mx-auto">Experience the peace of mind that comes with board-certified clinical expertise and 100% compliance.</p>
            <button className="px-8 py-4 bg-[#0B6E6E] rounded-xl font-bold hover:bg-teal-500 transition-all">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}