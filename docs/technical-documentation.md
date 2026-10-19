The Projects section contains category buttons and project cards. Each project card has a data-category attribute used by JavaScript for filtering.

Example:
<div class="project-card" data-category="web">

The contact form contains fields for:
- Name
- Email
- Message
It also contains a message element used to display success and error feedback.
<p id="formMessage"></p>

1. Project Filtering
The project filtering feature allows users to display projects by category.

The filter buttons contain a data-category attribute:
<button class="filter-btn" data-category="web">Web</button>

Each project card also contains a category:
<div class="project-card" data-category="web">

JavaScript compares the selected button category with the project category. Matching projects remain visible, while other projects are hidden.

The All button displays every project.

If no projects match the selected category, the following message is displayed:
No projects found.

2. Dark Mode and Local Storage
The dark mode feature uses the dark-mode CSS class.

When the user clicks the theme button, JavaScript adds or removes this class from the <body> element:
document.body.classList.toggle("dark-mode");

The selected theme is saved in the browser using localStorage:
localStorage.setItem("theme", "dark");

When the page loads, JavaScript checks whether a theme was previously saved:
const savedTheme = localStorage.getItem("theme");

If the saved theme is dark, the dark mode class is applied automatically.
3. Contact Form Validation
The contact form is validated using JavaScript before submission.

The following checks are performed:
1. The name field must not be empty.
2. The email field must not be empty.
3. The message field must not be empty.
4. The email must have a valid format.
The email is checked using this pattern:
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

If the form contains invalid information, an error message is displayed:
Please complete all fields.

or:
Please enter a valid email address.

If the form is valid, a success message is displayed:
Thank you! Your message was submitted successfully.

The form is reset after successful validation.

This form currently provides front-end validation only. It does not send messages to a real email server or database.
4. CSS Styling and Responsive Design
The website uses CSS Grid for the Projects section:
#projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

On smaller screens, the layout changes to one column:
@media (max-width: 768px) {
  #projects {
    grid-template-columns: 1fr;
  }
}

The navigation also changes to a vertical layout on small screens.
5. Animations and Transitions
CSS transitions are used to improve the user experience.

Buttons change color and move slightly when hovered:
button:hover {
  background-color: #125aa0;
  transform: translateY(-3px);
}

Project cards also move upward and receive a stronger shadow when hovered.

Project cards use a fade-in animation when they appear:
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

These animations are intentionally simple so they do not distract from the content.
6. Error Handling and User Feedback
The website provides feedback in the following situations:
- Empty contact form fields
- Invalid email address
- Successful form submission
- No projects matching a selected category
This ensures that users understand what happened and what action they should take next.