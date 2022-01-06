import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions';

describe('getPokemonOptions', () => {
    test('should return an array of numbers', () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
        expect(pokemons[pokemons.length - 1]).toBe(650);
    });

    test('should return an array of 4 names pokemons', async() => {
        const pokemons = await getPokemonNames([1, 2, 3, 4]);
        expect(pokemons.length).toBe(4);
        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]);
    })

    test('should return a random array', async() => {
        const pokemons = await getPokemonOptions();
        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }
        ]);
    })
})