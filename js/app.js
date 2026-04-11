// Strip /index.html from URL if it appears (GitHub Pages quirk)
if (window.location.pathname.endsWith("/index.html")) {
  window.history.replaceState(
    null,
    "",
    window.location.pathname.replace("/index.html", "/") +
      window.location.search +
      window.location.hash,
  );
}

// Form Submission Success Handler
(function () {
  // Inject success card styles once
  const style = document.createElement("style");
  style.textContent = `
        #form-success-overlay {
            position: fixed; inset: 0; z-index: 9999;
            background: rgba(0,0,0,0.6); backdrop-filter: blur(6px);
            display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
        }
        #form-success-overlay.visible {
            opacity: 1; pointer-events: all;
        }
        #form-success-card {
            background: #0d1b2a; border: 1px solid rgba(255,255,255,0.08);
            padding: 3rem 2.5rem; max-width: 420px; width: 90%;
            text-align: center;
            transform: translateY(24px);
            transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        #form-success-overlay.visible #form-success-card {
            transform: translateY(0);
        }
        #form-success-card .success-icon {
            width: 56px; height: 56px; border-radius: 50%;
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 1.5rem;
        }
        #form-success-card .success-icon span {
            font-size: 28px; color: #4ade80;
        }
        #form-success-card h3 {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.1rem; font-weight: 900;
            letter-spacing: 0.2em; text-transform: uppercase;
            color: #fff; margin-bottom: 0.75rem;
        }
        #form-success-card p {
            font-family: 'Inter', sans-serif;
            font-size: 0.78rem; color: rgba(255,255,255,0.5);
            line-height: 1.7; margin-bottom: 2rem;
        }
        #form-success-close {
            display: inline-block; padding: 0.85rem 2.5rem;
            background: #fff; color: #0d1b2a;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.65rem; font-weight: 900;
            letter-spacing: 0.3em; text-transform: uppercase;
            border: none; cursor: pointer;
            transition: background 0.2s, color 0.2s;
        }
        #form-success-close:hover { background: #4ade80; color: #0d1b2a; }
    `;
  document.head.appendChild(style);

  // Create overlay once
  const overlay = document.createElement("div");
  overlay.id = "form-success-overlay";
  overlay.innerHTML = `
        <div id="form-success-card">
            <div class="success-icon">
                <span class="material-symbols-outlined">check_circle</span>
            </div>
            <h3>Message Sent</h3>
            <p>Your inquiry has been received.<br>I'll get back to you within 24 hours.</p>
            <button id="form-success-close">Done</button>
        </div>
    `;
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.id === "form-success-close") {
      overlay.classList.remove("visible");
    }
  });

  function showSuccess() {
    overlay.classList.add("visible");
  }

  // Intercept all Formspree forms
  document.addEventListener("submit", async (e) => {
    const form = e.target;
    if (!form.action || !form.action.includes("formspree.io")) return;
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const originalHTML = btn ? btn.innerHTML : null;
    if (btn) {
      btn.disabled = true;
      btn.innerHTML =
        '<span style="opacity:0.6;font-size:0.7rem;letter-spacing:0.2em">SENDING...</span>';
    }

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        showSuccess();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection.");
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
      }
    }
  });
})();

// Main Application Logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("UJJWAL Portfolio Initialized");

  // Smooth Scroll Implementation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Simple Theme Toggle
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };
  window.toggleTheme = toggleTheme;

  // Contact Button Visual Response
  const contactBtn = document.querySelector("header button");
  contactBtn?.addEventListener("mouseenter", () => {
    gsap.to(contactBtn, {
      letterSpacing: "0.2rem",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  contactBtn?.addEventListener("mouseleave", () => {
    gsap.to(contactBtn, {
      letterSpacing: "0.1rem",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Terminal Logic - Interactive Hero Component
  const termInput = document.getElementById("terminal-input");
  const termOutput = document.getElementById("terminal-output");
  const termBody = document.getElementById("terminal-body");

  if (termInput && termOutput && termBody) {
    const commands = {
      help: "Available commands: [bio], [stack], [philosophy], [contact], [clear]",
      bio: "UJJWAL: Senior SEO Specialist & Full-Stack Developer based in Nepal. Expertise in search engine dominance and technical infrastructure since 2018.",
      stack:
        "V2.0: Next.js, SEO Strategy, AEO/GEO, Python, Tailwind CSS, GSAP, Database Architecture.",
      philosophy:
        '"Data-driven visibility is the foundation of digital dominance. Code must be both high-performance and search-discoverable."',
      contact:
        "EMAIL: ujr.work@gmail.com | WHATSAPP: +977 9826304766 | SITE: ujjwalrupakheti.com.np",
      clear: "CLEAR",
    };

    termInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const query = termInput.value.toLowerCase().trim();

        // Add user query to output
        const userLine = document.createElement("div");
        userLine.innerHTML = `<span class="text-emerald-400 font-bold">> ${query}</span>`;
        termOutput.appendChild(userLine);

        // Handle commands
        if (query === "clear") {
          termOutput.innerHTML = "";
        } else if (commands[query]) {
          const response = document.createElement("div");
          response.className =
            "text-inverse-on-surface opacity-80 leading-relaxed";
          response.innerText = commands[query];
          termOutput.appendChild(response);
        } else if (query !== "") {
          const error = document.createElement("div");
          error.className = "text-red-400 opacity-80";
          error.innerText = `Command not recognized: ${query}. Try 'help'.`;
          termOutput.appendChild(error);
        }

        // Reset input and scroll
        termInput.value = "";
        termBody.scrollTo({
          top: termBody.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  }

  // Hero Blueprint Interactivity
  const blueprint = document.getElementById("hero-blueprint");
  const crossHairV = document.getElementById("crosshair-v");
  const crossHairH = document.getElementById("crosshair-h");
  const coordX = document.getElementById("coord-x");
  const coordY = document.getElementById("coord-y");
  const heroHeadline = document.getElementById("hero-headline");

  if (blueprint && crossHairV && crossHairH) {
    blueprint.addEventListener("mousemove", (e) => {
      const rect = blueprint.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update Crosshairs
      gsap.to(crossHairV, { x: x, duration: 0.1, ease: "power2.out" });
      gsap.to(crossHairH, { y: y, duration: 0.1, ease: "power2.out" });

      // Update Coordinates
      coordX.innerText = `X: ${(x / rect.width).toFixed(3)}`;
      coordY.innerText = `Y: ${(y / rect.height).toFixed(3)}`;

      // Interactive Headline Tilt
      const moveX = (x / rect.width - 0.5) * 20;
      const moveY = (y / rect.height - 0.5) * 20;
      gsap.to(heroHeadline, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }

  // Hamburger Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuSpans = menuToggle?.querySelectorAll("span");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  let menuOpen = false;

  const openMenu = () => {
    menuOpen = true;
    mobileMenu.style.transform = "translateX(0)";
    document.body.classList.add("overflow-hidden");
    if (menuSpans && menuSpans.length >= 3) {
      menuSpans[0].style.transform = "rotate(45deg) translate(4px, 4px)";
      menuSpans[1].style.opacity = "0";
      menuSpans[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
    }
  };

  const closeMenu = () => {
    menuOpen = false;
    mobileMenu.style.transform = "translateX(100%)";
    document.body.classList.remove("overflow-hidden");
    if (menuSpans && menuSpans.length >= 3) {
      menuSpans[0].style.transform = "";
      menuSpans[1].style.opacity = "";
      menuSpans[2].style.transform = "";
    }
  };

  menuToggle?.addEventListener("click", () => {
    if (menuOpen) closeMenu();
    else openMenu();
  });

  // Close menu when clicking any nav link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
