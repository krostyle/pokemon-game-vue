<template>
    <h1 v-if="!pokemon">Cargando... Espere Porfavor</h1>
    <div v-else>
        <h1>¿Quien es este Pokemon?</h1>
        <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
        <pokemon-options :pokemons="pokemonsArray" @selection="checkAnswer"></pokemon-options> 
        <template v-if="showAnswer">
            <h2>{{message}}</h2>    
            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
  components: { 
        PokemonPicture,
        PokemonOptions
      },
    name:'PokemonPage',
    data() {
        return {
            pokemonsArray: [],
            pokemon:null,
            showPokemon:false,
            showAnswer:false,
            message:''
        }
    },
    methods:{
        async mixPokemons(){
            this.pokemonsArray = await getPokemonOptions();
            const rndIndex = Math.floor(Math.random() * this.pokemonsArray.length);
            this.pokemon = this.pokemonsArray[rndIndex];
        },
        checkAnswer(id){
            this.showPokemon = true;
            this.showAnswer = true;
            if(id === this.pokemon.id){                
                this.message = `Correcto! es ${this.pokemon.name}`;
            }else{
                this.message = `Incorrecto! es ${this.pokemon.name}`;
            }
        },
        newGame(){
            this.pokemon=null;
            this.showAnswer = false;
            this.showPokemon = false;
            this.pokemonsArray = [];            
            this.mixPokemons();
        }
        
    },
    mounted(){
        this.mixPokemons();
    }
}
</script>

<style>

</style>