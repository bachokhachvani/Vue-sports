<template>
  <div class="main">
    <ul>
      <li v-for="sports in userSports" :key="sports.id">
        <router-link :to="'/sports/' + sports.c">{{ sports.n }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SportsComp",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userSports"]),
  },
  methods: {},
  // mounted() {
  //   this.$store.dispatch("sports/getSports");
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
