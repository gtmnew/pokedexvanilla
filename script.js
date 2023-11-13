const pokeContainer = document.querySelector("#pokeContainer");
const pokemonCount = 151;

const colors = {
  fire: "#ff2600e1",
  grass: "#74cb48",
  electric: "#fff023",
  water: "#1f6fca",
  ground: "#bf9926c7",
  rock: "#a17900",
  fairy: "#decee0",
  poison: "#3100809d",
  bug: "#83901a",
  dragon: "#4e38e9",
  psychic: "#e67fe6",
  flying: "#5b71ffc0",
  fighting: "#bb7a6f",
  normal: "#b8b89f",
  ice: "#45c5d6",
  steel: "#c7c7c7",
  dark: "#303030",
  ghost: "#1d006e",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await getPokemons(i);
  }
};

const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();
  createPokemonCard(data);
};

const createPokemonCard = (poke) => {
  let cardDetails = document.querySelector(".pokemon");
  const card = document.createElement("div");
  card.classList.add("pokemon");

  const name = poke.name[0].toUpperCase() + poke.name.slice(1);
  const id = poke.id.toString().padStart(3, "0");

  const pokeTypes = poke.types.map((type) => type.type.name);
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);
  const color = colors[type];

  card.style.backgroundColor = color;

  const pokemonInnerHTML = ` 
  <div>
  <div class="imgContainer">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png"
      alt="${name}"
    />
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  </div>`;

  card.innerHTML = pokemonInnerHTML;
  card.addEventListener("click", cardDetails);
  pokeContainer.appendChild(card);
};
const cardDetails = () => {
  window.location.href = "index2.html";
};
fetchPokemons();
