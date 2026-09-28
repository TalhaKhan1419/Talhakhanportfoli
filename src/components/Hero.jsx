import React from 'react';
import { ArrowDown, Mail, FileText, Code2, Sparkles, Terminal, ShieldCheck, Database, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { profile, stats } = portfolioData;

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide uppercase">
                Available for Full Stack Roles
              </span>
            </div>

            {/* Main Titles */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-gradient-cyan">Talha Khan</span>
              </h1>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-300">
                Full Stack Developer
              </h2>
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed">
              I build scalable, secure and user-focused web applications using modern frontend and backend technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>View My Work</span>
                <Sparkles className="w-4 h-4" />
              </button>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all flex items-center gap-2 shadow-md"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-6 py-3.5 rounded-xl font-semibold bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-md">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Interactive Code Terminal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-card rounded-2xl p-5 border border-slate-800 shadow-2xl relative group">
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>talha-developer.js</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">name</span>: <span className="text-emerald-300">'Talha Khan'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">role</span>: <span className="text-emerald-300">'Full Stack Developer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">stack</span>: [
                  <span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Node.js'</span>, <span className="text-emerald-300">'Spring Boot'</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">databases</span>: [<span className="text-emerald-300">'MySQL'</span>, <span className="text-emerald-300">'MongoDB'</span>, <span className="text-emerald-300">'Redis'</span>],
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">experience</span>: <span className="text-orange-400">'~1 Year'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">leetCodeSolved</span>: <span className="text-orange-400">400</span>,
                </div>
                <div className="pl-4">
                  <span className="text-cyan-400">location</span>: <span className="text-emerald-300">'India'</span>,
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-slate-500">
                  <span className="text-cyan-500">// Ready to engineer production software</span>
                </div>
              </div>

              {/* Stat Pills */}
              <div className="grid grid-cols-2 gap-3 pt-5 mt-4 border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-xl font-extrabold text-cyan-400 font-mono">1 Year</div>
                  <div className="text-xs text-slate-400 mt-0.5">Development Exp</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-xl font-extrabold text-emerald-400 font-mono">400+</div>
                  <div className="text-xs text-slate-400 mt-0.5">LeetCode Solved</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScrollTo('#about')}
            className="p-2 rounded-full text-slate-400 hover:text-cyan-400 transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll to About Section"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
