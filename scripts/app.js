/**
 * Emmanuel Kipkorir Lagat - Portfolio Application Scripts
 * Developer. Security-Focused Thinker. Technology Builder.
 */

// --- Project Data Store for Case Studies ---
const PROJECT_DATA = {
  pos: {
    category: "Full-Stack Development",
    title: "SaaS Point of Sale System",
    status: "In Progress",
    statusClass: "in-progress",
    summary: "A robust point-of-sale and inventory system designed to support supermarket operations through real-time product management, checkout sales processing, inventory workflows, and business intelligence reporting.",
    contribution: "Backend feature development, API integration, database-backed relational data modeling, and exploration of secure payment gateway integration.",
    architecture: [
      "Frontend: React SPA with Zustand for scalable client-side cash register state management and Tailwind CSS for high-contrast POS UI.",
      "Backend: Laravel REST API handling transactional inventory deduction, authentication, and structured error handling.",
      "Database: MySQL structured schema with relational foreign key constraints and transactional ACID integrity."
    ],
    securityConsiderations: [
      "Role-Based Access Control (RBAC) to restrict cashier vs. store manager ledger permissions.",
      "Strict server-side price and stock validation to prevent client-side cart tampering.",
      "Prepared statements via Laravel Eloquent to eliminate SQL Injection risks."
    ],
    tags: ["React", "Laravel", "MySQL", "Zustand", "Tailwind CSS", "REST API"],
    demoUrl: "https://github.com/emmanuel-lagat/saas-pos-system",
    sourceUrl: "https://github.com/emmanuel-lagat/saas-pos-system"
  },
  skillmatrix: {
    category: "Web Application · AI Integration",
    title: "SkillMatrix — Employee Competency Management",
    status: "Featured Concept",
    statusClass: "completed",
    summary: "A system concept designed to help institutions identify workforce competency gaps, manage employee skills inventories, track professional certifications, and recommend tailored learning pathways.",
    contribution: "Architected structured relational models for skills verification, developed responsive dashboard interfaces, and integrated AI-assisted prompts for skill gap evaluation and training recommendations.",
    architecture: [
      "Frontend: React with TypeScript for type-safe organizational hierarchy visualization.",
      "Backend: Django REST framework powering secure endpoints, serializers, and permission scopes.",
      "Database: PostgreSQL with indexing on department and skill matrix relationships.",
      "AI Integration: LLM API integration with prompt engineering for contextual competency assessment."
    ],
    securityConsiderations: [
      "Principle of Least Privilege applied to department head vs. employee record visibility.",
      "Sanitized prompt inputs before dispatching requests to external AI APIs to prevent data leaks.",
      "Token-based authentication and audit logs for skill verification updates."
    ],
    tags: ["Django", "React", "TypeScript", "PostgreSQL", "AI API Integration"],
    demoUrl: "https://github.com/emmanuel-lagat/skillmatrix",
    sourceUrl: "https://github.com/emmanuel-lagat/skillmatrix"
  },
  cyberlab: {
    category: "Cybersecurity · Hands-on Learning",
    title: "Cybersecurity Lab & Security Research",
    status: "Ongoing Learning",
    statusClass: "learning",
    summary: "A developing technical portfolio focused on networking fundamentals, Linux administration, log analysis, vulnerability assessments, and defensive security workflows in controlled sandbox environments.",
    contribution: "Configuring hardened Linux virtual machines, conducting Wireshark packet inspections, analyzing auth/syslog telemetry, and practicing defensive incident-response procedures.",
    architecture: [
      "Environment: Virtualized Linux testbed (Ubuntu Server, Kali/Debian) running isolated network segments.",
      "Telemetry & Logs: Syslog, Auth logs, and packet capture files analyzed for anomalous behavior.",
      "Frameworks & Education: IBM SkillsBuild Cybersecurity Fundamentals curriculum and hands-on exercises."
    ],
    securityConsiderations: [
      "Strict isolation of test environments to prevent uncontrolled network leakage.",
      "Investigation of common attack vectors (brute force, credential stuffing, privilege escalation).",
      "Documenting structured remediation steps and defense-in-depth principles."
    ],
    tags: ["Linux", "Networking", "Security Tools", "Log Analysis", "IBM SkillsBuild", "Defensive Security"],
    demoUrl: "https://github.com/emmanuel-lagat/cyber-security-labs",
    sourceUrl: "https://github.com/emmanuel-lagat/cyber-security-labs"
  },
  ogiek: {
    category: "Web Design · Social Impact",
    title: "Ogiek Heritage & Development Initiative",
    status: "Completed",
    statusClass: "completed",
    summary: "A responsive website project focused on communicating a community initiative's mission, cultural heritage, development goals, and advocacy work through an accessible digital presence.",
    contribution: "Website information architecture, responsive interface design, accessible typography, content presentation, and translating community objectives into a clean user experience.",
    architecture: [
      "Frontend: React and modular CSS components with a mobile-first responsive approach.",
      "Performance: Optimized lightweight assets and semantic HTML for fast loading on lower-bandwidth mobile networks in Kenya.",
      "Accessibility: High contrast color ratios and accessible navigation."
    ],
    securityConsiderations: [
      "Static generation approach providing an inherently minimal attack surface.",
      "Content Security Policy (CSP) headers and safe external asset referencing."
    ],
    tags: ["React", "JavaScript", "CSS3", "Responsive Design", "Web Accessibility"],
    demoUrl: "https://github.com/emmanuel-lagat/ogiek-initiative",
    sourceUrl: "https://github.com/emmanuel-lagat/ogiek-initiative"
  }
};

// --- DOM Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initScrollSpy();
  initProjectFilters();
  initProjectModal();
  initTerminalSimulator();
  initContactForm();
  initBackToTop();
});

// --- 1. Theme Toggle (Dark / Light) ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(toggleBtn, newTheme);
    showToast(`Switched to ${newTheme} theme`);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('aria-label', 'Switch to light theme');
  }
}

// --- 2. Mobile Navigation Drawer ---
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- 3. ScrollSpy Active Nav Highlighting ---
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => observer.observe(section));
}

// --- 4. Interactive Project Filter Tabs ---
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// --- 5. Project Details Modal ---
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const closeFooterBtn = document.getElementById('modalCloseFooterBtn');
  const detailButtons = document.querySelectorAll('.btn-view-details');

  if (!modal) return;

  const openModal = (projectId) => {
    const data = PROJECT_DATA[projectId];
    if (!data) return;

    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalStatus').textContent = data.status;
    document.getElementById('modalStatus').className = `status-pill ${data.statusClass}`;
    document.getElementById('modalSummary').textContent = data.summary;
    document.getElementById('modalContribution').textContent = data.contribution;

    // Architecture list
    const archList = document.getElementById('modalArchitecture');
    archList.innerHTML = '';
    data.architecture.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      archList.appendChild(li);
    });

    // Security list
    const secList = document.getElementById('modalSecurity');
    secList.innerHTML = '';
    data.securityConsiderations.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      secList.appendChild(li);
    });

    // Tags list
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag-badge';
      span.textContent = t;
      tagsContainer.appendChild(span);
    });

    // Action links
    const sourceLink = document.getElementById('modalSourceLink');
    if (sourceLink) sourceLink.href = data.sourceUrl;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// --- 6. Cybersecurity Lab Interactive Terminal Simulator ---
function initTerminalSimulator() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  const quickButtons = document.querySelectorAll('.quick-cmd-btn');

  if (!terminalInput || !terminalBody) return;

  const executeCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    const cmd = rawCmd.toLowerCase();

    // Append user input line to output
    const userLine = document.createElement('div');
    userLine.className = 'terminal-output';
    userLine.innerHTML = `<span class="terminal-prompt">guest@lagat-lab:~$</span> <span class="out-info">${escapeHtml(rawCmd)}</span>`;
    terminalBody.appendChild(userLine);

    // Process output
    const outputDiv = document.createElement('div');
    outputDiv.className = 'terminal-output';

    switch (cmd) {
      case 'help':
        outputDiv.innerHTML = `
<span class="out-info">AVAILABLE COMMANDS:</span>
  <span class="out-success">whoami</span>       - Display developer & security profile
  <span class="out-success">status</span>       - Check defensive security lab posture
  <span class="out-success">scan</span>         - Run simulated defensive network/log audit
  <span class="out-success">skills</span>       - List verified technical competencies
  <span class="out-success">projects</span>     - View featured projects overview
  <span class="out-success">approach</span>     - Engineering & security principles
  <span class="out-success">contact</span>      - Get in touch directly
  <span class="out-success">clear</span>        - Clear terminal console screen
`;
        break;

      case 'whoami':
        outputDiv.innerHTML = `
<span class="out-success">Emmanuel Kipkorir Lagat</span>
Positioning: Developer. Security-Focused Thinker. Technology Builder.
University:  Kabarak University (Computer Science & IT Department)
Location:    Kenya · Open to opportunities & collaborations
Philosophy:  "Building with purpose. Securing with intention."
`;
        break;

      case 'status':
        outputDiv.innerHTML = `
<span class="out-info">--- SYSTEM & LAB STATUS REPORT ---</span>
[+] Linux Lab Sandbox:       <span class="out-success">ACTIVE (Ubuntu Server / Kali VM)</span>
[+] Telemetry Monitoring:    <span class="out-success">ONLINE (Syslog & Auth audit enabled)</span>
[+] Training Track:          <span class="out-success">IBM SkillsBuild Cybersecurity Fundamentals</span>
[+] Focus Disciplines:       Web Engineering | REST APIs | Defensive Security | AI Integration
[+] Availability:            <span class="out-success">Open to internships, attachments, and developer roles</span>
`;
        break;

      case 'scan':
        outputDiv.innerHTML = `
<span class="out-warn">[!] Initiating Defensive Audit Routine...</span>
[*] Checking input validation boundaries... <span class="out-success">[PASS]</span>
[*] Auditing authentication & session handling... <span class="out-success">[PASS]</span>
[*] Analyzing simulated access logs: 0 anomalous spikes detected.
[*] Principle of Least Privilege: Enforced.
<span class="out-success">[✓] Defense-in-depth verification complete. Zero vulnerabilities logged.</span>
`;
        break;

      case 'skills':
        outputDiv.innerHTML = `
<span class="out-info">TECHNICAL COMPETENCIES:</span>
• <span class="out-success">Frontend:</span>    React, JavaScript, HTML5, CSS3, Tailwind CSS, Vite
• <span class="out-success">Backend:</span>     Python, Django, PHP / Laravel, RESTful APIs
• <span class="out-success">Databases:</span>   MySQL, PostgreSQL
• <span class="out-success">Security:</span>    Networking, Linux environments, defensive concepts, log analysis
• <span class="out-success">Tools & AI:</span>  Git, GitHub, VS Code, Linux terminal, AI API integration
`;
        break;

      case 'projects':
        outputDiv.innerHTML = `
<span class="out-info">FEATURED REPOSITORIES & LABS:</span>
1. <span class="out-success">SaaS Point of Sale</span>       [React, Laravel, MySQL, Zustand, Tailwind]
2. <span class="out-success">SkillMatrix</span>              [Django, React, TypeScript, PostgreSQL, AI]
3. <span class="out-success">Cybersecurity Lab</span>        [Linux, Wireshark, Networking, Defensive telemetry]
4. <span class="out-success">Ogiek Heritage Initiative</span>[React, CSS3, Accessible Design]
<span class="out-dim">(Scroll down to the Projects section to inspect case studies)</span>
`;
        break;

      case 'approach':
        outputDiv.innerHTML = `
<span class="out-info">ENGINEERING & SECURITY APPROACH:</span>
1. Understand the problem (user requirements first)
2. Build with purpose (clean, maintainable code)
3. Consider security early (least privilege, sanitization, input validation)
4. Test, learn, and improve (continuous feedback and iteration)
`;
        break;

      case 'contact':
        outputDiv.innerHTML = `
<span class="out-success">GET IN TOUCH:</span>
Email:   <a href="mailto:lagatemmanuel07@gmail.com" class="out-info">lagatemmanuel07@gmail.com</a>
GitHub:  <a href="https://github.com" target="_blank" rel="noopener" class="out-info">github.com/emmanuel-lagat</a>
LinkedIn:<a href="https://linkedin.com" target="_blank" rel="noopener" class="out-info">linkedin.com/in/emmanuel-lagat</a>
Location:Kenya
`;
        break;

      case 'clear':
        terminalBody.innerHTML = '';
        terminalInput.value = '';
        return;

      default:
        outputDiv.innerHTML = `<span class="out-warn">Command not recognized: "${escapeHtml(rawCmd)}". Type <span class="out-success">help</span> to view commands.</span>`;
        break;
    }

    terminalBody.appendChild(outputDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
    terminalInput.value = '';
  };

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
    }
  });

  quickButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

// --- 7. Contact Form Handler & Copy Helper ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = copyEmailBtn.getAttribute('data-email') || 'lagatemmanuel07@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all required fields.');
        return;
      }

      // Prepare mailto link as direct communication conduit
      const recipient = 'lagatemmanuel07@gmail.com';
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      window.location.href = mailtoUrl;
      showToast('Opening your default email client...');
      form.reset();
    });
  }
}

// --- 8. Back to Top Button ---
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- 9. Toast Notification Utility ---
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">✓</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
