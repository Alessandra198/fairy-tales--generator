function displayTale(response) {
  new Typewriter("#tale", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}
function generateTale(event) {
  event.preventDefault();
  let instruction = document.querySelector("#input-topic");
  getApi(instruction.value);
}

function getApi(topic) {
  let apiKey = "cb4440cc8b49o2e10d5a63f3ecftcafe";
  let context =
    "You are a kids' fairy tale expert and love to write short fairy tales. Write a short fairy tale, about 10 lines, in basic HTML inside a <p>. Make sure to follow the user instructions. Add a title at the top and sign the tale at the end inside a <small> and <strong> element with 'Shecodes AI'";
  let prompt = `User instructios: Generate a Fairy Tale for kids about ${topic}`;
  let apiURl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let taleElement = document.querySelector("#tale");
  taleElement.classList.remove("hidden");
  taleElement.innerHTML = `⏳ Generating a fairy tale about ${topic} for you...`;
  axios.get(apiURl).then(displayTale);
}

let formElement = document.querySelector("#tale-generator-form");
formElement.addEventListener("submit", generateTale);
