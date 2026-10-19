const themeButton = document.getElementById("themeBtn");

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "Light Mode";
} else {
  themeButton.textContent = "Dark Mode";
}

// Change and save the theme when the button is clicked
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "Dark Mode";
  }
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Thank you for contacting me!");
  contactForm.reset();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.getElementById("empty-message");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.category;
    let visibleProjects = 0;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach(function (card) {
      const projectCategory = card.dataset.category;

      if (
        selectedCategory === "all" ||
        selectedCategory === projectCategory
      ) {
        card.classList.remove("hidden");
        visibleProjects++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (visibleProjects === 0) {
      emptyMessage.classList.remove("hidden");
    } else {
      emptyMessage.classList.add("hidden");
    }
  });
});