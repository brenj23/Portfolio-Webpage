document.addEventListener("DOMContentLoaded", () => {
    // Project filtering
    const filterButtons = document.querySelectorAll(".filters button");
    const projects = document.querySelectorAll(".project-card");

    const applyFilter = (filter) => {
        projects.forEach((project) => {
            if (filter === "all" || project.getAttribute("data-category") === filter) {
                project.style.display = "block";
                project.style.opacity = 1;
            } else {
                project.style.opacity = 0;
                setTimeout(() => {
                    project.style.display = "none";
                }, 300); // Duration of the opacity transition
            }
        });
    };

    const setActiveButton = (button) => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            applyFilter(filter);
            setActiveButton(button);
        });
    });

    // Apply default filter (show all projects) on page load
    applyFilter("all");
    setActiveButton(document.querySelector('.filters button[data-filter="all"]'));

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
