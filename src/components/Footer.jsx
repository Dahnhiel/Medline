import React from 'react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/resources', label: 'Health Resources' },
];

const medicalServices = [
  'Fitness-for-Duty Evaluations',
  'Behavioral Health Assessments',
  'Return-to-Work Evaluations',
  'Workforce Health Screenings',
  'Psychological Evaluations',
  'Clinical Consultations',
];

export default function Footer() {
  return (
    <footer className="bg-[#063d3d] text-[#cce8e8]">
      {/* Top CTA Band */}
      <div className="bg-[#0B6E6E] py-12 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-2xl md:text-3xl text-white font-bold leading-tight">
              Ready to strengthen your workforce?
            </h3>
            <p className="font-dm-sans text-teal-100 mt-2 text-lg opacity-90">
              Partner with Medline for compliant, expert healthcare solutions.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-[#0B6E6E] font-bold rounded-xl shadow-xl hover:bg-teal-50 hover:-translate-y-1 transition-all active:scale-95"
          >
            Get In Touch Now
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                <i className="fa-solid fa-heart-pulse text-white"></i>
              </div>
              <div>
                <h4 className="font-playfair font-bold text-white text-xl leading-none">Medline</h4>
                <p className="font-dm-sans text-[0.6rem] tracking-[0.15em] text-teal-400 uppercase mt-1 font-bold">Health Services</p>
              </div>
            </div>
            <p className="font-dm-sans text-sm leading-relaxed text-teal-100/70">
              Providing licensed and board-certified medical evaluations that ensure your organization remains safe, healthy, and compliant with all state and federal regulations.
            </p>
            <div className="flex gap-4">
              {['facebook-f', 'linkedin-in', 'twitter'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#0B6E6E] hover:text-white hover:border-[#0B6E6E] transition-all duration-300">
                  <i className={`fa-brands fa-${icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              Navigation
            </h5>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="group flex items-center text-sm text-teal-100/70 hover:text-white transition-colors">
                    <i className="fa-solid fa-chevron-right text-[10px] mr-2 text-[#0B6E6E] group-hover:translate-x-1 transition-transform"></i>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Checklist */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              Expertise
            </h5>
            <ul className="space-y-3">
              {medicalServices.map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-teal-100/70">
                  <i className="fa-solid fa-check-circle text-[10px] mt-1 text-teal-500"></i>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              Connect
            </h5>
            <div className="space-y-6">
              <a href="tel:4044646925" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0B6E6E] transition-all">
                   <i className="fa-solid fa-phone text-teal-400 group-hover:text-white"></i>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase font-bold text-teal-500">Call Us</p>
                  <p className="text-white font-medium">404-464-6925</p>
                </div>
              </a>

              <a href="mailto:medlinehsllc@gmail.com" className="group flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0B6E6E] transition-all">
                   <i className="fa-solid fa-envelope text-teal-400 group-hover:text-white"></i>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase font-bold text-teal-500">Email</p>
                  <p className="text-white font-medium text-sm">medlinehsllc@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-teal-100/40 font-dm-sans text-center">
            © {new Date().getFullYear()} Medline Health Services, LLC. All rights reserved. 
            <span className="mx-2">|</span> 
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-[10px] font-bold text-teal-100/20 tracking-[0.3em] uppercase">HIPAA COMPLIANT</span>
            <span className="text-[10px] font-bold text-teal-100/20 tracking-[0.3em] uppercase">BOARD CERTIFIED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}