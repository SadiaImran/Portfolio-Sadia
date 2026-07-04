import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const roles = ["AI-powered backends", "RAG pipelines", "real-time voice systems", "production APIs", "intelligent automation"];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const charIdx = useRef(0);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, deleting ? 38 : 68);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span style={{ color: "#7C6FD4", fontWeight: 500, borderRight: "2px solid #7C6FD4", paddingRight: 2, animation: "blink 0.75s step-end infinite" }}>
      {text}
    </span>
  );
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.style.cssText += "opacity:1;transform:none"; }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const S = {
  page: { background: "#F7F5FF", fontFamily: "'Inter', sans-serif", color: "#1A1A2E", overflowX: "hidden" as const },
  nav: { position: "sticky" as const, top: 0, zIndex: 100, background: "rgba(247,245,255,0.92)", backdropFilter: "blur(16px)", borderBottom: "1.5px solid #D8D2F8", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 58 },
  navLogo: { fontFamily: "'DM Serif Display', serif", fontSize: 20, color: "#1A1A2E", letterSpacing: "-0.3px", textDecoration: "none" as const },
  navLink: { fontSize: 13, fontWeight: 500, color: "#4A4A68", textDecoration: "none" as const, padding: "4px 0", transition: "color 0.2s" },
  section: { maxWidth: 900, margin: "0 auto", padding: "3.5rem 2.5rem" },
  sectionLabel: { fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#A99EE8", background: "#EEECFb", border: "1px solid #D8D2F8", padding: "4px 12px", borderRadius: 100 },
  h2: { fontFamily: "'DM Serif Display', serif", fontSize: 30, color: "#1A1A2E", letterSpacing: "-0.3px" },
  divider: { border: "none", borderTop: "1.5px solid #D8D2F8", maxWidth: 900, margin: "0 auto" },
  tag: { background: "#F5F3FF", color: "#1A1A2E", border: "1.5px solid #D8D2F8", padding: "5px 13px", borderRadius: 100, fontSize: 12, fontWeight: 400, cursor: "default" as const, transition: "all 0.2s" },
  projCard: { background: "#fff", border: "1.5px solid #D8D2F8", borderRadius: 18, overflow: "hidden" as const, transition: "all 0.28s", display: "flex" as const, flexDirection: "column" as const },
  projImgWrap: { width: "100%", height: 130, overflow: "hidden" as const, background: "#EEECFb", borderBottom: "1.5px solid #D8D2F8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  projBody: { padding: "1rem 1.1rem", flex: 1, display: "flex" as const, flexDirection: "column" as const },
  projBadge: { display: "inline-block", background: "#EEECFb", color: "#7C6FD4", fontSize: 10, fontWeight: 600, padding: "3px 9px", borderRadius: 100, letterSpacing: "0.05em", marginBottom: "0.5rem", alignSelf: "flex-start" as const },
  projTag: { background: "#EEECFb", color: "#7C6FD4", fontSize: 10, fontWeight: 500, padding: "3px 8px", borderRadius: 100 },
  githubBtn: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#7C6FD4", textDecoration: "none" as const, border: "1.5px solid #D8D2F8", padding: "5px 14px", borderRadius: 100, transition: "all 0.2s", alignSelf: "flex-start" as const, marginTop: "auto" },
  contactCard: { background: "#fff", border: "1.5px solid #D8D2F8", borderRadius: 14, padding: "1.1rem 1.3rem", display: "flex" as const, alignItems: "center", gap: "0.9rem", textDecoration: "none" as const, transition: "all 0.22s" },
  cIcon: { width: 40, height: 40, background: "#EEECFb", border: "1.5px solid #D8D2F8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0, color: "#7C6FD4", transition: "all 0.22s" },
  fadeIn: { opacity: 0, transform: "translateY(20px)", transition: "opacity 0.55s ease, transform 0.55s ease" },
};

const projects = [
  { badge: "Final Year Project", title: "Podverse — AI Voice Assistant", img: `${BASE}assets/podverse-demo.png`, emoji: "🎙️", desc: "Production-grade RAG system with full voice pipeline: speech-to-text → LLM → text-to-speech via LiveKit. Multi-level vector search with LangChain + Gemini API with hallucination prevention.", tags: ["FastAPI","LangChain","LiveKit","Gemini","RAG"], link: "https://github.com/SadiaImran" },
  { badge: "Stackware Ltd.", title: "AI Recruitment Screening Engine", img: "", emoji: "🤖", desc: "NLP-based document pipeline extracting structured data from unstructured files. Multi-criteria filtering with 90% accuracy. Reduced manual screening time by 70%.", tags: ["Python","NLP","React.js","SMTP"], link: "" },
  { badge: "", title: "JobPilot — AI Job Tracker", img: `${BASE}assets/jobpilot.png`, emoji: "💼", desc: "Full-stack tracker with LLM-powered resume analysis, 90% accurate job matching, and Supabase real-time sync with sub-second latency.", tags: ["FastAPI","Supabase","React.js","LLM"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "Travel Planner App", img: `${BASE}assets/travel-app.png`, emoji: "✈️", desc: "Cross-platform Flutter app with Firebase backend for real-time trip planning, destination exploration, and booking with Firestore data sync.", tags: ["Flutter","Firebase","Firestore"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "House Price Predictor", img: `${BASE}assets/home-price.png`, emoji: "🏠", desc: "ML regression model with 92% accuracy using ensemble methods. Flask API with 200ms response time and full feature engineering pipeline.", tags: ["Python","Scikit-learn","Flask"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "Celebrity Face Classifier", img: `${BASE}assets/celebrity.png`, emoji: "🎭", desc: "ML-based multi-face detection with 88% accuracy using OpenCV. Flask backend for real-time image processing and inference.", tags: ["Python","OpenCV","Flask","ML"], link: "https://github.com/SadiaImran" },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div style={{ ...S.projCard, ...(hovered ? { borderColor: "#7C6FD4", transform: "translateY(-4px)", boxShadow: "0 12px 32px rgba(124,111,212,0.18)" } : {}) }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={S.projImgWrap}>
        {p.img && !imgFailed ? <img src={p.img} alt={p.title} onError={() => setImgFailed(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 36 }}>{p.emoji}</span>}
      </div>
      <div style={S.projBody}>
        {p.badge && <span style={S.projBadge}>{p.badge}</span>}
        <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A2E", marginBottom: "0.35rem" }}>{p.title}</div>
        <div style={{ fontSize: 12, color: "#4A4A68", lineHeight: 1.65, marginBottom: "0.8rem", flex: 1 }}>{p.desc}</div>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.3rem", marginBottom: "0.65rem" }}>
          {p.tags.map(t => <span key={t} style={S.projTag}>{t}</span>)}
        </div>
        {p.link && <a href={p.link} style={{ ...S.githubBtn, ...(hovered ? { borderColor: "#7C6FD4", background: "#EEECFb" } : {}) }} target="_blank" rel="noopener noreferrer">↗ GitHub</a>}
      </div>
    </div>
  );
}

export default function App() {
  const skillsRef = useFadeIn();
  const expRef = useFadeIn();
  const projRef = useFadeIn();
  const contactRef = useFadeIn();

  return (
    <div style={S.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600&display=swap');
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { cursor: pointer; }
      `}</style>

      {/* NAV */}
      <nav style={S.nav}>
        <span style={S.navLogo}>Sadia Imran</span>
        <div style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
          {["skills","experience","education","projects","contact"].map(s => (
            <a key={s} href={`#${s}`} style={S.navLink}
              onMouseEnter={e => (e.currentTarget.style.color = "#7C6FD4")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4A4A68")}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "5rem 2.5rem 3.5rem", display: "grid", gridTemplateColumns: "1fr 200px", gap: "3rem", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#7A7A9A", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em", marginBottom: "1.2rem" }}>
            <span style={{ width: 7, height: 7, background: "#5CB88A", borderRadius: "50%", animation: "pulse 2s infinite", display: "inline-block" }}></span>
            Open to Opportunities
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 64, lineHeight: 1.02, letterSpacing: 3, marginBottom: "0.4rem" }}>
            <span style={{ color: "#3A3A4A" }}>Sadia</span>
            <span style={{ color: "#7C6FD4", display: "block" }}>Imran.</span>
          </h1>
          <p style={{ fontSize: 15, color: "#4A4A68", marginBottom: "1.3rem", minHeight: 22 }}>
            I build <Typewriter />
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4A4A68", marginBottom: "2rem", maxWidth: 480 }}>
            Full-Stack Software Engineer with deep expertise in <strong style={{ color: "#7C6FD4" }}>AI/ML integration</strong>, backend architecture, and real-time systems — building things that are fast, intelligent, and production-ready.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" as const }}>
            <a href="#projects" style={{ background: "#7C6FD4", color: "#fff", border: "none", padding: "11px 26px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.22s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#5A4FB8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#7C6FD4"; e.currentTarget.style.transform = "none"; }}>
              View Projects →
            </a>
            <a href="#contact" style={{ background: "transparent", color: "#7C6FD4", border: "1.5px solid #D8D2F8", padding: "11px 26px", borderRadius: 100, fontSize: 13, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, transition: "all 0.22s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#7C6FD4"; e.currentTarget.style.background = "#EEECFb"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#D8D2F8"; e.currentTarget.style.background = "transparent"; }}>
              Get in Touch
            </a>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{ position: "relative", width: 170, height: 170 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2.5px dashed #D8D2F8", animation: "spin 18s linear infinite" }}></div>
            <div style={{ position: "absolute", inset: 12, borderRadius: "50%", background: "linear-gradient(135deg,#EEECFb 0%,#D8D2F8 100%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <svg width="146" height="146" viewBox="0 0 146 146" fill="none"><circle cx="73" cy="73" r="73" fill="#EEECFb"/><ellipse cx="73" cy="58" rx="26" ry="28" fill="#C5BFF5"/><ellipse cx="73" cy="58" rx="20" ry="22" fill="#A99EE8"/><circle cx="65" cy="54" r="3" fill="#fff" opacity="0.6"/><ellipse cx="73" cy="110" rx="38" ry="26" fill="#C5BFF5"/><ellipse cx="73" cy="105" rx="30" ry="20" fill="#A99EE8"/><circle cx="40" cy="68" r="8" fill="#C5BFF5"/><circle cx="106" cy="68" r="8" fill="#C5BFF5"/><rect x="58" y="130" width="30" height="6" rx="3" fill="#7C6FD4" opacity="0.3"/><path d="M82 78 Q73 86 64 78" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/></svg>
            </div>
          </div>

        </div>
      </div>

      <hr style={S.divider} />

      {/* SKILLS */}
      <div ref={skillsRef} style={{ ...S.section, ...S.fadeIn }} id="skills">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.8rem" }}>
          <span style={S.sectionLabel}>Expertise</span>
          <h2 style={S.h2}>Technical Skills</h2>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid #D8D2F8", borderRadius: 20, padding: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          {[
            ["AI / ML", ["LangChain","RAG","LLMs","TensorFlow","Scikit-learn","OpenCV","HuggingFace","Gemini API","Pandas","NumPy"]],
            ["Backend & APIs", ["Python","FastAPI","Flask","Node.js","Express.js","WebSockets","RESTful APIs","C++"]],
            ["Cloud & DevOps", ["AWS EC2","AWS S3","Lambda","Docker","Kubernetes","GitHub Actions","Jenkins","CI/CD"]],
            ["Frontend & Databases", ["React.js","TailwindCSS","Flutter","Qt/QML","PostgreSQL","MongoDB","Supabase","Redis"]],
          ].map(([cat, tags]) => (
            <div key={cat as string}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#7C6FD4", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 16, height: 2, background: "#7C6FD4", borderRadius: 2, display: "inline-block" }}></span>
                {cat}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
                {(tags as string[]).map(t => (
                  <span key={t} style={S.tag}
                    onMouseEnter={e => { e.currentTarget.style.background = "#7C6FD4"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#7C6FD4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#F5F3FF"; e.currentTarget.style.color = "#1A1A2E"; e.currentTarget.style.borderColor = "#D8D2F8"; e.currentTarget.style.transform = "none"; }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.divider} />

      {/* EXPERIENCE */}
      <div ref={expRef} style={{ ...S.section, ...S.fadeIn }} id="experience">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.8rem" }}>
          <span style={S.sectionLabel}>Career</span>
          <h2 style={S.h2}>Experience</h2>
        </div>
        {[
          { role: "Junior Software Engineer", period: "Jan 2025 – Present", company: "Stackware Ltd. · Islamabad, Hybrid", bullets: ["Architected and deployed a production-ready AI-enabled workflow automation engine using Qt/QML, PyQt, Flutter and Python — handling Bluetooth, ESP32, and real-time networking protocols.", "Designed backend APIs in Python and C++ for real-time device communication and map integration, improving system performance by 40%.", "Cut deployment time by 30% through Git-based code reviews and Agile cross-team collaboration."] },
          { role: "Backend Development Intern", period: "Oct – Dec 2024", company: "Stackware Ltd. · Islamabad, Hybrid", bullets: ["Engineered backend features for Bluetooth Low Energy, Google Maps API, and network communication layers.", "Contributed to full-stack development using C++, Python, and Qt/QML for seamless UI/backend integration.", "Implemented automated testing suite reducing bug resolution time by 25%."] },
        ].map((exp, i) => (
          <div key={i} style={{ padding: "1.6rem 0", borderBottom: i === 0 ? "1px solid #F0EDF8" : "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.2rem", flexWrap: "wrap" as const, gap: "0.5rem" }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{exp.role}</div>
              <div style={{ fontSize: 12, color: "#7C6FD4", fontWeight: 600, background: "#EEECFb", padding: "3px 10px", borderRadius: 100 }}>{exp.period}</div>
            </div>
            <div style={{ fontSize: 13, color: "#A99EE8", fontWeight: 500, marginBottom: "1rem" }}>{exp.company}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.55rem" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: 13, color: "#4A4A68", lineHeight: 1.7, display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ width: 20, height: 20, flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#D8D2F8", border: "1.5px solid #A99EE8", display: "block" }}></span>
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr style={S.divider} />

      {/* EDUCATION */}
      <div style={{ ...S.section }} id="education">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.8rem" }}>
          <span style={S.sectionLabel}>Background</span>
          <h2 style={S.h2}>Education</h2>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid #D8D2F8", borderRadius: 18, padding: "1.6rem 1.8rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, gap: "1rem" }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#1A1A2E", marginBottom: "0.25rem" }}>Bachelor of Science in Computer Science</div>
            <div style={{ fontSize: 13, color: "#7C6FD4", fontWeight: 500, marginBottom: "0.75rem" }}>COMSATS University Islamabad</div>
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.4rem" }}>
              {["Data Structures & Algorithms","OOP","Database Management","Machine Learning","DevOps","Computer Networks","Web Development","Operating Systems"].map(c => (
                <span key={c} style={{ background: "#F5F3FF", color: "#4A4A68", border: "1px solid #D8D2F8", padding: "4px 11px", borderRadius: 100, fontSize: 11 }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right" as const, flexShrink: 0 }}>
            <div style={{ fontSize: 12, color: "#7C6FD4", fontWeight: 600, background: "#EEECFb", padding: "3px 10px", borderRadius: 100, marginBottom: "0.4rem", display: "inline-block" }}>Jan 2022 – Jan 2026</div>
            <div style={{ fontSize: 13, color: "#7A7A9A", fontWeight: 500 }}>CGPA: 3.77 / 4.0</div>
          </div>
        </div>
      </div>

      <hr style={S.divider} />

      {/* PROJECTS */}
      <div ref={projRef} style={{ ...S.section, ...S.fadeIn }} id="projects">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.8rem" }}>
          <span style={S.sectionLabel}>Work</span>
          <h2 style={S.h2}>Featured Projects</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
          {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>

      <hr style={S.divider} />

      {/* CONTACT */}
      <div ref={contactRef} style={{ ...S.section, ...S.fadeIn }} id="contact">
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.8rem" }}>
          <span style={S.sectionLabel}>Say Hello</span>
          <h2 style={S.h2}>Get in Touch</h2>
        </div>
        <p style={{ fontSize: 14, color: "#4A4A68", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 500 }}>
          Open to full-time roles, freelance work, and interesting collaborations — whether it's a product, a problem, or just a good conversation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.8rem" }}>
          {[
            { href: "mailto:sadiaimran837@gmail.com", icon: "✉", label: "Email", value: "sadiaimran837@gmail.com" },
            { href: "https://www.linkedin.com/in/sadia-imran-3b627227b", icon: "in", label: "LinkedIn", value: "linkedin.com/in/sadia-imran" },
            { href: "https://github.com/SadiaImran", icon: "gh", label: "GitHub", value: "github.com/SadiaImran" },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={S.contactCard}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#7C6FD4"; e.currentTarget.style.background = "#F5F3FF"; e.currentTarget.style.transform = "translateY(-2px)"; (e.currentTarget.querySelector('.cicon') as HTMLElement).style.background = "#7C6FD4"; (e.currentTarget.querySelector('.cicon') as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#D8D2F8"; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "none"; (e.currentTarget.querySelector('.cicon') as HTMLElement).style.background = "#EEECFb"; (e.currentTarget.querySelector('.cicon') as HTMLElement).style.color = "#7C6FD4"; }}>
              <div className="cicon" style={S.cIcon}>
                {c.icon === "gh" ? <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg> : <span style={{ fontSize: c.icon === "in" ? 13 : 17, fontWeight: c.icon === "in" ? 700 : 400 }}>{c.icon}</span>}
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#7A7A9A", fontWeight: 500 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#1A1A2E", fontWeight: 500 }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "2rem", fontSize: 12, color: "#7A7A9A", borderTop: "1.5px solid #D8D2F8" }}>
        Sadia Imran · 2026
      </footer>
    </div>
  );
}
