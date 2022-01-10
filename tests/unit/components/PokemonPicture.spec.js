import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture.vue';


describe('PokemonPicture', () => {
    test('must match the snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('must show hidden picture and pokemon 1', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        const [img1, img2] = wrapper.findAll('img');
        expect(img1.exists()).toBeTruthy();
        expect(img2).toBe(undefined);

        expect(img1.classes('hidden-pokemon')).toBeTruthy();

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg');
    })

    test('should show pokemon picture if showPokemon is true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: true
            }
        })

        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();


        expect(img.classes('hidden-pokemon')).toBeFalsy();
        expect(img.classes('fade-in')).toBeTruthy();
    })
})