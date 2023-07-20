export const config: any = {};

config.API_BASE_URL = "https://pokeapi.co/api/v2/";

config.API_NAME = {
    pokemon: 'pokemon',
    species: 'pokemon-species'
}

config.API_URL = {
    pokemonList: `${config.API_BASE_URL}/${config.API_NAME.pokemon}?limit=1281`,
    pokemon: `${config.API_BASE_URL}/${config.API_NAME.pokemon}/{{pokemonId}}`,
    pokemonSpecies: `${config.API_BASE_URL}/${config.API_NAME.species}/{{pokemonId}}`
}