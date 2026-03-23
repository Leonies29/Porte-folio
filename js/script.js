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


// === CHATBOT LOGIC ===

const chatBtn = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");


chatBtn.onclick = () => {
  chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
};


chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {

    const msg = chatInput.value;
    chatMessages.innerHTML += `<div class="user-msg">${msg}</div>`;
    chatInput.value = "";

    let reply = "Merci pour ton message 😊";

    const text = msg.toLowerCase();

    if (text.includes("projet")) reply = "Tu peux voir mes projets dans la section Projets 👉 #projets";
    if (text.includes("experience")) reply = "Mes expériences sont ici 👉 #experience";
    if (text.includes("cv")) reply = "Tu peux télécharger mon CV dans la section CV 👉 #cv";
    if (text.includes("bonjour") || text.includes("salut")) reply = "Hey 👋 ! Comment puis‑je t’aider ?";
    if (text.includes("contact")) reply = "Tu peux m'écrire ici : leonie.schmit@esme.fr 💌";


    setTimeout(() => {
      chatMessages.innerHTML += `<div class="bot-msg">${reply}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 300);
  }
});