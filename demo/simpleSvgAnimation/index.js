const svg = document.getElementById("triangles");

svg.addEventListener("click", (e) => {
  const colors = ["red", "blue", "green", "purple", "pink", "orange"];
  const rando = () => colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.cssText = `
  --dark-color: ${rando()};
  --light-color: ${rando()};
  `;
});
