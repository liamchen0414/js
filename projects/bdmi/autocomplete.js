const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  // expect confit to have the root object
  root.innerHTML = `
  <label><b>Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results">
      </div>
    </div>
  </div>
  `;

  const searchBox = root.querySelector(".input");
  const dropdown = root.querySelector(".dropdown");
  const resultWrapper = root.querySelector(".results");

  const onInput = async (e1) => {
    if (e1.target.value) {
      // if there is no string, don't fetch
      const items = await fetchData(e1.target.value);
      resultWrapper.innerHTML = "";
      if (items.length > 0) {
        dropdown.classList.add("is-active"); // after search is complete, show the drop down menu
        for (let item of items) {
          const a = document.createElement("a");
          a.classList.add("dropdown-item");
          a.innerHTML = renderOption(item);
          resultWrapper.appendChild(a); // append child to results
          a.addEventListener("click", () => {
            dropdown.classList.remove("is-active");
            searchBox.value = inputValue(item);
            onOptionSelect(item);
          });
        }
      }
    }
  };
  searchBox.addEventListener("input", debounce(onInput, 1000));
  // when user click somewhere else, remove dropdown
  document.addEventListener("click", (e) => {
    if (!root.contains(e.target)) dropdown.classList.remove("is-active");
  });
};
