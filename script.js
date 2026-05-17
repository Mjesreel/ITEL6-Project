const journalEntries = [
  {
    slug: "offensive-security-intro",
    title: "Offensive Security Intro",
    intro: "The attacker's mindset—thinking asymmetrically to find what defenders overlook.",
    tag: "Offensive",
  },
  {
    slug: "defensive-security-intro",
    title: "Defensive Security Intro",
    intro: "Building an ecosystem of defense through proactive monitoring and intelligence.",
    tag: "Defensive",
  },
  {
    slug: "search-skills",
    title: "Search Skills",
    intro: "Mastering the art of extracting intelligence from open sources.",
    tag: "OSINT",
  },
  {
    slug: "linux-fundamentals-part-1",
    title: "Linux Fundamentals Part 1",
    intro: "Navigating the command line—the foundation of both attack and defense.",
    tag: "Linux",
  },
  {
    slug: "linux-fundamentals-part-2",
    title: "Linux Fundamentals Part 2",
    intro: "Deeper into file systems, processes, and system administration.",
    tag: "Linux",
  },
  {
    slug: "linux-fundamentals-part-3",
    title: "Linux Fundamentals Part 3",
    intro: "Advanced shell scripting, automation, and security hardening.",
    tag: "Linux",
  },
  {
    slug: "common-attacks",
    title: "Common Attacks",
    intro: "Understanding how attacks occur to build better defenses.",
    tag: "Attacks",
  },
  {
    slug: "introduction-to-devsecops",
    title: "Introduction to DevSecOps",
    intro: "Shifting security left—embedding protection into the development lifecycle.",
    tag: "DevSecOps",
  },
  {
    slug: "intro-to-pipeline-automation",
    title: "Intro to Pipeline Automation",
    intro: "CI/CD pipelines can both enhance and endanger security.",
    tag: "Automation",
  },
  {
    slug: "cherryblossom",
    title: "CherryBlossom",
    intro: "Weak cryptography leads to full compromise.",
    tag: "Cryptography",
  },
  {
    slug: "aster",
    title: "Aster",
    intro: "Securing data transmission through proper encryption practices.",
    tag: "Encryption",
  },
  {
    slug: "the-server-from-hell",
    title: "The Server From Hell",
    intro: "Chaos teaches the value of documentation and configuration management.",
    tag: "Configuration",
  },
  {
    slug: "metamorphosis",
    title: "Metamorphosis",
    intro: "Systems evolve under layered obfuscation—persistence is key.",
    tag: "Advanced",
  },
  {
    slug: "sweethtooth-inc",
    title: "Sweethtooth Inc.",
    intro: "Network segmentation and access control in enterprise environments.",
    tag: "Enterprise",
  },
  {
    slug: "0day",
    title: "0day",
    intro: "The lifecycle of zero-day vulnerabilities and exploit chains.",
    tag: "Exploits",
  },
  {
    slug: "toc2",
    title: "toc2",
    intro: "Multi-stage challenges under time pressure build adaptability.",
    tag: "CTF",
  },
  {
    slug: "pylon",
    title: "pyLon",
    intro: "Python vulnerabilities and the dangers of insecure serialization.",
    tag: "Python",
  },
  {
    slug: "harder",
    title: "harder",
    intro: "Comprehensive pentesting requires clear reporting and risk prioritization.",
    tag: "Pentest",
  },
  {
    slug: "biteme",
    title: "biteme",
    intro: "Intrusion detection and response under stress.",
    tag: "Detection",
  },
  {
    slug: "battery",
    title: "battery",
    intro: "Patience and precision—the human factor of cybersecurity.",
    tag: "CTF",
  },
  {
    slug: "zeno",
    title: "Zeno",
    intro: "Stoic patience and iterative troubleshooting.",
    tag: "Philosophy",
  },
  {
    slug: "youre-in-a-cave",
    title: "You're in a Cave",
    intro: "Narrative-based learning enhances technical understanding.",
    tag: "Narrative",
  },
  {
    slug: "year-of-the-rabbit",
    title: "Year of the Rabbit",
    intro: "Diverse vulnerability classes across themed challenges.",
    tag: "CTF",
  },
  {
    slug: "year-of-the-pig",
    title: "Year of the Pig",
    intro: "Understanding attack surfaces through creative scenarios.",
    tag: "CTF",
  },
  {
    slug: "year-of-the-owl",
    title: "Year of the Owl",
    intro: "Multi-vector attacks require comprehensive defense strategies.",
    tag: "CTF",
  },
  {
    slug: "year-of-the-jellyfish",
    title: "Year of the Jellyfish",
    intro: "Themed challenges reveal hidden vulnerability patterns.",
    tag: "CTF",
  },
  {
    slug: "year-of-the-fox",
    title: "Year of the Fox",
    intro: "Cunning and creativity in exploitation techniques.",
    tag: "CTF",
  },
  {
    slug: "year-of-the-dog",
    title: "Year of the Dog",
    intro: "Loyalty to methodology yields consistent results.",
    tag: "CTF",
  },
  {
    slug: "willow",
    title: "Willow",
    intro: "Subtle privilege escalation through misconfigurations.",
    tag: "Privilege Escalation",
  },
  {
    slug: "wazuh",
    title: "Wazuh",
    intro: "SIEM setup and real-time threat monitoring.",
    tag: "SIEM",
  },
  {
    slug: "watcher",
    title: "Watcher",
    intro: "Log-based intrusion detection and system hardening.",
    tag: "Monitoring",
  },
  {
    slug: "uranium-ctf",
    title: "Uranium CTF",
    intro: "Cryptography and controlled data exfiltration.",
    tag: "CTF",
  },
  {
    slug: "theseus",
    title: "Theseus",
    intro: "Clarity of thought is the ultimate pentesting skill.",
    tag: "Methodology",
  },
  {
    slug: "retro",
    title: "Retro",
    intro: "Legacy systems introduce unique exploitable weaknesses.",
    tag: "Legacy",
  },
  {
    slug: "sea-surfer",
    title: "Sea Surfer",
    intro: "Packet analysis, wireless attacks, and lateral pivoting.",
    tag: "Network",
  },
  {
    slug: "racetrack-bank",
    title: "Racetrack Bank",
    intro: "Web application and database security in financial systems.",
    tag: "Web Security",
  },
  {
    slug: "ra",
    title: "Ra",
    intro: "Active Directory exploitation and Windows privilege escalation.",
    tag: "Active Directory",
  },
  {
    slug: "iron-corp",
    title: "Iron Corp",
    intro: "Corporate network enumeration and privilege abuse prevention.",
    tag: "Corporate",
  },
  {
    slug: "internal",
    title: "Internal",
    intro: "Network segmentation and internal privilege escalation.",
    tag: "Internal",
  },
  {
    slug: "fusion-corp",
    title: "Fusion Corp",
    intro: "Exploit development and lateral movement in enterprises.",
    tag: "Enterprise",
  },
  {
    slug: "different-ctf",
    title: "Different CTF",
    intro: "Creative vulnerability chaining unlocks complex systems.",
    tag: "CTF",
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    intro: "Red team mindset—stealth and strategy on internal networks.",
    tag: "Red Team",
  },
  {
    slug: "crocc-crew",
    title: "Crocc Crew",
    intro: "Backdoor detection and remediation strategies.",
    tag: "Backdoors",
  },
  {
    slug: "carpe-diem-1",
    title: "Carpe Diem 1",
    intro: "Incident response under ransomware stress conditions.",
    tag: "Incident Response",
  },
  {
    slug: "anonymous-playground",
    title: "Anonymous Playground",
    intro: "Anonymity, ethics, and hacker subculture philosophies.",
    tag: "Ethics",
  },
]

// Initialize Page
function initializePage() {
  renderJournalEntries(journalEntries)
  setupEventListeners()
  updateYear()
}

// Render Journal Entries
function renderJournalEntries(entries) {
  const journalGrid = document.getElementById("journalGrid")
  if (!journalGrid) return

  journalGrid.innerHTML = ''

  entries.forEach((entry) => {
    const card = document.createElement("a")
    card.href = `entries/${entry.slug}.html`
    card.className = "journal-card"
    card.setAttribute("data-tag", entry.tag)
    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p class="intro">${entry.intro}</p>
      <span class="tag">${entry.tag}</span>
      <div class="read-more">
        <span>Read full entry</span>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    `
    journalGrid.appendChild(card)

    // Observe for animation
    observer.observe(card)
  })
}

// Filter Functionality
function setupFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Filter entries
      const filter = btn.getAttribute("data-filter")
      const filteredEntries =
        filter === "all"
          ? journalEntries
          : journalEntries.filter((entry) => entry.tag === filter)

      renderJournalEntries(filteredEntries)
    })
  })
}

// Setup Event Listeners
function setupEventListeners() {
  // Header Scroll Effect
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle")
  const navLinks = document.getElementById("navLinks")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        menuToggle.classList.remove("active")
      })
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active")
        menuToggle.classList.remove("active")
      }
    })
  }

  // Filter buttons
  setupFilterButtons()
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Update Year in Footer
function updateYear() {
  const yearElement = document.getElementById("year")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage)
} else {
  initializePage()
}
