// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Fade-in on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Footer year
const yr = document.getElementById("year");
if (yr) yr.textContent = new Date().getFullYear();

// Sortable tables (used on The Croissant Index)
document.querySelectorAll("table[data-sortable]").forEach((table) => {
  const headers = table.querySelectorAll("th");
  headers.forEach((th, i) => {
    th.addEventListener("click", () => {
      const dir = th.dataset.dir === "desc" ? "asc" : "desc";
      headers.forEach((h) => delete h.dataset.dir);
      th.dataset.dir = dir;
      const rows = [...table.tBodies[0].rows];
      rows.sort((a, b) => {
        const av = a.cells[i].dataset.value ?? a.cells[i].textContent.trim();
        const bv = b.cells[i].dataset.value ?? b.cells[i].textContent.trim();
        const an = parseFloat(av), bn = parseFloat(bv);
        const cmp = !isNaN(an) && !isNaN(bn) ? an - bn : av.localeCompare(bv);
        return dir === "asc" ? cmp : -cmp;
      });
      rows.forEach((r) => table.tBodies[0].appendChild(r));
    });
  });
});
