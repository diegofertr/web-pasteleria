<template>
  <div class="home">
    <HelloWorld msg="Bienvenido a la aplicación web de pastelería" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
