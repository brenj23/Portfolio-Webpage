document.addEventListener("DOMContentLoaded", () => {
    // Project filtering
    const filterButtons = document.querySelectorAll(".filters button");
    const projects = document.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            projects.forEach((project) => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";  // Changed to 'block' for better compatibility
                } else {
                    project.style.display = "none";
                }
            });
        });
    });

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
