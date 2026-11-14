/* ==========================================================================
   CORPORATE PORTFOLIO INTERACTIVITY, DYNAMIC SVG CHARTS & MODAL SYSTEM
   Pure Vanilla JS — Zero external libraries required.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Render Institutional SVG Mini-Charts
  function buildMiniChartSVG(project) {
    if (project.chartType === "line") {
      const values = project.chartData;
      const min = Math.min(...values) - 2;
      const max = Math.max(...values) + 2;
      const width = 280;
      const height = 64;
      const stepX = width / (values.length - 1);

      const points = values
        .map((val, idx) => {
          const x = Math.round(idx * stepX);
          const y = Math.round(height - ((val - min) / (max - min)) * (height - 14) - 7);
          return `${x},${y}`;
        })
        .join(" ");

      return `
        <div class="mini-chart-wrap">
          <div style="font-size:0.72rem;font-weight:600;color:#475569;margin-bottom:6px;">${project.chartCaption}</div>
          <svg viewBox="0 0 ${width} ${height}" width="100%" height="64" role="img" aria-label="${project.chartCaption}">
            <polyline fill="none" stroke="#0B1F3A" stroke-width="2.2" points="${points}" />
            ${values
              .map((val, idx) => {
                const x = Math.round(idx * stepX);
                const y = Math.round(height - ((val - min) / (max - min)) * (height - 14) - 7);
                return `<circle cx="${x}" cy="${y}" r="3" fill="#B48A3E" />`;
              })
              .join("")}
          </svg>
        </div>
      `;
    }

    // Default: Horizontal Institutional Bar Chart
    const maxVal = Math.max(...project.chartData.map((d) => d.value), 100);
    const barsHTML = project.chartData
      .map(
        (item) => `
        <div style="display:grid;grid-template-columns:96px 1fr 36px;align-items:center;gap:8px;margin-bottom:5px;font-size:0.72rem;">
          <span style="color:#334155;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.label}</span>
          <div style="background:#E2E8F0;height:7px;width:100%;">
            <div style="background:#0B1F3A;height:7px;width:${Math.round((item.value / maxVal) * 100)}%;border-right:2px solid #B48A3E;"></div>
          </div>
          <span style="text-align:right;font-weight:600;color:#0B1F3A;">${item.value}%</span>
        </div>
      `
      )
      .join("");

    return `
      <div class="mini-chart-wrap">
        <div style="font-size:0.72rem;font-weight:600;color:#475569;margin-bottom:8px;">${project.chartCaption}</div>
        ${barsHTML}
      </div>
    `;
  }

  // 4. Render Projects Grid & Filtering
  const projectsGrid = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderProjects(filterCategory = "all") {
    if (!projectsGrid || typeof PROJECTS_DATA === "undefined") return;

    const filtered =
      filterCategory === "all"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter((p) => p.category === filterCategory);

    projectsGrid.innerHTML = filtered
      .map(
        (proj) => `
        <article class="project-card">
          <div class="project-card-top">
            <div class="project-badges">
              <span class="proj-type-badge">${proj.classification}</span>
              <span class="proj-status-badge">${proj.status}</span>
            </div>
            <h3>${proj.title}</h3>
            <p class="project-objective">${proj.objective}</p>
          </div>
          <div class="project-chart-preview">
            ${buildMiniChartSVG(proj)}
          </div>
          <div class="project-card-footer">
            <span class="tool-tags">${proj.tools.join(" • ")}</span>
            <button type="button" class="btn-case-study" data-project-id="${proj.id}">
              View Case Study
            </button>
          </div>
        </article>
      `
      )
      .join("");
  }

  renderProjects("all");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      renderProjects(btn.dataset.filter);
    });
  });

  // 5. Render Insights Articles
  const insightsGrid = document.getElementById("insightsGrid");
  if (insightsGrid && typeof INSIGHTS_DATA !== "undefined") {
    insightsGrid.innerHTML = INSIGHTS_DATA.map(
      (art) => `
      <article class="insight-card">
        <div>
          <span class="insight-topic">${art.topic}</span>
          <h3>${art.title}</h3>
          <p>${art.summary}</p>
        </div>
        <div class="insight-meta">
          <span>${art.date} &bull; ${art.readTime}</span>
          <button type="button" class="btn-case-study" data-insight-id="${art.id}">Read Brief</button>
        </div>
      </article>
    `
    ).join("");
  }

  // 6. Case Study & Article Modal Controller
  const modal = document.getElementById("detailModal");
  const modalBadge = document.getElementById("modalBadge");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("closeModalBtn");

  function openProjectModal(projectId) {
    const proj = PROJECTS_DATA.find((p) => p.id === projectId);
    if (!proj || !modal) return;

    modalBadge.textContent = `${proj.classification} • Status: ${proj.status}`;
    modalTitle.textContent = proj.title;
    modalBody.innerHTML = `
      <div class="cs-grid">
        <div class="cs-box">
          <h4>Business Problem</h4>
          <p>${proj.businessProblem}</p>
        </div>
        <div class="cs-box">
          <h4>Objective</h4>
          <p>${proj.objective}</p>
        </div>
      </div>
      <div class="cs-full">
        <h4>Dataset Description &amp; Transparency Note</h4>
        <p>${proj.dataset}</p>
      </div>
      <div class="cs-grid">
        <div class="cs-box">
          <h4>Tools Used</h4>
          <p>${proj.tools.join(", ")}</p>
        </div>
        <div class="cs-box">
          <h4>Methodology</h4>
          <p>${proj.methodology}</p>
        </div>
      </div>
      <div class="cs-full">
        <h4>Analytical Approach</h4>
        <p>${proj.analyticalApproach}</p>
      </div>
      <div class="cs-full">
        <h4>Visualization Output</h4>
        <div style="background:#F8FAFC;border:1px solid #E2E8F0;padding:16px;">
          ${buildMiniChartSVG(proj)}
        </div>
      </div>
      <div class="cs-grid">
        <div class="cs-box">
          <h4>Key Findings</h4>
          <p>${proj.findings}</p>
        </div>
        <div class="cs-box">
          <h4>Business Recommendations</h4>
          <p>${proj.recommendations}</p>
        </div>
      </div>
    `;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function openInsightModal(insightId) {
    const art = INSIGHTS_DATA.find((a) => a.id === insightId);
    if (!art || !modal) return;

    modalBadge.textContent = `${art.topic} • ${art.readTime}`;
    modalTitle.textContent = art.title;
    modalBody.innerHTML = art.body
      .map((para) => `<p style="margin:0 0 16px;color:#334155;font-size:0.96rem;">${para}</p>`)
      .join("");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const projBtn = e.target.closest("[data-project-id]");
    if (projBtn) {
      openProjectModal(projBtn.dataset.projectId);
      return;
    }

    const insightBtn = e.target.closest("[data-insight-id]");
    if (insightBtn) {
      openInsightModal(insightBtn.dataset.insightId);
      return;
    }

    if (e.target === modal) {
      closeModal();
    }
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });

  // 7. Zero-Backend Mailto Contact Form Handler
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");
  const directEmailLink = document.getElementById("directEmailLink");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("senderName").value.trim();
      const topic = document.getElementById("inquiryTopic").value;
      const message = document.getElementById("senderMessage").value.trim();

      if (!name || !message) {
        formFeedback.textContent = "Please enter your name and message before composing.";
        return;
      }

      const recipient = directEmailLink ? directEmailLink.textContent.trim() : "umesh.khadke.placeholder@example.com";
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${topic} — ${name}`);
      const body = encodeURIComponent(`Hello Umesh,\n\n${message}\n\nBest regards,\n${name}`);

      formFeedback.textContent = "Opening your default email application...";
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }
});
