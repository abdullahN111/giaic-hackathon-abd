const toggleButton = document.getElementById("toggle-hobbies") as HTMLButtonElement;
const hobbiesSection = document.getElementById("hobbies-section") as HTMLElement;

toggleButton.addEventListener("click", () => {
  if (hobbiesSection.style.display === "none") {
    hobbiesSection.style.display = "block";
    toggleButton.textContent = "Hide Hobbies";
  } else {
    hobbiesSection.style.display = "none";
    toggleButton.textContent = "Show Hobbies";
  }
});
