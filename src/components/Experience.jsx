import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span className="text-xs font-mono font-medium text-cyan-300 uppercase tracking-widest">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Hands-on Full Stack Development experience building production services and API architectures.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
            
            {experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Dot Icon */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 hover:border-cyan-500/30 transition-all space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {exp.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-cyan-400 font-semibold mt-1">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 font-normal">{exp.type}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Responsibilities & Deliverables:
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                          <span className="text-sm text-slate-300 leading-snug">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2">Tech:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-cyan-300 text-xs font-mono border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
