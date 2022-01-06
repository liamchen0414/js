const form = document.querySelector("#sign-up");
const cc = document.querySelector("#cc");
const terms = document.querySelector("#terms");
const veggie = document.querySelector("#veggie");

const formData = {};
for (let input of [cc, terms, veggie]) {
  input.addEventListener("input", (e) => {
    formData[e.target.name] =
      e.target.name != "terms" ? e.target.value : e.target.checked;
  });
}
