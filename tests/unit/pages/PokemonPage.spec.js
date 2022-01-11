import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage.vue'
import { pokemons } from "../mocks/pokemons.mocks";
describe('Pokemon Page', () => {
    let wrapper


    beforeEach(() => {
        const mixPokemonsArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemons')
        wrapper = shallowMount(PokemonPage)
    })

    test('should call mixPokemons when mounted', () => {
        const mixPokemonsArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemons')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonsArraySpy).toHaveBeenCalled();
    })

    test('must match the snapshot when loading the pokemon', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonsArray: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show PokemonPicture and PokemonOptions components', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonsArray: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const pokemonPicture = wrapper.find("pokemon-picture-stub")
        const pokemonOptions = wrapper.find("pokemon-options-stub")

        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOptions.exists()).toBeTruthy()

        expect(pokemonPicture.attributes('pokemonid')).toBe(`${pokemons[0].id}`)
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy()

    })

    test("test with checkAswer", async() => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonsArray: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(pokemons[0].id)
        const h2 = wrapper.find("h2")
        expect(h2.exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(h2.text()).toBe(`Correcto! es ${pokemons[0].name}`)
    })
})