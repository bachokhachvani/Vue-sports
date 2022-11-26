<template>
  <div class="home">
    <sportName></sportName>
  </div>
</template>

<script>
// @ is an alias to /src
import SportName from "@/components/SportName.vue";

export default {
  name: "HomeView",
  components: {
    SportName,
  },
};
</script>
