import React from 'react';

const articles = [
  {
    category: 'Occupational Health',
    title: 'Understanding Fitness-for-Duty Evaluations',
    excerpt: 'A comprehensive guide on when an employer can legally require a medical examination to ensure workplace safety.',
    source: 'OSHA / National Institutes of Health',
    link: 'https://www.osha.gov/laws-regs/standardinterpretations/2000-12-05',
    date: 'May 2026'
  },
  {
    category: 'Behavioral Health',
    title: 'The Impact of Mental Health on Workforce Readiness',
    excerpt: 'Exploring how psychiatric-mental health support reduces absenteeism and improves organizational resilience.',
    source: 'SAMHSA / Behavioral Health News',
    link: 'https://www.samhsa.gov/workplace',
    date: 'April 2026'
  },
  {
    category: 'Compliance',
    title: 'HIPAA Guidelines for Home Health Providers',
    excerpt: 'Essential privacy protocols for handling patient data in a mobile or remote clinical setting.',
    source: 'U.S. Dept. of Health & Human Services',
    link: 'https://www.hhs.gov/hipaa/for-professionals/index.html',
    date: 'March 2026'
  },
  {
    category: 'Workforce Wellness',
    title: 'Preventing Burnout in Safety-Sensitive Roles',
    excerpt: 'Strategies for identifying fatigue and stress markers in high-consequence operational environments.',
    source: 'CDC / NIOSH',
    link: 'https://www.cdc.gov/niosh/topics/stress/default.html',
    date: 'Feb 2026'
  }
];

export default function Resources() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 px-6 bg-[#063d3d] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-teal-400 font-bold tracking-[0.2em] uppercase text-xs">Knowledge Hub</span>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold mt-4 mb-6">Resources & Insights</h1>
          <p className="font-dm-sans text-teal-100/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay informed with the latest clinical standards, regulatory updates, and workforce health strategies curated by our experts.
          </p>
        </div>
      </section>

      {/* Article Feed */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article, i) => (
              <div key={i} className="flex flex-col border-b border-slate-100 pb-12 group">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#0B6E6E] font-bold text-xs uppercase tracking-widest px-3 py-1 bg-teal-50 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-xs font-medium">{article.date}</span>
                </div>
                <h2 className="font-playfair text-2xl font-bold text-[#063d3d] mb-4 group-hover:text-[#0B6E6E] transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="font-dm-sans text-slate-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    Source: {article.source}
                  </span>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#0B6E6E] font-bold text-sm hover:underline"
                  >
                    Read Full Article <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-teal-50 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0B6E6E]">
            <i className="fa-solid fa-envelope-open-text text-2xl"></i>
          </div>
          <h2 className="font-playfair text-3xl font-bold text-[#063d3d] mb-4">Subscribe for Clinical Updates</h2>
          <p className="font-dm-sans text-slate-600 mb-8 max-w-lg mx-auto">
            Get quarterly insights on workforce health compliance and psychiatric-mental health trends delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:border-[#0B6E6E] outline-none transition-all"
            />
            <button className="px-8 py-4 bg-[#0B6E6E] text-white font-bold rounded-xl hover:bg-[#085a5a] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}