function showAllCreatures(response) {
  const creatures = response.data.data.food;
  let container = document.querySelector("#creature-container");

  creatures.forEach((creature) => {
    let creatureList = document.createElement("ul");
    let nameItem = document.createElement("li");
    nameItem.innerHTML = `<strong>Name: </strong><h5>${creature.name}</h5>`;

    creatureList.appendChild(nameItem);
    let numberItem = document.createElement("li");
    numberItem.innerHTML = `<strong>ID: </strong>${creature.id}`;
    creatureList.appendChild(numberItem);

    let descriptionItem = document.createElement("li");
    descriptionItem.innerHTML = ` <strong>Description: </strong>${creature.description}`;
    creatureList.appendChild(descriptionItem);

    let locationItem = document.createElement("li");
    locationItem.innerHTML = `<strong>Location: </strong>${creature.common_locations}`;
    creatureList.appendChild(locationItem);

    let dropsItem = document.createElement("li");
    dropsItem.innerHTML = `<strong>Drops: </strong>${creature.drops}`;
    creatureList.appendChild(dropsItem);

    let imageItem = document.createElement("li");
    let image = document.createElement("img");
    image.src = creature.image;
    imageItem.appendChild(image);
    creatureList.appendChild(imageItem);

    container.appendChild(creatureList);
  });
}

let category = "creatures";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllCreatures);
