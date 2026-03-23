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


const chatbotBtn = document.getElementById("chatbot-button");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

chatbotBtn.onclick = () => {
  chatbotWindow.style.display =
    chatbotWindow.style.display === "flex" ? "none" : "flex";
};


chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatbotInput.value.trim() !== "") {
    const msg = chatbotInput.value;
    chatbotMessages.innerHTML += `<div class="user-msg">${msg}</div>`;
    chatbotInput.value = "";

    
    let reply = "Merci pour ton message 😊";

    const lower = msg.toLowerCase();
    if (lower.includes("projet")) reply = "Tu peux voir mes projets ici 👉 #projets";
    if (lower.includes("experience")) reply = "Voici mes expériences 👉 #experience";
    if (lower.includes("cv")) reply = "Télécharge mon CV ici 👉 #cv";
    if (lower.includes("bonjour") || lower.includes("salut"))
      reply = "Coucou 👋 ! Comment puis‑je t’aider ?";
    if (lower.includes("contact"))
      reply = "Tu peux me contacter : leonie.schmit@esme.fr 📧";

    setTimeout(() => {
      chatbotMessages.innerHTML += `<div class="bot-msg">${reply}</div>`;
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 300);
  }
});
