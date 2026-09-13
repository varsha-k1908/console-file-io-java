const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    const code = button.closest(".code-card").querySelector("pre code").innerText;
    try {
      await navigator.clipboard.writeText(code);
      const oldText = button.textContent;
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = oldText, 1200);
    } catch {
      button.textContent = "Select & copy";
      setTimeout(() => button.textContent = "Copy", 1200);
    }
  });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
