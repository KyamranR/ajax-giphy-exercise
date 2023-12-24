console.log("Let's get this party started!");

const $gifDisplay = $("#gif-display");
const $input = $("#input");
const $searchBtn = $("#search-btn");
const $removeBtn = $("#remove-btn");

function addGIf(res) {
  let results = res.data.length;
  if (results) {
    let randomIndex = Math.floor(Math.random() * results);
    let $newDiv = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIndex].images.original.url,
      class: "w-100",
    });
    $newDiv.append($newGif);
    $gifDisplay.append($newDiv);
  }
}

$("form").on("submit", async function (event) {
  event.preventDefault();

  let searchTerm = $input.val();
  $input.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { q: searchTerm, api_key: "TeF1pLW5qxMpOsSDiNByLdYXTQpAPyHE" },
  });
  addGIf(response.data);
});

$removeBtn.on("click", function () {
  $gifDisplay.empty();
});
