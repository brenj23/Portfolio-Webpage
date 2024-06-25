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

  function erase() {
      if (charIndex > 0) {
          currentText = textArray[textIndex].substring(0, charIndex - 1);
          typedText.textContent = currentText;
          charIndex--;
          setTimeout(erase, typingSpeed);
      } else {
          textIndex++;
          if (textIndex >= textArray.length) {
              textIndex = 0;
          }
          setTimeout(type, typingSpeed);
      }
  }

  type();
});

