import { personalData, educationData, experienceData, skillsData, projectsData, extracurricularData } from './data.js';

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderSkills('all');
  renderProjects();
  initSkillFilters();
  initContactForm();
  initCopyEmail();
  initTerminal();
  initModals();
  initScrollNav();

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const targetEl = document.getElementById('typewriter-text');
  if (!targetEl) return;

  const phrases = [
    "IT Undergraduate @ Uni. of Kelaniya",
    "Aspiring Cyber Security Professional",
    "Software Developer & Security Enthusiast",
    "University Boxing Club Athlete"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      targetEl.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 40;
    } else {
      targetEl.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end of sentence
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ==========================================================================
   Skills Filter & Rendering
   ========================================================================== */
function renderSkills(categoryFilter = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filteredSkills = categoryFilter === 'all'
    ? skillsData
    : skillsData.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());

  container.innerHTML = filteredSkills.map(skill => {
    const isBeginner = skill.status.toLowerCase().includes('beginner');
    const badgeClass = isBeginner ? 'beginner' : 'core';
    
    return `
      <div class="skill-card">
        <div class="skill-header">
          <div class="skill-icon-wrap">
            <i class="${skill.devicon}"></i>
          </div>
          <span class="status-badge ${badgeClass}">${skill.status}</span>
        </div>
        <div class="skill-title-row">
          <h3>${skill.name}</h3>
          <span class="skill-category-tag">${skill.category}</span>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skills-filter-container .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderSkills(filter);
    });
  });
}

/* ==========================================================================
   Projects Rendering & Modals
   ========================================================================== */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projectsData.map(proj => {
    return `
      <div class="project-card">
        <div class="project-card-header">
          <span class="project-badge">${proj.badge}</span>
          <span class="skill-category-tag">${proj.category}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          
          <div class="security-box">
            <div class="security-box-header">
              <i data-lucide="shield-check"></i> Security Architecture
            </div>
            <p>${proj.securityAspect}</p>
          </div>

          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>

          <button class="btn btn-outline btn-sm btn-project-detail" data-id="${proj.id}">
            <i data-lucide="layers"></i> View Details
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();

  // Attach Detail Click Handlers
  document.querySelectorAll('.btn-project-detail').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      openProjectModal(projId);
    });
  });
}

function openProjectModal(id) {
  const proj = projectsData.find(p => p.id === id);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <span class="cyber-badge" style="margin-bottom: 1rem;"><i data-lucide="shield"></i> ${proj.badge}</span>
    <h2 style="font-size: 1.75rem; color: var(--text-primary); margin-bottom: 0.5rem;">${proj.title}</h2>
    <p style="color: var(--accent-cyan); font-family: var(--font-mono); margin-bottom: 1.5rem;">Category: ${proj.category}</p>

    <div style="margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.7;">
      <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Overview</h4>
      <p>${proj.description}</p>
    </div>

    <div class="security-box" style="margin-bottom: 1.5rem;">
      <div class="security-box-header">
        <i data-lucide="lock"></i> Cyber Security Implementation & Controls
      </div>
      <p style="margin-top: 0.35rem; color: var(--text-secondary);">${proj.securityAspect}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Tech Stack & Tools</h4>
      <div class="project-tags">
        ${proj.tags.map(t => `<span class="tech-tag" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  if (window.lucide) window.lucide.createIcons();
}

function initModals() {
  const projModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      projModal.classList.remove('active');
      projModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (projModal) {
    projModal.addEventListener('click', (e) => {
      if (e.target === projModal) {
        projModal.classList.remove('active');
        projModal.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

/* ==========================================================================
   Cyber Terminal Shell Simulator
   ========================================================================== */
function initTerminal() {
  const terminalModal = document.getElementById('terminal-modal');
  const termTrigger = document.getElementById('terminal-trigger');
  const heroCliBtn = document.getElementById('hero-cli-btn');
  const termClose = document.getElementById('term-close');
  const termCloseBtn = document.getElementById('term-close-btn');
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');

  function openTerminal() {
    terminalModal.classList.add('active');
    terminalModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => termInput && termInput.focus(), 100);
  }

  function closeTerminal() {
    terminalModal.classList.remove('active');
    terminalModal.setAttribute('aria-hidden', 'true');
  }

  if (termTrigger) termTrigger.addEventListener('click', openTerminal);
  if (heroCliBtn) heroCliBtn.addEventListener('click', openTerminal);
  if (termClose) termClose.addEventListener('click', closeTerminal);
  if (termCloseBtn) termCloseBtn.addEventListener('click', closeTerminal);

  if (terminalModal) {
    terminalModal.addEventListener('click', (e) => {
      if (e.target === terminalModal) closeTerminal();
    });
  }

  if (!termInput) return;

  termInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const command = termInput.value.trim().toLowerCase();
      termInput.value = '';
      executeCommand(command, termOutput);
    }
  });
}

function executeCommand(cmd, outputContainer) {
  if (!cmd) return;

  // Render input line
  const inputLine = document.createElement('div');
  inputLine.className = 'term-line user-cmd';
  inputLine.textContent = `mahela@cyber-sec:~$ ${cmd}`;
  outputContainer.appendChild(inputLine);

  const responseLine = document.createElement('div');
  responseLine.className = 'term-line sys-out';

  switch (cmd) {
    case 'help':
      responseLine.innerHTML = `
        <strong>Available Commands:</strong><br>
        &nbsp;&nbsp;<span class="cmd-highlight">about</span> &nbsp;&nbsp;&nbsp;&nbsp;- Print biography and academic info<br>
        &nbsp;&nbsp;<span class="cmd-highlight">skills</span> &nbsp;&nbsp;&nbsp;- List technical skills & statuses<br>
        &nbsp;&nbsp;<span class="cmd-highlight">projects</span> &nbsp;- Display featured projects<br>
        &nbsp;&nbsp;<span class="cmd-highlight">boc</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- View Bank of Ceylon internship info<br>
        &nbsp;&nbsp;<span class="cmd-highlight">boxing</span> &nbsp;&nbsp;&nbsp;- View University Boxing Club activities<br>
        &nbsp;&nbsp;<span class="cmd-highlight">contact</span> &nbsp;&nbsp;- Display email and location<br>
        &nbsp;&nbsp;<span class="cmd-highlight">date</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print system date<br>
        &nbsp;&nbsp;<span class="cmd-highlight">clear</span> &nbsp;&nbsp;&nbsp;&nbsp;- Clear terminal buffer<br>
        &nbsp;&nbsp;<span class="cmd-highlight">exit</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Close CLI window
      `;
      break;

    case 'about':
      responseLine.innerHTML = `
        <strong>Chakrawarthige Mahela Indrajith Fernando (Mahela)</strong><br>
        IT Undergraduate @ Department of Industrial Management, University of Kelaniya.<br>
        Location: Dambethalava, Dehipe.<br>
        Aspiration: Cyber Security Specialist.
      `;
      break;

    case 'skills':
      responseLine.innerHTML = skillsData.map(s => `• ${s.name} [${s.category}] - Status: ${s.status}`).join('<br>');
      break;

    case 'projects':
      responseLine.innerHTML = projectsData.map(p => `• <strong>${p.title}</strong> (${p.badge}): ${p.description}`).join('<br><br>');
      break;

    case 'boc':
      responseLine.innerHTML = `
        <strong>Bank of Ceylon (Bank Internship - School Leaver)</strong><br>
        Duration: Sept 2, 2024 – Mar 25, 2025<br>
        Role: Bank Intern (School Leaver)<br>
        Focus: Digital assistant, customer service, branch operations, and digital banking support.
      `;
      break;

    case 'boxing':
      responseLine.innerHTML = `
        <strong>Boxing Club — University of Kelaniya</strong><br>
        Active Combat Athlete. Applying ring discipline, tactical composure, and resilience to cyber security defense.
      `;
      break;

    case 'contact':
      responseLine.innerHTML = `
        Email: mahelaindrajith58@gmail.com<br>
        Location: Dambethalava, Dehipe, Sri Lanka
      `;
      break;

    case 'date':
      responseLine.textContent = `System Time: ${new Date().toString()}`;
      break;

    case 'clear':
      outputContainer.innerHTML = '';
      return;

    case 'exit':
      const modal = document.getElementById('terminal-modal');
      if (modal) modal.classList.remove('active');
      return;

    default:
      responseLine.innerHTML = `Command not recognized: '${cmd}'. Type <span class="cmd-highlight">help</span> for valid options.`;
  }

  outputContainer.appendChild(responseLine);

  // Auto scroll terminal
  const body = document.getElementById('terminal-body');
  if (body) body.scrollTop = body.scrollHeight;
}

/* ==========================================================================
   Copy Email & Contact Form
   ========================================================================== */
function initCopyEmail() {
  const btn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-value').textContent;

  if (btn) {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailText).then(() => {
        btn.innerHTML = `<i data-lucide="check"></i> Copied!`;
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
          btn.innerHTML = `<i data-lucide="copy"></i> Copy`;
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      });
    });
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.className = 'form-status success';
      status.innerHTML = `<i data-lucide="check-circle"></i> Thank you! Your message has been sent successfully. Mahela will get back to you soon.`;
      form.reset();
      if (window.lucide) window.lucide.createIcons();
    });
  }
}

/* ==========================================================================
   Active Navigation on Scroll
   ========================================================================== */
function initScrollNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
