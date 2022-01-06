import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture.vue';


describe('PokemonPicture', () => {
    test('must match the snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemonName: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('must show hidden picture and pokemon 1', () => {

    })

    test('should show pokemon picture if showPokemon is true', () => {

    })
})