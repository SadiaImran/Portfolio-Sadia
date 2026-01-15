import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data/resume';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Section id="projects" className="bg-white">
      <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        Featured <span className="text-violet-500">Projects</span>
      </h2>

      <div className="max-w-6xl mx-auto relative px-4 md:px-12">
        <div className="relative overflow-hidden min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 h-full flex flex-col md:flex-row"
            >
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{projects[currentIndex].title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-violet-500 hover:bg-white text-slate-100 hover:text-violet-600 text-xs font-medium rounded-full border hover:border-violet-200 shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {Array.isArray(projects[currentIndex].description) ? (
                    (projects[currentIndex].description as string[]).map((desc, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                        {desc}
                      </li>
                    ))
                  ) : (
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {projects[currentIndex].description}
                    </p>
                  )}
                </ul>

                <div className="flex gap-4 mt-auto">
                  {projects[currentIndex].links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-colors shadow-md ${
                        link.name === 'GitHub' 
                          ? 'bg-violet-600 text-white hover:bg-white hover:text-violet-600 border border-transparent hover:border-violet-500'
                          : 'bg-white text-violet-600 border border-violet-200 hover:bg-violet-50'
                      }`}
                    >
                      {link.name === 'GitHub' ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="h-64 md:h-auto md:w-1/2 bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center relative overflow-hidden order-1 md:order-2">
                {(projects[currentIndex] as any).image ? (
                  <img 
                    src={(projects[currentIndex] as any).image} 
                    alt={projects[currentIndex].title} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="text-center text-white p-6 relative z-10">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg">
                        🚀
                      </div>
                      <h4 className="text-xl font-semibold">Project Preview</h4>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white text-slate-600 rounded-full hover:text-violet-600 hover:shadow-lg transition-all z-20 shadow-md border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white text-slate-600 rounded-full hover:text-violet-600 hover:shadow-lg transition-all z-20 shadow-md border border-slate-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-violet-500 w-8' : 'bg-slate-300 w-2 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
