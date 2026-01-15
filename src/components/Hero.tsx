import { motion } from 'framer-motion';
import { personalInfo } from '../data/resume';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/image-profile-black.png';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-white pt-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-violet-500">
              {personalInfo.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-500 font-medium mb-10">
            Full Stack Developer
          </h2>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              href="#contact"
              className="px-8 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-violet-500/20"
            >
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={import.meta.env.BASE_URL + 'assets/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_SadiaImran.pdf"
              className="px-8 py-3 border border-slate-200 hover:border-violet-500 text-slate-600 hover:text-violet-500 rounded-full font-medium transition-all flex items-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 flex justify-center md:justify-start gap-6">
            {personalInfo.social.filter(s => s.name !== 'Resume').map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-violet-500 border-2 border-violet-500 rounded-full p-3 hover:bg-violet-500 hover:text-white transition-all"
                title={item.name}
              >
                <item.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Shape (Replaces Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src={profileImg}
              alt={`${personalInfo.name} profile`}
              className="w-full h-full rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
