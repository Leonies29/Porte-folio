const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.addEventListener("click", (e) => {
  if (e.target?.tagName === "A" && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("year").textContent = String(new Date().getFullYear());

const revealEls = Array.from(document.querySelectorAll(".reveal"));
const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { root: null, threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  for (const el of revealEls) io.observe(el);
} else {
  for (const el of revealEls) el.classList.add("is-visible");
}

//chatbot

window.addEventListener("load", () => {
    addBotMessage("Bonjour");
    setTimeout(() => {
        addBotMessage("Comment puis-je t’aider ?");
        showQuestions();
    }, 400);
});


function showQuestions() {
    const choices = document.getElementById("choices");

    choices.innerHTML = `
        <button class="question-bubble" data-value="contact">Contact</button>
        <button class="question-bubble" data-value="experience">Expérience</button>
        <button class="question-bubble" data-value="questions">Questions</button>
        <button class="question-bubble" data-value="bonjour">Bonjour</button>
    `;

    document.querySelectorAll(".question-bubble").forEach(btn => {
        btn.addEventListener("click", () => handleUserClick(btn.dataset.value));
    });
}

function handleUserClick(text) {

    
    addUserMessage(text);

    let reply = "";

    if (text.includes("contact"))
    reply = `Travailler avec moi ? <a href="mailto:ton.com📩 M'écrire</a>`;

    if (text.includes("experience")) 
        reply = `Où me trouver : <a href="https://www.linkedin.com/in/leonie-schmit-7248inkedIn</a>`;

    if (text.includes("questions")) 
        reply = `
            Tu peux m'envoyer un mail ou me contacter sur LinkedIn :<br>
            <a href="mailto:leonie.schmit@esail</a> —
            <a href="https://www.linkedineonie-schmit-7248b5259🔗 LinkedIn</a>
        `;

    if (text.includes("bonjour")) 
        reply = "Bonjour ! Comment puis‑je t’aider ?";
        
        setTimeout(() => {
            addBotMessage(reply);
        }, 300);
    }


function addBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "bot-msg";
    msg.innerHTML = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "user-msg";
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}