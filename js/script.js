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


// Chatbott
const chatBtn = document.getElementById("chat-button");
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");
const faqButtons = document.querySelectorAll(".faq-question");


chatBtn.onclick = () => {
  const isOpen = chatBox.style.display === "flex";

  chatBox.style.display = isOpen ? "none" : "flex";

  chatBtn.classList.toggle("open", !isOpen);
};


faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const question = btn.textContent.trim();
    const answer = btn.dataset.answer;

    // Message utilisateur
    chatMessages.innerHTML += `<div class="user-msg">${question}</div>`;

    // Réponse bot
    setTimeout(() => {
      chatMessages.innerHTML += `<div class="bot-msg">${answer}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 200);

  });
});