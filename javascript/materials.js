function showAllMaterials(response) {
  const materials = response.data.data;
  materials.sort((a, b) => a.id - b.id);
  let container = document.querySelector("#material-container");

  if (!container) {
    container = document.createElement("div");
    container.id = "material-container";
    document.body.appendChild(container);
  }

  materials.forEach((material) => {
    let materialList = document.createElement("ul");
    let nameItem = document.createElement("li");
    nameItem.innerHTML = `<strong>Name: </strong> <h5>${material.name}</h5>`;
    materialList.appendChild(nameItem);

    let numberItem = document.createElement("li");
    numberItem.innerHTML = `<strong>ID: </strong>${material.id}`;
    materialList.appendChild(numberItem);

    let descriptionItem = document.createElement("li");
    descriptionItem.innerHTML = ` <strong>Description: </strong>${material.description}`;
    materialList.appendChild(descriptionItem);

    let locationItem = document.createElement("li");
    locationItem.innerHTML = `<strong>Location: </strong>${material.common_locations}`;
    materialList.appendChild(locationItem);

    let dropsItem = document.createElement("li");
    dropsItem.innerHTML = `<strong>Drops: </strong>${material.drops}`;
    materialList.appendChild(dropsItem);

    let imageItem = document.createElement("li");
    let image = document.createElement("img");
    image.src = material.image;
    imageItem.appendChild(image);
    materialList.appendChild(imageItem);

    container.appendChild(materialList);
  });
}

let category = "materials";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllMaterials);
