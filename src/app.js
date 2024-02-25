function generateTale(event) {
  event.preventDefault();

  new Typewriter("#tale", {
    strings: "Fairy tale",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let formElement = document.querySelector("#tale-generator-form");
formElement.addEventListener("submit", generateTale);
