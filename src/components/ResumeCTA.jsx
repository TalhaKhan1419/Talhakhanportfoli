import React from 'react';
import { FileText, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ResumeCTA = () => {
  const { profile } = portfolioData;

  return (
    <section className="py-16 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-slate-800/90 relative overflow-hidden bg-gradient-to-r from-slate-900/90 via-slate-900 to-slate-950 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
              <FileText className="w-3.5 h-3.5" />
              <span>Full Curriculum Vitae</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Want to know more about my experience?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Download my complete resume for detailed insights into technical competencies, enterprise projects, and academic background.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/25 transition-all hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeCTA;
