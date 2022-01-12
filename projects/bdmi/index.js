const autoCompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}"/>
    ${movie.Title}
    (${movie.Year})`;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchStr) {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: "ce7bedd5",
        s: `${searchStr}`,
      },
    });
    if (response.data.Error) return [];
    return response.data.Search;
  },
};

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#left-autocomplete"),
  onOptionSelect(movie) {
    movieSelected(movie, document.querySelector("#left-summary"));
  },
});

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#right-autocomplete"),
  onOptionSelect(movie) {
    movieSelected(movie, document.querySelector("#right-summary"));
  },
});

const movieSelected = async (movie, element) => {
  const response = await axios.get("https://www.omdbapi.com/", {
    params: {
      apikey: "ce7bedd5",
      i: movie.imdbID,
    },
  });
  element.innerHTML = movieTemplate(response.data);
};
