"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ExternalLink, ChevronDown, Award, Code, Monitor, Mail, User } from 'lucide-react';
import AnimatedBackground from './components/AnimatedBackground';

// Extracted Resume Data (Hardcoded for single-file portability)
// Extracted Resume Data
const resumeData = {
  basics: {
    links:["www.linkedin.com/in/nishant-vapta"]
  },
  extra:[
    "Outside of coding, I’m probably reading up on the latest in frontend tech, exploring side projects, or recharging with some good music or a long walk.",
    "Let’s connect—I’m always open to a good conversation and new opportunities to grow."
  ],
  achievements:[
    { metric: "40%", context: "Improved load times and user interaction speed (AG Grid)" },
    { metric: "35%", context: "Improvement in overall user engagement via UI components" },
    { metric: "30%", context: "Improved application reliability, reduced data inconsistency" },
    { metric: "25%", context: "Cut maintenance effort through cleaner, scalable code" },
  ],
  experience:[
    {
      id: 1,
      company: "Wipro",
      role: "Software Engineer",
      dates: "Dec 2021 - Present (4 yrs 4 mos)",
      bullets:[
        "Designed and maintained a high-performance React-based UI for a report tracking system used to monitor thousands of client-generated reports, improving reporting efficiency and visibility.",
        "Implemented robust asynchronous state management using Redux-Saga, reducing data inconsistency issues and improving overall application reliability by 30%.",
        "Integrated RESTful APIs for real-time report metadata updates, enhancing user experience and reducing manual tracking efforts.",
        "Optimized large data rendering using AG Grid with advanced features (filtering, sorting, custom cell renderers), improving load times and user interaction speed by 40%.",
        "Built responsive, accessible UI components with Tailwind CSS, contributing to a 25% improvement in cross-device usability scores.",
        "Collaborated closely with backend and product teams to align UI workflows with business logic, accelerating feature delivery timelines by 20%."
      ]
    },
    {
      id: 2,
      company: "Zensar Technologies",
      role: "Software Engineer",
      dates: "Sep 2019 - Dec 2021 (2 yrs 4 mos)",
      bullets:[
        "Developed highly reusable and modular React components for key product features like plate previews and product selection, contributing to a 30% reduction in development time for new UI features.",
        "Implemented responsive design and ensured full cross-browser compatibility, improving accessibility scores and mobile usability by 25%.",
        "Partnered with UI/UX designers and backend engineers to deliver seamless, end-to-end user experiences—resulting in a smoother product flow and increased user satisfaction.",
        "Optimized React component performance through code splitting and memoization, reducing load times by up to 20% in key user flows.",
        "Maintained clean, scalable code architecture, enabling easier onboarding for new developers and faster iteration on upcoming features."
      ]
    },
    {
      id: 3,
      company: "Zensar Technologies",
      role: "Associate Software Engineer",
      dates: "Jun 2019 - Aug 2019 (3 mos)",
      bullets:[
        "Engineered and integrated innovative UI components using JavaScript, HTML, and CSS, enhancing product functionality and contributing to a 35% improvement in overall user engagement.",
        "Applied adaptive coding practices and proactive problem-solving to reduce post-launch bugs by 20%, while cutting maintenance effort by 25% through cleaner, scalable code.",
        "Consistently delivered user-centric solutions that exceeded customer expectations, resulting in higher satisfaction ratings and reduced support tickets."
      ]
    }
  ],
  skills: {
    "Top Skills":["React", "Redux", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind", "API Integration (RESTful & GraphQL)", "Scalable Architecture", "Performance Tuning"],
    "Values & Extras":["Clear communication", "Thoughtful design", "Clean code", "Working with kind, smart people", "Exploring side projects", "Frontend tech reading"]
  },
  certifications:[
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure AI Fundamentals",
    "Java Foundations Certified Junior Associate Certification",
    "Namaste React"
  ]
};

// Counter Component for Achievements
const AnimatedCounter = ({ value }: { value: string }) => {
  const num = parseInt(value.replace(/\D/g, ''));
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = num;
    if (start === end) return;
    const duration = 2000;
    const incrementTime = (duration / end);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [num]);

  return <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-liner-to-r from-teal-400 to-blue-500">{count}%</span>;
};

export default function Portfolio() {
  const[loading, setLoading] = useState(true);
  const [activeExp, setActiveExp] = useState<number | null>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0,0);
    }, 1800);
    return () => clearTimeout(timer);
  },[]);

  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-teal-500/30 font-sans overflow-x-hidden">
      <AnimatedBackground />

      {/* Splash Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl font-black tracking-tighter text-white mb-6"
            >
              NV<span className="text-teal-500">.</span>
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-teal-500"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loading ? 0 : 1, y: loading ? 30 : 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-teal-400 font-mono tracking-wider text-sm md:text-base mb-4">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Nishant Vapta.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8 leading-tight">
              I build fast, intuitive user experiences.
            </h2>
            <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
              I’m a frontend-focused Software Engineer specializing in React, Redux, and modern UI development. I love turning complex problems into clean, maintainable interfaces, and I care just as much about how something feels as how it works.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#experience" className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all transform hover:-translate-y-1 text-center shadow-[0_0_20px_rgba(20,184,166,0.4)]">
                View Experience
              </a>
              <a href="mailto:nikvapta@gmail.com" className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
            </div>
          </motion.div>
        </section>

        {/* Top Impact / Achievements */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold text-white">Top Impact Metrics</h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resumeData.achievements.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal-500/50 transition-colors group"
              >
                <div className="mb-2"><AnimatedCounter value={ach.metric} /></div>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{ach.context}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section (Stacked Cards / Accordion) */}
        <section id="experience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-bold text-white">Experience</h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          
          <div className="space-y-4 relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

            {resumeData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[1.95rem] top-8 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-slate-950 hidden md:block" />
                
                <div 
                  onClick={() => setActiveExp(activeExp === exp.id ? null : exp.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${activeExp === exp.id ? 'bg-white/10 border-teal-500/30' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-white">{exp.role} <span className="text-teal-400">@ {exp.company}</span></h4>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeExp === exp.id ? 'rotate-180 text-teal-400' : 'text-slate-500'}`} />
                  </div>
                  <p className="text-sm font-mono text-slate-400 mb-4">{exp.dates}</p>

                  <AnimatePresence>
                    {activeExp === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-3 mt-4">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-3 text-slate-300">
                              <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                              <span className="leading-relaxed text-[0.95rem]">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Certifications */}
        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Code className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Technical Arsenal</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills["Top Skills"].map((skill, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-teal-500/10 text-teal-300 text-sm border border-teal-500/20">
                  {skill}
                </span>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold text-white mt-8 mb-4">Core Values & Extras</h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills["Values & Extras"].map((val, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                  {val}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <Award className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Education & Certs</h3>
            </div>
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-white font-semibold">Scaler Academy</h4>
                <p className="text-slate-400 text-sm">Software Engineering (2021 - 2022)</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-white font-semibold">IPS ACADEMY, Indore</h4>
                <p className="text-slate-400 text-sm">Bachelor of Engineering, Computer Science (Jan 2015 - May 2019)</p>
              </div>
              
              <ul className="space-y-2 mt-4">
                {resumeData.certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pb-8 border-t border-white/10 pt-8">
          <p className="text-slate-500 text-sm mb-4">{resumeData.extra[1]}</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:nikvapta@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">nikvapta@gmail.com</a>
            <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
}