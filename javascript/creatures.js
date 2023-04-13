function showAllEntries(response) {
  console.log(response.data);
}

let category = "creatures";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/category/${category}`;
axios.get(apiUrl).then(showAllEntries);
