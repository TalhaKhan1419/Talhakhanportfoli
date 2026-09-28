import React from 'react';
import { ExternalLink, Award, Code2, CheckCircle2, TrendingUp, BrainCircuit } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LeetCode = () => {
  const { leetcode } = portfolioData;

  return (
    <section id="leetcode" className="py-24 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-800/90 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                <BrainCircuit className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-medium text-amber-300 uppercase tracking-widest">
                  Algorithmic Problem Solving
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  <span className="text-amber-400 font-mono">{leetcode.solved}</span> Coding Problems Solved
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
                  {leetcode.subtitle}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={leetcode.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5"
                >
                  <Code2 className="w-5 h-5" />
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Topics Grid Column */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-sm font-bold text-slate-200">Core Topic Breakdown</span>
                </div>

                <div className="space-y-3">
                  {leetcode.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-slate-300 font-medium">{topic.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                        {topic.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeetCode;
