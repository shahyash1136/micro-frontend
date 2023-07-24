export const config: any = {};

config.API_BASE_URL = "https://pokeapi.co/api/v2/";

config.API_NAME = {
    pokemon: 'pokemon',
    species: 'pokemon-species'
}

config.API_URL = {
    pokemonList: `${config.API_BASE_URL}${config.API_NAME.pokemon}?limit=1281`,
    pokemon: `${config.API_BASE_URL}${config.API_NAME.pokemon}/{{pokemonId}}`,
    pokemonSpecies: `${config.API_BASE_URL}${config.API_NAME.species}/{{pokemonId}}`
}

config.TYPE_COLORS = {
    bug: "b1c12e",
    dark: "4f3a2d",
    dragon: "755edf",
    electric: "fcbc17",
    fairy: "f4b1f4",
    fighting: "823551d",
    fire: "e73b0c",
    flying: "a3b3f7",
    ghost: "6060b2",
    grass: "74c236",
    ground: "d3b357",
    ice: "a3e7fd",
    normal: "c8c4bc",
    poison: "934594",
    psychic: "ed4882",
    rock: "b9a156",
    steel: "b5b5c3",
    water: "3295F6",
};