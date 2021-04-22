//Your Code
const container = document.getElementsByClassName("container")[0];
const panels = document.querySelectorAll(".panel");
container.addEventListener("mouseover", (e) => {
  removeActiveClasses();
  let panel = e.target.closest(".panel");
  if (!panel) return;
  panel.classList.add("active");
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
