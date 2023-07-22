export const pokemonNumFinder = (url: string) => {
    let pokemonNum = url.split('/')[url.split('/').length - 2];
    return pokemonNum;
}