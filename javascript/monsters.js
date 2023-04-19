function showAllMonsters(response) {
  const monsters = response.data.data;
  monsters.sort((a, b) => a.id - b.id);
  let container = document.querySelector("#monster-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "monster-container";
    document.body.appendChild(container);
  }

  monsters.forEach((monster) => {
    let monsterList = document.createElement("ul");
    let nameItem = document.createElement("li");
    nameItem.innerHTML = `<h5>${monster.name}</h5>`;
    monsterList.appendChild(nameItem);

    let numberItem = document.createElement("li");
    numberItem.innerHTML = `#${monster.id}`;
    monsterList.appendChild(numberItem);

    let descriptionItem = document.createElement("li");
    descriptionItem.innerHTML = ` <strong>Description: </strong>${monster.description}`;
    monsterList.appendChild(descriptionItem);

    let locationItem = document.createElement("li");
    locationItem.innerHTML = `<strong>Location: </strong>${monster.common_locations}`;
    monsterList.appendChild(locationItem);

    let dropsItem = document.createElement("li");
    dropsItem.innerHTML = `<strong>Drops: </strong>${monster.drops}`;
    monsterList.appendChild(dropsItem);

    let imageItem = document.createElement("li");
    let image = document.createElement("img");
    image.src = monster.image;
    imageItem.appendChild(image);
    monsterList.appendChild(imageItem);

    container.appendChild(monsterList);
  });
}

let category = "monsters";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllMonsters);
