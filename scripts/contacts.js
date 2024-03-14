document.querySelectorAll(".js-contacts-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
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

document.addEventListener("click", (event) => {
  const contactsContainer = document.querySelector(".js-contacts-container");
  if (
    event.target !== contactsContainer &&
    !contactsContainer.contains(event.target)
  ) {
    contactsContainer.classList.remove("show");
  }
});
