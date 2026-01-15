import Section from './Section';
import { skills } from '../data/resume';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Cloud, Database, Terminal } from 'lucide-react';

const icons = {
  Languages: Code,
  Backend: Server,
  Frontend: Layout,
  Cloud_DevOps: Cloud,
  Databases: Database,
  AI_Tools: Terminal
};

export default function Skills() {
  return (
    <Section id="skills" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-12 text-center">
          Technical <span className="text-violet-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = icons[category as keyof typeof icons] || Code;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-violet-400 hover:ring-1 hover:ring-violet-400 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 capitalize">
                    {category.replace('_', ' & ')}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
