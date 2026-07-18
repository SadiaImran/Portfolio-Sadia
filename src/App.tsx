import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

const roles = ["polyglot systems", "AI-integrated backends", "real-time data pipelines", "cross-platform experiences", "intelligent automation", "full-stack AI products"];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, deleting ? 38 : 68);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return <span className="tw">{text}</span>;
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("visible"); }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return ref;
}

const projects = [
  { badge: "Final Year Project", title: "Podverse — AI Podcast Platform", img: `${BASE}assets/podverse-demo.png`, emoji: "🎙️", desc: "Full-stack AI podcast creation SaaS — upload documents, Gemini generates scripts, LiveKit + Deepgram conduct real-time multi-voice AI conversations, FFmpeg handles audio editing, avatar video generation, voice cloning studio, and a social community feed with subscriptions.", tags: ["FastAPI","LangChain","LiveKit","Gemini","Deepgram","RAG","FFmpeg","Supabase"], link: "https://github.com/SadiaImran" },
  { badge: "Stackware Ltd.", title: "AI Recruitment Screening Engine", img: "resume-screening.jpeg", emoji: "🤖", desc: "NLP-based document pipeline extracting structured data from unstructured files. Multi-criteria filtering with 90% accuracy. Reduced manual screening time by 70%.", tags: ["Python","NLP","React.js","SMTP"], link: "" },
  { badge: "", title: "JobPilot — AI Job Tracker", img: `${BASE}assets/jobpilot.png`, emoji: "💼", desc: "Full-stack tracker with LLM-powered resume analysis, 90% accurate job matching, and Supabase real-time sync with sub-second latency.", tags: ["FastAPI","Supabase","React.js","LLM"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "Travel Planner App", img: `${BASE}assets/travel-app.png`, emoji: "✈️", desc: "Cross-platform Flutter app with Firebase backend for real-time trip planning, destination exploration, and booking with Firestore data sync.", tags: ["Flutter","Firebase","Firestore"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "House Price Predictor", img: `${BASE}assets/home-price.png`, emoji: "🏠", desc: "ML regression model with 92% accuracy using ensemble methods. Flask API with 200ms response time and full feature engineering pipeline.", tags: ["Python","Scikit-learn","Flask"], link: "https://github.com/SadiaImran" },
  { badge: "", title: "Celebrity Face Classifier", img: `${BASE}assets/celebrity.png`, emoji: "🎭", desc: "ML-based multi-face detection with 88% accuracy using OpenCV. Flask backend for real-time image processing and inference.", tags: ["Python","OpenCV","Flask","ML"], link: "https://github.com/SadiaImran" },
];

function ProjectCard({ p }: { p: typeof projects[0] }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <div className="proj-card">
      <div className="proj-img-wrap">
        {p.img && !imgFailed ? <img src={p.img} alt={p.title} onError={() => setImgFailed(true)} style={{ width:"100%", height:"100%", objectFit:"cover" }} /> : <span style={{ fontSize:36 }}>{p.emoji}</span>}
      </div>
      <div className="proj-body">
        {p.badge && <span className="proj-badge">{p.badge}</span>}
        <div className="proj-title">{p.title}</div>
        <div className="proj-desc">{p.desc}</div>
        <div className="proj-tags">{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
        {p.link && <a href={p.link} className="github-btn" target="_blank" rel="noopener noreferrer">↗ GitHub</a>}
      </div>
    </div>
  );
}

export default function App() {
  const skillsRef = useFadeIn();
  const expRef = useFadeIn();
  const eduRef = useFadeIn();
  const projRef = useFadeIn();
  const contactRef = useFadeIn();

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes blink { 50% { border-color: transparent; } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin { to { transform: rotate(360deg); } }

        .page { background:#F7F5FF; font-family:'Inter',sans-serif; color:#1A1A2E; overflow-x:hidden; }

        /* NAV */
        nav { position:sticky; top:0; z-index:100; background:rgba(247,245,255,0.95); backdrop-filter:blur(16px); border-bottom:1.5px solid #D8D2F8; padding:0 1.5rem; display:flex; align-items:center; justify-content:space-between; height:56px; }
        .nav-logo { font-family:'DM Serif Display',serif; font-size:18px; color:#1A1A2E; text-decoration:none; }
        .nav-links { display:flex; gap:1.5rem; }
        .nav-links a { font-size:13px; font-weight:500; color:#4A4A68; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:#7C6FD4; }
        .nav-burger { display:none; background:none; border:none; cursor:pointer; padding:4px; color:#4A4A68; }
        .nav-mobile { display:none; flex-direction:column; background:rgba(247,245,255,0.98); border-bottom:1.5px solid #D8D2F8; padding:1rem 1.5rem; gap:1rem; }
        .nav-mobile a { font-size:15px; font-weight:500; color:#4A4A68; text-decoration:none; padding:0.5rem 0; border-bottom:1px solid #F0EDF8; }
        .nav-mobile.open { display:flex; }

        /* HERO */
        .hero { max-width:900px; margin:0 auto; padding:4rem 1.5rem 3rem; display:grid; grid-template-columns:1fr 180px; gap:2rem; align-items:center; }
        .hero-name { font-family:'DM Serif Display',serif; font-size:62px; line-height:1.02; letter-spacing:3px; margin-bottom:0.4rem; }
        .hero-name .sadia { color:#3A3A4A; }
        .hero-name .imran { color:#7C6FD4; display:block; }
        .hero-role { font-size:15px; color:#4A4A68; margin-bottom:1.2rem; min-height:22px; }
        .tw { color:#7C6FD4; font-weight:500; border-right:2px solid #7C6FD4; padding-right:2px; animation:blink 0.75s step-end infinite; }
        .hero-desc { font-size:14px; line-height:1.8; color:#4A4A68; margin-bottom:2rem; }
        .hero-btns { display:flex; gap:0.75rem; flex-wrap:wrap; }
        .btn-primary { background:#7C6FD4; color:#fff; border:none; padding:11px 24px; border-radius:100px; font-size:13px; font-weight:600; font-family:'Inter',sans-serif; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:all 0.22s; cursor:pointer; }
        .btn-primary:hover { background:#5A4FB8; transform:translateY(-2px); box-shadow:0 8px 20px rgba(124,111,212,0.3); }
        .btn-outline { background:transparent; color:#7C6FD4; border:1.5px solid #D8D2F8; padding:11px 24px; border-radius:100px; font-size:13px; font-weight:600; font-family:'Inter',sans-serif; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:all 0.22s; }
        .btn-outline:hover { border-color:#7C6FD4; background:#EEECFb; }
        .avatar-wrap { display:flex; justify-content:center; align-items:center; }
        .avatar-ring-wrap { position:relative; width:160px; height:160px; }
        .avatar-ring { position:absolute; inset:0; border-radius:50%; border:2.5px dashed #D8D2F8; animation:spin 18s linear infinite; }
        .avatar-inner { position:absolute; inset:12px; border-radius:50%; background:linear-gradient(135deg,#EEECFb 0%,#D8D2F8 100%); display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .eyebrow { display:inline-flex; align-items:center; gap:8px; color:#7A7A9A; font-size:12px; font-weight:500; letter-spacing:0.05em; margin-bottom:1.2rem; }
        .pulse-dot { width:7px; height:7px; background:#5CB88A; border-radius:50%; animation:pulse 2s infinite; display:inline-block; flex-shrink:0; }

        /* SECTION */
        .section { max-width:900px; margin:0 auto; padding:3rem 1.5rem; }
        .section-top { display:flex; align-items:baseline; gap:1rem; margin-bottom:1.8rem; flex-wrap:wrap; }
        .section-label { font-size:11px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#A99EE8; background:#EEECFb; border:1px solid #D8D2F8; padding:4px 12px; border-radius:100px; white-space:nowrap; }
        h2 { font-family:'DM Serif Display',serif; font-size:28px; color:#1A1A2E; letter-spacing:-0.3px; }
        .divider { border:none; border-top:1.5px solid #D8D2F8; max-width:900px; margin:0 auto; }

        /* SKILLS */
        .skills-grid { background:#fff; border:1.5px solid #D8D2F8; border-radius:18px; padding:1.5rem; display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
        .skill-group-title { font-size:11px; font-weight:700; color:#7C6FD4; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.75rem; display:flex; align-items:center; gap:6px; }
        .skill-group-title::before { content:''; width:14px; height:2px; background:#7C6FD4; border-radius:2px; display:inline-block; }
        .tags { display:flex; flex-wrap:wrap; gap:0.4rem; }
        .tag { background:#F5F3FF; color:#1A1A2E; border:1.5px solid #D8D2F8; padding:5px 12px; border-radius:100px; font-size:12px; font-weight:400; cursor:default; transition:all 0.2s; }
        .tag:hover { background:#7C6FD4; color:#fff; border-color:#7C6FD4; transform:translateY(-2px); }

        /* EXPERIENCE */
        .exp-item { padding:1.5rem 0; border-bottom:1px solid #F0EDF8; }
        .exp-item:last-child { border-bottom:none; }
        .exp-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.2rem; gap:0.5rem; flex-wrap:wrap; }
        .exp-role { font-size:15px; font-weight:600; }
        .exp-period { font-size:12px; color:#7C6FD4; font-weight:600; background:#EEECFb; padding:3px 10px; border-radius:100px; white-space:nowrap; }
        .exp-company { font-size:13px; color:#A99EE8; font-weight:500; margin-bottom:0.85rem; }
        .exp-bullets { list-style:none; display:flex; flex-direction:column; gap:0.5rem; }
        .exp-bullets li { font-size:13px; color:#4A4A68; line-height:1.7; display:flex; gap:0.75rem; align-items:flex-start; }
        .bullet { width:20px; height:20px; flex-shrink:0; margin-top:2px; display:flex; align-items:center; justify-content:center; }
        .bullet::after { content:''; width:6px; height:6px; border-radius:50%; background:#D8D2F8; border:1.5px solid #A99EE8; display:block; }

        /* EDUCATION */
        .edu-card { background:#fff; border:1.5px solid #D8D2F8; border-radius:16px; padding:1.5rem; }
        .edu-header { display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; margin-bottom:1rem; }
        .edu-title { font-size:15px; font-weight:600; margin-bottom:0.25rem; }
        .edu-uni { font-size:13px; color:#7C6FD4; font-weight:500; }
        .edu-meta { text-align:right; flex-shrink:0; }
        .edu-period { font-size:12px; color:#7C6FD4; font-weight:600; background:#EEECFb; padding:3px 10px; border-radius:100px; display:inline-block; margin-bottom:0.4rem; }
        .edu-cgpa { font-size:13px; color:#7A7A9A; font-weight:500; }
        .course-tags { display:flex; flex-wrap:wrap; gap:0.4rem; }
        .course-tag { background:#F5F3FF; color:#4A4A68; border:1px solid #D8D2F8; padding:4px 11px; border-radius:100px; font-size:11px; }

        /* PROJECTS */
        .projects-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
        .proj-card { background:#fff; border:1.5px solid #D8D2F8; border-radius:16px; overflow:hidden; transition:all 0.28s; display:flex; flex-direction:column; }
        .proj-card:hover { border-color:#7C6FD4; transform:translateY(-4px); box-shadow:0 12px 32px rgba(124,111,212,0.15); }
        .proj-img-wrap { width:100%; height:130px; overflow:hidden; background:#EEECFb; border-bottom:1.5px solid #D8D2F8; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .proj-body { padding:1rem; flex:1; display:flex; flex-direction:column; }
        .proj-badge { display:inline-block; background:#EEECFb; color:#7C6FD4; font-size:10px; font-weight:600; padding:3px 9px; border-radius:100px; margin-bottom:0.5rem; align-self:flex-start; }
        .proj-title { font-size:13px; font-weight:600; color:#1A1A2E; margin-bottom:0.35rem; }
        .proj-desc { font-size:12px; color:#4A4A68; line-height:1.65; margin-bottom:0.75rem; flex:1; }
        .proj-tags { display:flex; flex-wrap:wrap; gap:0.3rem; margin-bottom:0.65rem; }
        .proj-tag { background:#EEECFb; color:#7C6FD4; font-size:10px; font-weight:500; padding:3px 8px; border-radius:100px; }
        .github-btn { display:inline-flex; align-items:center; gap:5px; font-size:12px; font-weight:600; color:#7C6FD4; text-decoration:none; border:1.5px solid #D8D2F8; padding:5px 13px; border-radius:100px; transition:all 0.2s; align-self:flex-start; margin-top:auto; }
        .github-btn:hover { border-color:#7C6FD4; background:#EEECFb; }

        /* CONTACT */
        .contact-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.75rem; }
        .contact-card { background:#fff; border:1.5px solid #D8D2F8; border-radius:14px; padding:1rem 1.2rem; display:flex; align-items:center; gap:0.85rem; text-decoration:none; transition:all 0.22s; }
        .contact-card:hover { border-color:#7C6FD4; background:#F5F3FF; transform:translateY(-2px); }
        .c-icon { width:38px; height:38px; background:#EEECFb; border:1.5px solid #D8D2F8; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; color:#7C6FD4; transition:all 0.22s; }
        .contact-card:hover .c-icon { background:#7C6FD4; color:#fff; border-color:#7C6FD4; }
        .c-label { font-size:11px; color:#7A7A9A; font-weight:500; }
        .c-value { font-size:12px; color:#1A1A2E; font-weight:500; }

        footer { text-align:center; padding:2rem; font-size:12px; color:#7A7A9A; border-top:1.5px solid #D8D2F8; }

        /* FADE IN */
        .fade-in { opacity:0; transform:translateY(20px); transition:opacity 0.55s ease, transform 0.55s ease; }
        .fade-in.visible { opacity:1; transform:none; }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .nav-links { display:none; }
          .nav-burger { display:flex; align-items:center; justify-content:center; }

          .hero { grid-template-columns:1fr; padding:2.5rem 1.2rem 2rem; gap:0; }
          .hero-name { font-size:48px; letter-spacing:2px; }
          .avatar-wrap { display:none; }

          .skills-grid { grid-template-columns:1fr; }

          .projects-grid { grid-template-columns:1fr; }

          .contact-grid { grid-template-columns:1fr; }

          .edu-header { flex-direction:column; }
          .edu-meta { text-align:left; }

          .section { padding:2.5rem 1.2rem; }
          h2 { font-size:24px; }
        }

        @media (min-width:641px) and (max-width:768px) {
          .hero { grid-template-columns:1fr 140px; }
          .hero-name { font-size:52px; }
          .projects-grid { grid-template-columns:1fr; }
          .contact-grid { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <span className="nav-logo">Sadia Imran</span>
        <div className="nav-links">
          {["skills","experience","education","projects","contact"].map(s => (
            <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
          ))}
        </div>
        <button className="nav-burger" onClick={() => setNavOpen(o => !o)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </nav>
      <div className={`nav-mobile ${navOpen ? "open" : ""}`}>
        {["skills","experience","education","projects","contact"].map(s => (
          <a key={s} href={`#${s}`} onClick={() => setNavOpen(false)}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
      </div>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="eyebrow"><span className="pulse-dot"></span>Open to Opportunities</div>
          <h1 className="hero-name">
            <span className="sadia">Sadia</span>
            <span className="imran">Imran.</span>
          </h1>
          <p className="hero-role">I build <Typewriter /></p>
          <p className="hero-desc">
            Full-Stack Engineer fluent across <strong style={{color:"#7C6FD4"}}>Python, JavaScript, C++, Dart</strong> and beyond — bridging AI/ML, backend systems, cloud infrastructure, and cross-platform development into cohesive, production-ready products.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="avatar-wrap">
          <div className="avatar-ring-wrap">
            <div className="avatar-ring"></div>
            <div className="avatar-inner">
              <svg width="136" height="136" viewBox="0 0 146 146" fill="none"><circle cx="73" cy="73" r="73" fill="#EEECFb"/><ellipse cx="73" cy="58" rx="26" ry="28" fill="#C5BFF5"/><ellipse cx="73" cy="58" rx="20" ry="22" fill="#A99EE8"/><circle cx="65" cy="54" r="3" fill="#fff" opacity="0.6"/><ellipse cx="73" cy="110" rx="38" ry="26" fill="#C5BFF5"/><ellipse cx="73" cy="105" rx="30" ry="20" fill="#A99EE8"/><circle cx="40" cy="68" r="8" fill="#C5BFF5"/><circle cx="106" cy="68" r="8" fill="#C5BFF5"/><rect x="58" y="130" width="30" height="6" rx="3" fill="#7C6FD4" opacity="0.3"/><path d="M82 78 Q73 86 64 78" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/></svg>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* SKILLS */}
      <div ref={skillsRef} className="section fade-in" id="skills">
        <div className="section-top"><span className="section-label">Expertise</span><h2>Technical Skills</h2></div>
        <div className="skills-grid">
          {[
            ["AI / ML", ["LangChain","RAG","LLMs","TensorFlow","Scikit-learn","OpenCV","HuggingFace","Gemini API","Pandas","NumPy"]],
            ["Backend & APIs", ["Python","FastAPI","Flask","Node.js","Express.js","WebSockets","RESTful APIs","C++"]],
            ["Cloud & DevOps", ["AWS EC2","AWS S3","Lambda","Docker","Kubernetes","GitHub Actions","Jenkins","CI/CD"]],
            ["Frontend & Databases", ["React.js","TailwindCSS","Flutter","Qt/QML","PostgreSQL","MongoDB","Supabase","Redis"]],
          ].map(([cat, tags]) => (
            <div key={cat as string}>
              <div className="skill-group-title">{cat}</div>
              <div className="tags">{(tags as string[]).map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* EXPERIENCE */}
      <div ref={expRef} className="section fade-in" id="experience">
        <div className="section-top"><span className="section-label">Career</span><h2>Experience</h2></div>
        {[
          { role:"Junior Software Engineer", period:"Jan 2025 – Present", company:"Stackware Ltd. · Islamabad, Hybrid", bullets:["Architected and deployed a production-ready AI-enabled workflow automation engine using Qt/QML, PyQt, Flutter and Python — handling Bluetooth, ESP32, and real-time networking protocols.","Designed backend APIs in Python and C++ for real-time device communication and map integration, improving system performance by 40%.","Cut deployment time by 30% through Git-based code reviews and Agile cross-team collaboration."] },
          { role:"Backend Development Intern", period:"Oct – Dec 2024", company:"Stackware Ltd. · Islamabad, Hybrid", bullets:["Engineered backend features for Bluetooth Low Energy, Google Maps API, and network communication layers.","Contributed to full-stack development using C++, Python, and Qt/QML for seamless UI/backend integration.","Implemented automated testing suite reducing bug resolution time by 25%."] },
        ].map((exp, i) => (
          <div key={i} className="exp-item">
            <div className="exp-header">
              <div className="exp-role">{exp.role}</div>
              <div className="exp-period">{exp.period}</div>
            </div>
            <div className="exp-company">{exp.company}</div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}><span className="bullet"></span><span>{b}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* EDUCATION */}
      <div ref={eduRef} className="section fade-in" id="education">
        <div className="section-top"><span className="section-label">Background</span><h2>Education</h2></div>
        <div className="edu-card">
          <div className="edu-header">
            <div>
              <div className="edu-title">Bachelor of Science in Computer Science</div>
              <div className="edu-uni">COMSATS University Islamabad</div>
            </div>
            <div className="edu-meta">
              <div className="edu-period">Jan 2022 – Jan 2026</div>
              <div className="edu-cgpa">CGPA: 3.77 / 4.0</div>
            </div>
          </div>
          <div className="course-tags">
            {["Data Structures & Algorithms","OOP","Database Management","Machine Learning","DevOps","Computer Networks","Web Development","Operating Systems"].map(c => (
              <span key={c} className="course-tag">{c}</span>
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* PROJECTS */}
      <div ref={projRef} className="section fade-in" id="projects">
        <div className="section-top"><span className="section-label">Work</span><h2>Featured Projects</h2></div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>

      <hr className="divider" />

      {/* CONTACT */}
      <div ref={contactRef} className="section fade-in" id="contact">
        <div className="section-top"><span className="section-label">Say Hello</span><h2>Get in Touch</h2></div>
        <p style={{fontSize:14,color:"#4A4A68",lineHeight:1.7,marginBottom:"1.5rem",maxWidth:500}}>
          Open to full-time roles, freelance work, and interesting collaborations — whether it's a product, a problem, or just a good conversation.
        </p>
        <div className="contact-grid">
          {[
            { href:"mailto:sadiaimran837@gmail.com", icon:"✉", label:"Email", value:"sadiaimran837@gmail.com" },
            { href:"https://www.linkedin.com/in/sadia-imran-3b627227b", icon:"in", label:"LinkedIn", value:"linkedin.com/in/sadia-imran" },
            { href:"https://github.com/SadiaImran", icon:"gh", label:"GitHub", value:"github.com/SadiaImran" },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="c-icon">
                {c.icon === "gh" ? <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
                : <span style={{fontSize: c.icon==="in"?13:17, fontWeight: c.icon==="in"?700:400}}>{c.icon}</span>}
              </div>
              <div>
                <div className="c-label">{c.label}</div>
                <div className="c-value">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer>Sadia Imran · 2026</footer>
    </div>
  );
}
