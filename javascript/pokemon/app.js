async function get3Pokemon(num1, num2) {
  const promiseArray = [];
  for (let i = num1; i <= num2; i++) {
    const p = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promiseArray.push(p);
  }
  const results = await Promise.all(promiseArray);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data);
    let str = "";
    str += "name: " + pokemon.data.name + ", type: ";
    const len = pokemon.data.types.length;
    for (let i = 0; i < len; i++) {
      str += pokemon.data.types[i].type.name + "; ";
    }
    console.log(str);
  }
}
