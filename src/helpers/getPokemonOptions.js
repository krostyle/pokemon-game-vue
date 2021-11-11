import pokemonApi from '../api/pokemonApi';
const getPokemons = () => {
    const pokemonsArray = Array.from(Array(650))
    return pokemonsArray.map((_, index) => index + 1);
};

const getPokemonOptions = async() => {
    const mixedPokemons = getPokemons();
    mixedPokemons.sort(() => Math.random() - 0.5);
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
    return pokemons;

};

const getPokemonNames = async([a, b, c, d]) => {
    const [p1, p2, p3, p4] = await Promise.all([
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]);

    return [
        { name: p1.data.name, id: a },
        { name: p2.data.name, id: b },
        { name: p3.data.name, id: c },
        { name: p4.data.name, id: d }
    ];
};

export default getPokemonOptions;