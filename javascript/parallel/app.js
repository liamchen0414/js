// SEQUENTIAL VERSION
async function get3Pokemon() {
  const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}

// PARALLEL VERSION
async function get3Pokemon2() {
  const p1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const p2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const p3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const pokemon1 = await p1;
  const pokemon2 = await p2;
  const pokemon3 = await p3;
  console.log(pokemon1.data);
  console.log(pokemon2.data);
  console.log(pokemon3.data);
}
