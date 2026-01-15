import { useState } from 'react';
import Section from './Section';
import { experience, education } from '../data/resume';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const data = activeTab === 'experience' ? experience : education;

  return (
    <Section id="experience" className="bg-violet-50/30">
      <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
        My <span className="text-violet-500">Journey</span>
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-16">
        <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm flex">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-violet-500 text-white shadow-md'
                : 'text-slate-500 hover:text-violet-500'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-violet-500 text-white shadow-md'
                : 'text-slate-500 hover:text-violet-500'
            }`}
          >
            Education
          </button>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto relative px-2">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-violet-200 to-transparent transform -translate-x-1/2 hidden md:block z-0" />

        <div className="space-y-8 md:space-y-12">
          <AnimatePresence mode="wait">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-5 h-5 bg-white rounded-full border-4 border-violet-500 shadow transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-1rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                  <div className="relative z-20 bg-white p-6 rounded-xl border border-violet-300 shadow-md hover:shadow-lg transition-all group text-left">
                    <div className="flex items-center gap-2 text-violet-600 mb-2 font-medium">
                      {activeTab === 'experience' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      <span>{activeTab === 'experience' ? (item as any).company : (item as any).institution}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {activeTab === 'experience' ? (item as any).role : (item as any).degree}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-sm text-slate-400 mb-4">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Removed side location block */}
               </motion.div>
             ))}
           </AnimatePresence>
         </div>
       </div>
     </Section>
   );
}
