document.querySelectorAll(".js-contacts-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (
      document
        .querySelector(".js-contacts-container")
        .classList.contains("show")
    ) {
      document.querySelector(".js-contacts-container").classList.remove("show");
    } else {
      document.querySelector(".js-contacts-container").classList.add("show");
    }
  });
});


