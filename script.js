const linkables = document.querySelectorAll(".linkables");

linkables.forEach(link => {
  link.addEventListener("click", (event) => {
    link.textContent = "Thanks for checking out! 😎";
  });
});
