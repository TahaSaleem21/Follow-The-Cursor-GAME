document.addEventListener("DOMContentLoaded", () => {
  const follower = document.getElementById("follower");

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    follower.style.left = `${mouseX - follower.offsetWidth / 2}px`;
    follower.style.top = `${mouseY - follower.offsetHeight / 2}px`;
  });
});
