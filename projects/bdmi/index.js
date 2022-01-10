const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search For A Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results">
      </div>
    </div>
  </div>
  `;
const searchBox = document.querySelector(".input");
const dropdown = document.querySelector(".dropdown");
const resultWrapper = document.querySelector(".results");

const onInput = async (e1) => {
  if (e1.target.value) {
    // if there is no string, don't fetch
    const movies = await fetchData(e1.target.value);
    resultWrapper.innerHTML = "";
    dropdown.classList.add("is-active"); // after search is complete, show the drop down menu
    console.log(movies);
    for (let movie of movies) {
      const a = createAnchor(movie);
      resultWrapper.appendChild(a); // append child to results
      a.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        searchBox.value = movie.Title;
        movieSelected(movie);
      });
    }
  }
};

searchBox.addEventListener("input", debounce(onInput, 1000));
const fetchData = async (searchStr) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "ce7bedd5",
      s: `${searchStr}`,
    },
  });
  if (response.data.Error) return [];
  return response.data.Search;
};

// when user click somewhere else, remove dropdown
document.addEventListener("click", (e) => {
  if (!root.contains(e.target)) dropdown.classList.remove("is-active");
});

const movieSelected = async (movie) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "ce7bedd5",
      i: movie.imdbID,
    },
  });
  const summary = document.querySelector("#summary");
  summary.innerHTML = movieTemplate(response.data);
  console.log(summary);
};
