/*
async function greet() {
  return "Hello World!!!";
}

greet().then((val) => {
  console.log("Promise Resolved with  " + val);
});

async function add(x, y) {
  if (typeof x != number || typeof y != number) {
    throw "X and Y must be numbers!";
  }
  return x + y;
}
*/

// function greet() {
//   return "Hello World!!!";
// }

async function getData() {
  try {
    const res = await axios.get("https://swapi.dev/api/planets");
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

getData();
