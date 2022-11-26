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

<style scoped lang="scss">
ul {
  list-style-type: none;
  li {
    font-size: 20px;
  }
  li:hover {
    color: rgb(82, 108, 208);
  }
  a:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
  a:link {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
}
</style>
