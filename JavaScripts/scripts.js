/**
 * UJJWAL RUPAKHETI - REVISED PORTFOLIO SCRIPT
 * This script handles all client-side interactivity for the portfolio.
 * VERSION: Updated for smart show more functionality (3/2 items).
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. DOM ELEMENT CACHE
  const elements = {
    body: document.body,
    header: document.querySelector(".header"),
    themeToggle: document.getElementById("theme-toggle"),
    typewriter: document.getElementById("typewriter"),
    skillTooltip: document.getElementById("skill-tooltip"),
    experienceTabsContainer: document.querySelector(".experience__tabs"),
    experiencePanelContainer: document.querySelector(".experience__content"),
    educationAccordion: document.querySelector(".education__accordion"),
    certModal: document.getElementById("certificate-modal"),
    certModalImage: document.querySelector("#certificate-modal .modal__image"),
    certModalClose: document.getElementById("cert-modal-close"),
    hireMeBtn: document.getElementById("hire-me-btn"),
    hireMeModal: document.getElementById("hire-me-modal"),
    hireMeClose: document.getElementById("hire-me-close"),
    contactForm: document.getElementById("contact-form"),
    thankYouModal: document.getElementById("thank-you-modal"),
    thanksOkBtn: document.getElementById("thanks-ok-btn"),
    revealElements: document.querySelectorAll(".reveal"),
  };

  // 2. INITIALIZATION
  function initialize() {
    initTheme();
    initHeaderScroll();
    initTypewriter();
    initSkillTooltip();
    initExperienceTabs();
    initEducationAccordion();
    initCertificateModal();
    initHireMeModal();
    initScrollReveal();
    initSmartShowMore("#projects-toggle-btn", ".projects__grid", ".project-card");
    initSmartShowMore("#certs-toggle-btn", ".certificates__grid", ".cert-card");
    console.log("Ujjwal Rupakheti's Revised Portfolio: Initialized Successfully. 🚀");
  }

  // 3. THEME MANAGEMENT
  function initTheme() {
    const applyTheme = (theme) => {
      elements.body.className = theme;
      localStorage.setItem("portfolio-theme", theme);
    };
    elements.themeToggle.addEventListener("click", () => {
      const newTheme = elements.body.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
      applyTheme(newTheme);
    });
    const savedTheme = localStorage.getItem("portfolio-theme");
    applyTheme(savedTheme || "dark-mode");
  }

  // 4. HEADER SCROLL EFFECT
  function initHeaderScroll() {
    window.addEventListener("scroll", () => {
      elements.header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // 5. TYPEWRITER EFFECT
  function initTypewriter() {
    const roles = ["Student.", "Web Developer.", "Designer.", "Content Writer."];
    let roleIndex = 0,
      charIndex = 0,
      isDeleting = false;
    function type() {
      if (!elements.typewriter) return;
      const currentRole = roles[roleIndex];
      elements.typewriter.textContent = currentRole.substring(0, charIndex);
      const typeSpeed = isDeleting ? 75 : 150;
      if (!isDeleting && charIndex < currentRole.length) charIndex++;
      else if (isDeleting && charIndex > 0) charIndex--;
      else {
        isDeleting = !isDeleting;
        if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(
        type,
        isDeleting ? typeSpeed : charIndex === currentRole.length ? 2000 : typeSpeed
      );
    }
    type();
  }

  // 6. SKILL TOOLTIP
  function initSkillTooltip() {
    document.querySelectorAll(".skill-item").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        elements.skillTooltip.textContent = item.dataset.name;
        elements.skillTooltip.style.opacity = "1";
      });
      item.addEventListener("mouseleave", () => {
        elements.skillTooltip.style.opacity = "0";
      });
      item.addEventListener("mousemove", (e) => {
        elements.skillTooltip.style.left = `${e.clientX}px`;
        elements.skillTooltip.style.top = `${e.clientY + 25}px`;
      });
    });
  }

  // 7. EXPERIENCE TABS
  function initExperienceTabs() {
    if (!elements.experienceTabsContainer) return;
    const tabs = elements.experienceTabsContainer.querySelectorAll(".experience__tab-btn");
    const panels = elements.experiencePanelContainer.querySelectorAll(".experience__panel");
    elements.experienceTabsContainer.addEventListener("click", (e) => {
      const clickedTab = e.target.closest(".experience__tab-btn");
      if (!clickedTab) return;
      tabs.forEach((tab) => tab.classList.remove("active"));
      clickedTab.classList.add("active");
      const targetPanelId = clickedTab.dataset.tab;
      panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === targetPanelId));
    });
  }

  // 8. EDUCATION ACCORDION
  function initEducationAccordion() {
    if (!elements.educationAccordion) return;
    elements.educationAccordion.addEventListener("click", (e) => {
      const header = e.target.closest(".education__header");
      if (header) header.parentElement.classList.toggle("active");
    });
  }

  // 9. SMART RESPONSIVE "SHOW MORE" FUNCTIONALITY
  function initSmartShowMore(buttonSelector, gridSelector, itemSelector) {
    const button = document.querySelector(buttonSelector);
    const grid = document.querySelector(gridSelector);
    if (!button || !grid) return;
    const items = grid.querySelectorAll(itemSelector);
    button.setAttribute("data-state", "less");
    const updateVisibility = () => {
      const state = button.getAttribute("data-state");
      const limit = window.innerWidth < 768 ? 2 : 3;
      if (items.length <= limit) {
        button.style.display = "none";
        return;
      } else {
        button.style.display = "inline-flex";
      }
      items.forEach((item, index) => {
        if (state === "less") {
          if (index >= limit) {
            item.classList.add("hidden");
          } else {
            item.classList.remove("hidden");
          }
        } else {
          item.classList.remove("hidden");
        }
      });
      button.textContent = state === "less" ? "Show More" : "Show Less";
    };
    button.addEventListener("click", () => {
      const currentState = button.getAttribute("data-state");
      const newState = currentState === "less" ? "more" : "less";
      button.setAttribute("data-state", newState);
      updateVisibility();
    });
    window.addEventListener("resize", updateVisibility);
    updateVisibility();
  }

  // 10. CERTIFICATE MODAL
  function initCertificateModal() {
    document.body.addEventListener("click", (e) => {
      const card = e.target.closest(".cert-card");
      if (card) {
        const imageUrl = card.dataset.certImage;
        if (imageUrl && imageUrl !== "#") {
          elements.certModalImage.src = imageUrl;
          elements.certModal.classList.add("active");
        }
      }
    });
    const closeModal = () => elements.certModal.classList.remove("active");
    elements.certModalClose.addEventListener("click", closeModal);
    elements.certModal.addEventListener("click", (e) => {
      if (e.target === elements.certModal) closeModal();
    });
  }

  // 11. HIRE ME MODAL & FORMSPREE SUBMISSION
  function initHireMeModal() {
    const formspreeEndpoint = "https://formspree.io/f/xqabpdrz";
    const modal = elements.hireMeModal;
    const form = elements.contactForm;
    if (!modal || !form) return;
    const serviceInput = form.querySelector("#service-input");
    const options = modal.querySelectorAll(".modal__option");
    const errorMsg = modal.querySelector("#modal-error");
    const sendBtn = form.querySelector("#send-email-btn");
    let selectedService = null;
    const openHireModal = () => modal.classList.add("active");
    const closeHireModal = (reset = true) => {
      modal.classList.remove("active");
      if (reset) {
        form.reset();
        options.forEach((opt) => opt.classList.remove("selected"));
        selectedService = null;
        errorMsg.textContent = "";
      }
    };
    const openThanksModal = () => elements.thankYouModal.classList.add("active");
    const closeThanksModal = () => elements.thankYouModal.classList.remove("active");
    elements.hireMeBtn.addEventListener("click", openHireModal);
    elements.hireMeClose.addEventListener("click", () => closeHireModal());
    elements.thanksOkBtn.addEventListener("click", closeThanksModal);
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected");
        selectedService = option.dataset.service;
        serviceInput.value = selectedService;
      });
    });
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!selectedService) {
        errorMsg.textContent = "Please select a service.";
        return;
      }
      sendBtn.disabled = true;
      sendBtn.textContent = "Sending...";
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      data.message = `${data.name} wants to hire you for a ${data.service}. Their contact is ${data.contact}.`;
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { Accept: "application/json" },
        });
        if (response.ok) {
          closeHireModal();
          openThanksModal();
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        errorMsg.textContent = "Something went wrong. Please email me directly.";
      } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = "Contact Me";
      }
    });
  }

  // 12. SCROLL REVEAL
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.revealElements.forEach((el) => observer.observe(el));
  }

  // Run Initialization
  initialize();
});