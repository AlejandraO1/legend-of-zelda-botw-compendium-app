function showAllTreasures(response) {
  const treasures = response.data.data;
  let container = document.querySelector("#treasure-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "treasure-container";
    document.body.appendChild(container);
  }

  treasures.forEach((treasure) => {
    let treasureList = document.createElement("ul");
    let nameItem = document.createElement("li");
    nameItem.innerHTML = `<strong>Name: </strong> <h5>${treasure.name}</h5>`;
    treasureList.appendChild(nameItem);

    let numberItem = document.createElement("li");
    numberItem.innerHTML = `<strong>ID: </strong>${treasure.id}`;
    treasureList.appendChild(numberItem);

    let descriptionItem = document.createElement("li");
    descriptionItem.innerHTML = ` <strong>Description: </strong>${treasure.description}`;
    treasureList.appendChild(descriptionItem);

    let locationItem = document.createElement("li");
    locationItem.innerHTML = `<strong>Location: </strong>${treasure.common_locations}`;
    treasureList.appendChild(locationItem);

    let dropsItem = document.createElement("li");
    dropsItem.innerHTML = `<strong>Drops: </strong>${treasure.drops}`;
    treasureList.appendChild(dropsItem);

    let imageItem = document.createElement("li");
    let image = document.createElement("img");
    image.src = treasure.image;
    imageItem.appendChild(image);
    treasureList.appendChild(imageItem);

    container.appendChild(treasureList);
  });
}

let category = "treasure";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllTreasures);
