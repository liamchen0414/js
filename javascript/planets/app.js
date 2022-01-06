const flattenJSON = (response) => {
  if (!response.ok) throw new Error(`Status Code Error ${response.status}`);
  return response.json();
};

const printPlanets = (data) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

const fetchMorePlanets = (url = "https://swapi.dev/api/planets") => {
  return fetch(url);
};

fetchMorePlanets()
  .then(flattenJSON)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(flattenJSON)
  .then(printPlanets)
  .catch((err) => {
    console.log("Fetch Error", err);
  });
