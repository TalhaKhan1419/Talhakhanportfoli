import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, QrCode, Activity, Gamepad2, HeartPulse, Bot, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

// Helper to render stylized tech illustrations for each project thumbnail
const ProjectThumbnail = ({ imageTag, title }) => {
  const illustrations = {
    hotel: (
      <div className="w-full h-full bg-gradient-to-br from-cyan-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/30 text-cyan-400 mb-3 shadow-lg shadow-cyan-500/10">
          <QrCode className="w-10 h-10 animate-pulse" />
        </div>
        <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          QR Code & POS Suite
        </span>
      </div>
    ),
    health: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 mb-3 shadow-lg shadow-emerald-500/10">
          <Activity className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Health & Finance Engine
        </span>
      </div>
    ),
    gaming: (
      <div className="w-full h-full bg-gradient-to-br from-purple-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/30 text-purple-400 mb-3 shadow-lg shadow-purple-500/10">
          <Gamepad2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
          Cyprus Client Game
        </span>
      </div>
    ),
    hospital: (
      <div className="w-full h-full bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/30 text-blue-400 mb-3">
          <HeartPulse className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
          Healthcare Portal
        </span>
      </div>
    ),
    automation: (
      <div className="w-full h-full bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-amber-400 mb-3">
          <Bot className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Puppeteer Data Scraper
        </span>
      </div>
    ),
    food: (
      <div className="w-full h-full bg-gradient-to-br from-rose-950/80 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/30 text-rose-400 mb-3">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-widest bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
          E-Commerce Ordering
        </span>
      </div>
    )
  };

  return illustrations[imageTag] || illustrations.hotel;
};

const Projects = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Real-Time Web', 'Backend & Automation'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span className="text-xs font-mono font-medium text-cyan-300 uppercase tracking-widest">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Software & Web <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Full-stack web applications, QR code dining systems, healthcare platforms, and real-time multiplayer gaming algorithms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden group shadow-xl"
            >
              {/* Card Image Area */}
              <div className="h-52 w-full relative overflow-hidden border-b border-slate-800">
                <ProjectThumbnail imageTag={project.imageTag} title={project.title} />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-900/90 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-lg bg-slate-900/90 text-cyan-400 text-[11px] font-mono border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 border border-cyan-500/20 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
