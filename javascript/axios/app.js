const printPlanets = ({ data /* desctructure data*/ }) => {
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

const fetchMorePlanets = (url = "https://swapi.dev/api/planets") => {
  return axios.get(url);
};

fetchMorePlanets()
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log("Fetch Error", err);
  });
