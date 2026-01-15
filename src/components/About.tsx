import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-slate-900 mb-8 text-center">
          About <span className="text-violet-500">Me</span>
        </h2>
        
        <div className="bg-violet-50 p-8 md:p-12 rounded-2xl border border-violet-200 shadow-lg text-left">
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Full-Stack Software Engineer with strong expertise in backend development, scalable API design, and DevOps practices. Proven track record building production systems using Python (FastAPI, Flask), Node.js, and modern databases.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Experience spans cross-platform development (Qt/QML, Flutter), cloud infrastructure (AWS, Docker, Kubernetes), and AI/ML integration. Currently driving backend architecture at Stackware Ltd. with focus on system integration, and real-time applications.
          </p>
        </div>
      </div>
    </Section>
  );
}
