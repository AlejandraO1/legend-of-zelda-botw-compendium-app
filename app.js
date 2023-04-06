function displayItemEntry(response) {
  let nameElement = document.querySelector("#name");
  nameElement.innerHTML = response.data.data.name;
  let numberElement = document.querySelector("#number");
  numberElement.innerHTML = response.data.data.id;
  let categoryElement = document.querySelector("#category");
  categoryElement.innerHTML = response.data.data.category;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.data.description;
  let locationElement = document.querySelector("#location");
  locationElement.innerHTML = response.data.data.common_locations;
  let dropsElement = document.querySelector("#drops");
  dropsElement.innerHTML = response.data.data.drops;
  let itemImageElement = document.querySelector("#item-image");
  itemImageElement.setAttribute(
    "src",
    `https://botw-compendium.herokuapp.com/api/v2/entry/${response.data.data.name}/image`
  );
}

let entry = "Lord of the Mountain";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;

axios.get(apiUrl).then(displayItemEntry);
