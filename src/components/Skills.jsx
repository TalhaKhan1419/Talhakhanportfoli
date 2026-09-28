import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Sparkles,
  FileCode,
  Layout,
  Palette,
  Cpu,
  Coffee,
  Layers,
  Grid,
  Shield,
  Table,
  Zap,
  Globe,
  Key,
  Lock,
  Webhook,
  CreditCard,
  GitBranch,
  Send,
  Cloud,
  Image,
  Radio,
  Bot
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  FileCode: <FileCode className="w-5 h-5 text-yellow-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-400" />,
  Palette: <Palette className="w-5 h-5 text-blue-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-300" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-gray-300" />,
  Coffee: <Coffee className="w-5 h-5 text-amber-500" />,
  Layers: <Layers className="w-5 h-5 text-green-400" />,
  Grid: <Grid className="w-5 h-5 text-emerald-300" />,
  Shield: <Shield className="w-5 h-5 text-red-400" />,
  Database: <Database className="w-5 h-5 text-green-400" />,
  Table: <Table className="w-5 h-5 text-blue-400" />,
  Zap: <Zap className="w-5 h-5 text-red-400" />,
  Globe: <Globe className="w-5 h-5 text-indigo-400" />,
  Key: <Key className="w-5 h-5 text-amber-400" />,
  Lock: <Lock className="w-5 h-5 text-purple-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  Webhook: <Webhook className="w-5 h-5 text-sky-400" />,
  CreditCard: <CreditCard className="w-5 h-5 text-emerald-300" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
  Github: <GithubIcon className="w-5 h-5 text-slate-200" />,
  Send: <Send className="w-5 h-5 text-orange-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  Image: <Image className="w-5 h-5 text-cyan-400" />,
  Radio: <Radio className="w-5 h-5 text-purple-400" />,
  Bot: <Bot className="w-5 h-5 text-emerald-400" />
};

const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend', icon: <Code2 className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Databases', icon: <Database className="w-4 h-4" /> },
    { id: 'security', label: 'Security & APIs', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools & Cloud', icon: <Wrench className="w-4 h-4" /> }
  ];

  const skillGroups = [
    { title: "Frontend Development", category: "frontend", items: skills.frontend, color: "from-cyan-500 to-blue-500" },
    { title: "Backend Development", category: "backend", items: skills.backend, color: "from-emerald-500 to-teal-500" },
    { title: "Database Systems", category: "database", items: skills.database, color: "from-amber-500 to-orange-500" },
    { title: "Security & API Engineering", category: "security", items: skills.security, color: "from-purple-500 to-indigo-500" },
    { title: "Tools, Automation & Cloud", category: "tools", items: skills.tools, color: "from-sky-500 to-cyan-500" }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
            <span className="text-xs font-mono font-medium text-cyan-300 uppercase tracking-widest">
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Modern frontend frameworks, enterprise Java & Node.js backend systems, relational/NoSQL databases, and cloud services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-10">
          {filteredGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200 flex items-center gap-3">
                <span className={`w-2 h-6 rounded-full bg-gradient-to-b ${group.color}`}></span>
                <span>{group.title}</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group flex flex-col items-center text-center justify-center space-y-2"
                  >
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900/80 text-slate-400 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
