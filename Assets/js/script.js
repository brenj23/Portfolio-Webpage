document.addEventListener("DOMContentLoaded", () => {
  // Navigation
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  // Contact Form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
        contactForm.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.querySelector(".typed-text");
  const textArray = ["Bren Broussard"];
  let textIndex = 0;
  let charIndex = 0;
  let currentText = "";
  let typingSpeed = 100;

  function type() {
    if (charIndex < textArray[textIndex].length) {
      currentText += textArray[textIndex].charAt(charIndex);
      typedText.textContent = currentText;
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, typingSpeed + 1000);
    }
  }

  // function erase() {
  //     if (charIndex > 0) {
  //         currentText = textArray[textIndex].substring(0, charIndex - 1);
  //         typedText.textContent = currentText;
  //         charIndex--;
  //         setTimeout(erase, typingSpeed);
  //     } else {
  //         textIndex++;
  //         if (textIndex >= textArray.length) {
  //             textIndex = 0;
  //         }
  //         setTimeout(type, typingSpeed);
  //     }
  // }

  type();
});

// Project filtering
const filterButtons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    projects.forEach((project) => {
      if (
        filter === "all" ||
        project.getAttribute("data-category") === filter
      ) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    });
  });
});

// Form validation and EmailJS integration
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // EmailJS integration
    emailjs.send('service_spphbld', 'template_Bren', {
        name: name,
        email: email,
        message: message
    }).then((response) => {
        alert('Message sent successfully!');
        contactForm.reset();
    }, (error) => {
        alert('Failed to send message. Please try again later.');
    });
});
