<template>
  <div class="sports">
    <SportsComp />
  </div>
</template>

<script>
import SportsComp from "@/components/SportsComp.vue";
import { mapGetters } from "vuex";
export default {
  name: "sportsView",
  components: {
    SportsComp,
  },
  computed: {
    // token() {
    //   return this.$store.getters["auth/userToken"];
    // },
    ...mapGetters(["userToken", "loginErrorMessage"]),
  },
  methods: {
    clickHandler() {
      this.$store.dispatch("sports/getTokenAction");
    },
  },
};
</script>
