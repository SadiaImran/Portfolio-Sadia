// Main Portfolio JavaScript — Interactive Features & ScrollSpy

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu');
  const navLinks = document.querySelector('.navlinks');
  const navAnchors = document.querySelectorAll('.navlinks a');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navAnchors.forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. Real-Time Sticky Toolbar ScrollSpy (Active Section Highlighting)
  const sections = document.querySelectorAll('section[id]');
  
  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 140; // offset for sticky topbar
    
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(a => {
          if (a.getAttribute('href') === `#${id}`) {
            a.classList.add('active');
          } else {
            a.classList.remove('active');
          }
        });
      }
    });

    // Handle scroll at top of page
    if (window.scrollY < 100) {
      navAnchors.forEach(a => {
        if (a.getAttribute('href') === '#home') {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // 3. Interactive CV Showcase Modal
  const openCvBtn = document.getElementById('openCvBtn');
  const cvModal = document.getElementById('cvModal');
  const closeCvBtn = document.getElementById('closeCvBtn');

  const openModal = () => {
    if (cvModal) {
      cvModal.classList.add('open');
      cvModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (cvModal) {
      cvModal.classList.remove('open');
      cvModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (openCvBtn) openCvBtn.addEventListener('click', openModal);
  if (closeCvBtn) closeCvBtn.addEventListener('click', closeModal);

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cvModal && cvModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Modal Tabs Switcher (Document View vs Quick Highlights)
  const tabBtns = document.querySelectorAll('.cv-tab-btn');
  const panePdf = document.getElementById('panePdf');
  const paneHighlights = document.getElementById('paneHighlights');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');
      if (target === 'pdf') {
        if (panePdf) panePdf.classList.add('active');
        if (paneHighlights) paneHighlights.classList.remove('active');
      } else {
        if (paneHighlights) paneHighlights.classList.add('active');
        if (panePdf) panePdf.classList.remove('active');
      }
    });
  });

  // 4. Projects Category Filter Tabs
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.projects-unified .project');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Experience & Education Filter Tabs Switcher
  const qualTabs = document.querySelectorAll('.qual-tab-btn');
  const qualGrid = document.querySelector('.qual-grid');
  const qualTracks = document.querySelectorAll('.qual-track');

  qualTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      qualTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedTab = tab.getAttribute('data-tab');

      if (selectedTab === 'all') {
        if (qualGrid) qualGrid.classList.remove('single-col');
        qualTracks.forEach(track => {
          track.style.display = '';
          track.style.opacity = '1';
        });
      } else {
        if (qualGrid) qualGrid.classList.add('single-col');
        qualTracks.forEach(track => {
          const trackType = track.getAttribute('data-track');
          if (trackType === selectedTab) {
            track.style.display = '';
            track.style.opacity = '0';
            setTimeout(() => {
              track.style.transition = 'opacity 0.25s ease';
              track.style.opacity = '1';
            }, 20);
          } else {
            track.style.display = 'none';
          }
        });
      }
    });
  });

  // 6. Interactive Project Showcase Lightbox Modal
  const PROJECT_DETAILS = {
    pod: {
      title: "PodVerse — AI-Powered Podcast Creation Engine",
      subtitle: "Multimodal Audio & Video Production from Knowledge Bases",
      category: "AI & LLMs",
      img: "assets/project-podverse.png",
      urlLabel: "podverse.ai · Multimodal Studio",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>',
      highlights: [
        "Architected an end-to-end multimodal AI platform generating full-length podcasts from uploaded research documents (PDF, TXT, URL, DOCX) using automated script generation, voice cloning, and AI avatar compositing.",
        "Engineered a resilient RAG pipeline with chunking and vector embeddings, implementing a 3-tier fallback similarity search (RPC → NumPy Cosine → Lexical) ensuring 99.9% retrieval accuracy.",
        "Integrated LiveKit WebRTC and Deepgram with Gemini for low-latency, real-time multi-AI speaker conversational interviews grounded dynamically on user knowledge bases.",
        "Constructed browser-based multi-track audio editing using WaveSurfer.js and FFmpeg, enabling sample-accurate waveform trimming, track blending, and background audio mastering.",
        "Developed a server-side video rendering engine with Remotion on Chrome Headless Shell to dynamically composite finalized videos with animated text overlays, burned-in subtitles, background audio, and cloud media assets."
      ],
      tags: ["FastAPI", "React", "Gemini", "LiveKit", "Supabase", "Remotion", "WaveSurfer.js", "FFmpeg", "RAG Pipelines"],
      actions: [
        { label: "Request Live Demo ↗", url: "mailto:sadiaimran837@gmail.com?subject=PodVerse%20Demo%20Request", primary: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=PodVerse%20Inquiry", primary: false }
      ]
    },
    job: {
      title: "JobPilot — AI Career Co-Pilot",
      subtitle: "Intelligent Application Tracking & Semantic Matching Platform",
      category: "AI & LLMs",
      img: "assets/project-jobpilot.png",
      urlLabel: "jobpilot.app · Career Radar",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>',
      highlights: [
        "Built a full-stack career tracking application featuring automated LLM-powered resume optimization and semantic job-matching algorithms, cutting application preparation time by 60%.",
        "Integrated an automated LLM pipeline to generate tailored cover letters from CV and job description pairings, with end-to-end status tracking and SMTP-driven email automation.",
        "Engineered high-throughput FastAPI backend with Supabase PostgreSQL and secure JWT authentication.",
        "Real-time Kanban status board with application stage management, automated reminders, and detailed resume version analytics."
      ],
      tags: ["FastAPI", "React", "Supabase", "LLMs", "Semantic Search", "TailwindCSS", "PostgreSQL"],
      actions: [
        { label: "View on GitHub ↗", url: "https://github.com/SadiaImran/JobPilot", primary: true, external: true },
        { label: "Discuss Architecture ↗", url: "mailto:sadiaimran837@gmail.com?subject=JobPilot%20Inquiry", primary: false }
      ]
    },
    travel: {
      title: "Travel Planner App",
      subtitle: "Cross-Platform Mobile Trip Exploration & Booking",
      category: "Mobile Apps",
      img: "assets/project-travel.png",
      urlLabel: "Explore The World · Mobile Client",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>',
      highlights: [
        "Developed cross-platform mobile application with Firebase backend for real-time trip planning, destination exploration, and interactive booking management.",
        "Implemented Cloud Firestore for real-time collaborative synchronization, enabling travelers to plan joint trips and itineraries offline and online.",
        "Engineered fluid custom UI components, location search, and interactive mapping integration with Dart."
      ],
      tags: ["Flutter", "Firebase", "Dart", "Firestore", "Google Maps API", "Cross-Platform"],
      actions: [
        { label: "View on GitHub ↗", url: "https://github.com/SadiaImran/travel_app", primary: true, external: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=Travel%20App%20Inquiry", primary: false }
      ]
    },
    workflow: {
      title: "AI Workflow Automation Screening Engine",
      subtitle: "Intelligent Resume Understanding & Candidate Ranking · Stackware Ltd",
      category: "AI & Systems",
      img: "assets/project-ai-screening.png",
      urlLabel: "stackware.screening · Candidate Ranking",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="6" height="6" rx="1"></rect><rect x="16" y="3" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M5 9v3a2 2 0 0 0 2 2h5m7-5v3a2 2 0 0 1-2 2h-5"></path></svg>',
      highlights: [
        "Developed an intelligent document understanding platform extracting structured schema data from multi-format unstructured resumes and job requisitions with 90% parsing accuracy.",
        "Built an automated candidate ranking algorithm, interview slot scheduler, and email dispatch pipeline via SMTP and web scraping, reducing manual talent screening overhead by 70%.",
        "Constructed recruiter evaluation dashboard in React for dynamic multi-criteria candidate filtering."
      ],
      tags: ["Python", "React", "NLP", "BeautifulSoup", "SMTP", "Schema Extraction"],
      actions: [
        { label: "Request Live Demo ↗", url: "mailto:sadiaimran837@gmail.com?subject=AI%20Workflow%20Automation%20Demo%20Request", primary: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=Screening%20Engine%20Inquiry", primary: false }
      ]
    },
    weather: {
      title: "Realtime Weather Forecast App",
      subtitle: "Mobile Meteorological Radar & Live Temperature Monitoring",
      category: "Mobile Apps",
      img: "assets/project-weather.png",
      urlLabel: "Realtime Weather · Islamabad Radar",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
      highlights: [
        "Engineered cross-platform mobile app in Flutter delivering real-time meteorological forecasts, hourly condition breakdowns, and multi-day climate trends.",
        "Integrated RESTful meteorological APIs with asynchronous caching for low data consumption and instant offline responses.",
        "Dynamic weather UI theming that smoothly transitions based on live sun position, cloud cover, and precipitation levels."
      ],
      tags: ["Flutter", "Firebase", "Dart", "REST APIs", "Geolocation"],
      actions: [
        { label: "View on GitHub ↗", url: "https://github.com/SadiaImran/weather_app", primary: true, external: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=Weather%20App%20Inquiry", primary: false }
      ]
    },
    predictive: {
      title: "Predictive Analytics Platform",
      subtitle: "High-Accuracy Multivariate Price Estimation Service",
      category: "Systems & ML",
      img: "assets/project-predictive.png",
      urlLabel: "Price Predictor · ML Dashboard",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      highlights: [
        "Trained and evaluated ensemble regression models reaching 92% prediction accuracy for multivariate price estimation.",
        "Deployed via an asynchronous micro-Flask REST inference API maintaining a <200ms latency under high concurrent load.",
        "Built a data preprocessing pipeline incorporating feature scaling, categorical encoding, and outlier detection with Scikit-learn and Pandas."
      ],
      tags: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "Regression Models"],
      actions: [
        { label: "View on GitHub ↗", url: "https://github.com/SadiaImran/Predict-house-pricing", primary: true, external: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=Predictive%20Platform%20Inquiry", primary: false }
      ]
    },
    "cv-face": {
      title: "Computer Vision Multi-Face Detection",
      subtitle: "Haar Cascades & Wavelet Transform Face Classification Pipeline",
      category: "Systems & ML",
      img: "assets/project-face-classifier.png",
      urlLabel: "Vision Classifier · Haar Cascades",
      iconSvg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9V5a2 2 0 0 1 2-2h4"></path><path d="M16 3h4a2 2 0 0 1 2 2v4"></path><path d="M22 15v4a2 2 0 0 1-2 2h-4"></path><path d="M8 21H4a2 2 0 0 1-2-2v-4"></path><circle cx="12" cy="12" r="3"></circle></svg>',
      highlights: [
        "Engineered an image classification pipeline utilizing OpenCV Haar Cascades and wavelet transforms for real-time facial feature isolation.",
        "Achieved 88% multi-class inference accuracy across challenging lighting conditions and multi-angle head poses.",
        "Flask web interface providing interactive webcam detection and batch test image evaluation."
      ],
      tags: ["OpenCV", "Python", "Flask", "ML", "Haar Cascades", "Wavelet Transform"],
      actions: [
        { label: "View on GitHub ↗", url: "https://github.com/SadiaImran/Celebrity-face-detection", primary: true, external: true },
        { label: "Contact Developer ↗", url: "mailto:sadiaimran837@gmail.com?subject=Face%20Detection%20Inquiry", primary: false }
      ]
    }
  };

  const projectModal = document.getElementById('projectModal');
  const pmBackdrop = document.getElementById('projectModalBackdrop');
  const pmCloseBtn = document.getElementById('pmCloseBtn');
  const pmTitle = document.getElementById('pmTitle');
  const pmSubtitle = document.getElementById('pmSubtitle');
  const pmCategoryBadge = document.getElementById('pmCategoryBadge');
  const pmIconBadge = document.getElementById('pmIconBadge');
  const pmImage = document.getElementById('pmImage');
  const pmMediaUrl = document.getElementById('pmMediaUrl');
  const pmPopoutLink = document.getElementById('pmPopoutLink');
  const pmHighlightsList = document.getElementById('pmHighlightsList');
  const pmTagsCloud = document.getElementById('pmTagsCloud');
  const pmActionContainer = document.getElementById('pmActionContainer');

  const openProjectModal = (projId) => {
    const data = PROJECT_DETAILS[projId];
    if (!data || !projectModal) return;

    if (pmTitle) pmTitle.textContent = data.title;
    if (pmSubtitle) pmSubtitle.textContent = data.subtitle;
    if (pmCategoryBadge) pmCategoryBadge.textContent = data.category;
    if (pmIconBadge) pmIconBadge.innerHTML = data.iconSvg || '✦';
    if (pmMediaUrl) pmMediaUrl.textContent = data.urlLabel || data.title;
    if (pmImage) {
      pmImage.src = data.img;
      pmImage.alt = data.title;
    }
    if (pmPopoutLink) pmPopoutLink.href = data.img;

    // Highlights list
    if (pmHighlightsList) {
      pmHighlightsList.innerHTML = data.highlights
        .map(hl => `<li>${hl}</li>`)
        .join('');
    }

    // Tags cloud
    if (pmTagsCloud) {
      pmTagsCloud.innerHTML = data.tags
        .map(t => `<span>${t}</span>`)
        .join('');
    }

    // Actions
    if (pmActionContainer) {
      pmActionContainer.innerHTML = data.actions
        .map(act => {
          const isGithub = (act.url && act.url.includes('github.com')) || (act.label && act.label.toLowerCase().includes('github'));
          let btnClass = act.primary ? 'pm-action-btn btn-primary' : 'pm-action-btn btn-ghost';
          if (isGithub) {
            btnClass = 'pm-action-btn btn-github';
          }
          const targetAttr = act.external ? 'target="_blank" rel="noopener"' : '';
          const ghSvg = isGithub ? '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="flex-shrink:0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>' : '';
          return `<a class="${btnClass}" href="${act.url}" ${targetAttr}>${ghSvg}${act.label}</a>`;
        })
        .join('');
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (pmCloseBtn) pmCloseBtn.addEventListener('click', closeProjectModal);
  if (pmBackdrop) pmBackdrop.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // Attach click events to project cards and preview buttons
  const previewBtns = document.querySelectorAll('.btn-project-preview');
  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = btn.getAttribute('data-project');
      if (projId) openProjectModal(projId);
    });
  });

  const previewImgs = document.querySelectorAll('.preview.project-img-preview');
  previewImgs.forEach(box => {
    box.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = box.getAttribute('data-project');
      if (projId) openProjectModal(projId);
    });
  });
});

  // Dynamic Current Year for Footer Auto-Update
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
