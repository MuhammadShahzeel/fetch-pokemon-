let fetchPokemon = () => {
  let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  let image = document.getElementById("pokemonImg");

  let notFound = document.getElementById("notFound");
  let spinner = document.getElementById("spinner");

  notFound.style.display = "none";
  spinner.style.display = "block";
  image.style.display = "none";

  const fetchData = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  fetchData
    .then((response) => {
      if (!response.ok) {
        image.style.display = "none";
        notFound.style.display = "block";
        throw new Error("pokemon not found");
      }

      notFound.style.display = "none";
      return response.json();
    })
    .then((data) => {
      let sprites = data.sprites.front_default;

      image.src = sprites;

      image.style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      spinner.style.display = "none";
    });
};
