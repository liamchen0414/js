// DEBOUNCING AN INPUT(delayed search): we don't want to search everytime we type,
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      // accessing time out ID, if we have the timeout ID then remove it
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

// build movie details
const movieTemplate = (movieDetail) => {
  return `<article class="media">
            <figure class="media-left">
              <p class="image">
                <img src="${movieDetail.Poster}" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
              <h1>${movieDetail.Title}</h1>
              <h4>${movieDetail.Genre}</h4>
              <p>${movieDetail.Plot}</p>
              </div>
            </div>
          </article>
          <article class="notification is-secondary">
            <p class="title">${movieDetail.Awards}</p>
            <p class="subtitle">Awards</p>
          </article>
          <article class="notification is-secondary">
            <p class="title">${movieDetail.Metascore}</p>
            <p class="subtitle">Score</p>
          </article>
          <article class="notification is-secondary">
            <p class="title">${movieDetail.imdbRating}</p>
            <p class="subtitle">IMDB Rating</p>
          </article>
          <article class="notification is-secondary">
            <p class="title">${movieDetail.imdbVotes}</p>
            <p class="subtitle">IMDB Votes</p>
          </article>
        `;
};
