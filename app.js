function displayItemEntry(response) {
  console.log(response.data);
}

let entry = "Lord of the Mountain";
let apiUrl = `https://botw-compendium.herokuapp.com/api/v2/entry/${entry}`;

axios.get(apiUrl).then(displayItemEntry);
