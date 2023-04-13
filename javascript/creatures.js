function showAllCreatures(response) {
  let creatures = response.data.data.food;
  creatures.forEach((creature) => {
    let nameElement = document.querySelector(".creature-name");
    nameElement.innerHTML = creature.name;
    let numberElement = document.querySelector(".creature-number");
    numberElement.innerHTML = creature.id;
    let descriptionElement = document.querySelector(".creature-description");
    descriptionElement.innerHTML = creature.description;
    let locationElement = document.querySelector(".creature-location");
    locationElement.innerHTML = creature.common_locations;
    let dropsElement = document.querySelector(".creature-drops");
    dropsElement.innerHTML = creature.drops;
    let creatureImageElement = document.querySelector(".creature-image");
    creatureImageElement.setAttribute(
      "src",
      `https://botw-compendium.herokuapp.com/api/v2/entry/${creature.name}/image`
    );
    console.log(creature);
  });
}

let category = "creatures";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllCreatures);
