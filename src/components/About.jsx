import React from 'react';
import { GraduationCap, Briefcase, Code, Database, ShieldCheck, Zap, Cloud, Cpu, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { profile } = portfolioData;

  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: "B.Tech in CSE",
      detail: `${profile.education.institution} (${profile.education.period})`
    },
    {
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      title: "Full Stack Exp",
      detail: "~1 Year building production web apps"
    },
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: "API Architecture",
      detail: "REST APIs, Node.js & Spring Boot"
    },
    {
      icon: <Code className="w-5 h-5 text-purple-400" />,
      title: "React Frontend",
      detail: "Responsive, modern component UI"
    },
    {
      icon: <Database className="w-5 h-5 text-yellow-400" />,
      title: "Database Design",
      detail: "MongoDB, MySQL & Schema Optimization"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
      title: "Auth & Security",
      detail: "JWT, OAuth 2.0, RBAC Security"
    },
    {
      icon: <Zap className="w-5 h-5 text-orange-400" />,
      title: "Caching & Speed",
      detail: "Redis In-Memory Caching"
    },
    {
      icon: <Cloud className="w-5 h-5 text-sky-400" />,
      title: "Cloud & Media",
      detail: "AWS Deployment & Cloudinary Integration"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span className="text-xs font-mono font-medium text-cyan-300 uppercase tracking-widest">
              Get To Know Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Talha Khan</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-100 leading-snug">
              Passionate Full Stack Developer Crafting High-Performance Web Applications
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              {profile.aboutNarrative}
            </p>

            <div className="p-5 rounded-2xl glass-card border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{profile.education.degree}</h4>
                  <p className="text-sm text-slate-400">{profile.education.institution} • <span className="text-cyan-400 font-mono">{profile.education.period}</span></p>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Whether building multi-tenant restaurant QR platforms, real-time gaming engines for international Cyprus clients, or secure healthcare systems, I am dedicated to clean code, maintainability, and exceptional user experiences.
            </p>
          </div>

          {/* Highlights Grid Column */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-900/80 w-fit mb-3 border border-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
