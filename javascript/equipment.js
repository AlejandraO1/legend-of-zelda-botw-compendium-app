function showAllEquipments(response) {
  const equipments = response.data.data;
  let container = document.querySelector("#equipment-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "equipment-container";
    document.body.appendChild(container);
  }

  equipments.forEach((equipment) => {
    let equipmentList = document.createElement("ul");
    let nameItem = document.createElement("li");
    nameItem.innerHTML = `<strong>Name: </strong> <h5>${equipment.name}</h5>`;
    equipmentList.appendChild(nameItem);

    let numberItem = document.createElement("li");
    numberItem.innerHTML = `<strong>ID: </strong>${equipment.id}`;
    equipmentList.appendChild(numberItem);

    let descriptionItem = document.createElement("li");
    descriptionItem.innerHTML = ` <strong>Description: </strong>${equipment.description}`;
    equipmentList.appendChild(descriptionItem);

    let locationItem = document.createElement("li");
    locationItem.innerHTML = `<strong>Location: </strong>${equipment.common_locations}`;
    equipmentList.appendChild(locationItem);

    let dropsItem = document.createElement("li");
    dropsItem.innerHTML = `<strong>Drops: </strong>${equipment.drops}`;
    equipmentList.appendChild(dropsItem);

    let imageItem = document.createElement("li");
    let image = document.createElement("img");
    image.src = equipment.image;
    imageItem.appendChild(image);
    equipmentList.appendChild(imageItem);

    container.appendChild(equipmentList);
  });
}

let category = "equipment";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllEquipments);
