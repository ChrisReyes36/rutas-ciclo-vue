<template>
  <h1>
    Pokemon: #<span>{{ pokemonId }}</span>
  </h1>
  <div v-if="pokemon">
    <img :src="pokemonImage" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      // pokemonId: null,
      pokemon: null,
      pokemonImage: null,
    };
  },

  created() {
    // const { pokemonId } = this.$route.params;
    // this.pokemonId = pokemonId;
    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`;
        const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.pokemon = data;
        this.pokemonImage = urlImage;
      } catch (error) {
        this.$router.push("/");
        console.log("No hay nada que hacer aquí");
      }
    },
  },

  watch: {
    pokemonId() {
      this.getPokemon();
    },
  },
};
</script>

<style scoped>
img {
  width: 20%;
  margin: 0 auto;
}
</style>