import pokemonApi from '@/api/pokemonApi.js'

describe('PokemonApi', () => {
    test('Axios must be configured with the pokemon API', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    });
});