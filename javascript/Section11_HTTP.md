# Section 11 HTTP Requests

## 11.1 XMLHTTP

```javascript
const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  // this.responseText doesn't work with arrow function
  const data = JSON.parse(firstReq.responseText);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("error");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");
```

## 11.2 Fetch

> The fetch() method takes one mandatory argument, the path to the sources you want to fetch and return a promise that resolves the response to that request, whether it is a successful or not.

> the response fetched from the request is a response object in the form of readablestream(bytes). To read string, we can use body.json() method

> fetch will only return a reject if internet is down or request can't be made

```javascript
fetch("https://swapi.dev/api/planets", {
  headers: { Accept: "application/json" },
}).then((res) => {
  // the if statement catches everything other than 200, meaning the return is not a json object
  if (!res.ok) throw new Error(`Status Code Error ${res.status}`);
  res
    .json() // because json() takes time, it is a promise, which means we need .then and .catch
    .then((data) => {
      for (let planet of data.results) {
        console.log(planet.name);
      }
    })
    .catch((err) => {
      // only runs when internet is down
      console.log("Fetch Error", err);
    });
});
```

## 11.2.1 Chain Fetch

> To avoid messy call backs and nestings

```javascript
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
```

## Axios Library

> Not a native library, it is an external library for making http requests

```javascript
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
```
