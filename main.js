// SLIDE ANIMATION EFFECTS SECTION //

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  const skills = document.querySelectorAll(".skill img");
  const projects = document.querySelectorAll(".project img");

  skills.forEach((skill) => {
    if (isInViewport(skill.parentElement)) {
      skill.parentElement.classList.add("in-view");
    } else {
      skill.parentElement.classList.remove("in-view");
    }
  });

  projects.forEach((project) => {
    if (isInViewport(project.parentElement)) {
      project.parentElement.classList.add("in-view");
    } else {
      project.parentElement.classList.remove("in-view");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);

window.addEventListener("DOMContentLoaded", animateOnScroll);

// CONTACT SECTION //

emailjs.init("y_-vBFNJmLfEnSfe0");

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_vyvw9yv", "template_egi4g2n", {
      from_name: name,
      reply_to: email,
      message: message,
    })
    .then(
      function (response) {
        document.getElementById("response-message").innerHTML =
          "Your message has been sent successfully!";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      },
      function (error) {
        console.error("Failed to send email. Error:", error);

        document.getElementById("response-message").innerHTML =
          "Failed to send email. Please try again later.";
      }
    );
}
