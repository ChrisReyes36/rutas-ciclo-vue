<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="onChangeName">Cambiar Nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Juan",
    };
  },
  methods: {
    onChangeName() {
      this.name = "Pedro Changed";
    },
  },
  beforeCreate() {
    console.log("AboutPage beforeCreate");
  },
  created() {
    this.name = "Juan Carlos";
    console.log("AboutPage created");
    // Peticiones HTTP
  },
  beforeMount() {
    console.log("AboutPage beforeMount");
  },
  mounted() {
    console.log("AboutPage mounted");
    // Limpiar cache
  },
  beforeUpdate() {
    console.log("AboutPage beforeUpdate");
  },
  updated() {
    console.log("AboutPage updated");
  },
  activated() {
    console.log("AboutPage activated");
  },
  deactivated() {
    console.log("AboutPage deactivated");
  },
  beforeUnmount() {
    console.log("AboutPage beforeUnmount");
  },
  unmounted() {
    console.log("AboutPage unmounted");
  },
  errorCaptured() {
    console.log("AboutPage errorCaptured");
  },
  renderTracked() {
    console.log("AboutPage renderTracked");
  },
  renderTriggered() {
    console.log("AboutPage renderTriggered");
  },
};
</script>