const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

function scrollTo(id) {
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
document.querySelectorAll(".js-link-button").forEach((element) => {
  element.addEventListener("click", () => {
    let scrollToId = element.dataset.scroll;
    scrollTo(scrollToId);
  });
});

document.querySelectorAll(".js-navbar-buttons").forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  });
});
