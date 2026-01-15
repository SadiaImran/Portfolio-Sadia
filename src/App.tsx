import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-white py-12 text-center text-slate-400 text-sm border-t border-slate-100">
        <p>© {new Date().getFullYear()} Sadia Imran.</p>
      </footer>
    </div>
  );
}

export default App;
