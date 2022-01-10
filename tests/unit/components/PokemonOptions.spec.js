import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions.vue";

import { pokemons } from "../mocks/pokemons.mocks";

describe("PokemonOptions", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons,
            },
        });
    });

    test("must match the snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();

    });


    test("should show the 4 options", () => {
        const liTags = wrapper.findAll("li");
        expect(liTags.length).toBe(4);
        expect(liTags[0].text()).toBe(pokemons[0].name);
        expect(liTags[1].text()).toBe(pokemons[1].name);
        expect(liTags[2].text()).toBe(pokemons[2].name);
        expect(liTags[3].text()).toBe(pokemons[3].name);

    });

    test("the event should be emitted", () => {
        const [li1, li2, li3, li4] = wrapper.findAll("li");
        li1.trigger("click");
        li2.trigger("click");
        li3.trigger("click");
        li4.trigger("click");
        expect(wrapper.emitted('selection').length).toBe(4);

        expect(wrapper.emitted('selection')[0]).toEqual([pokemons[0].id]);
        expect(wrapper.emitted('selection')[1]).toEqual([pokemons[1].id]);
        expect(wrapper.emitted('selection')[2]).toEqual([pokemons[2].id]);
        expect(wrapper.emitted('selection')[3]).toEqual([pokemons[3].id]);
    });
});