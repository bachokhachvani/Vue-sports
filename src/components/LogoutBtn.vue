<template>
  <div class="main">
    <button v-if="userToken" @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LogoutBtn",
  data() {},
  computed: {
    ...mapGetters(["userToken"]),
    // isLoggedIn() {
    //     if()
    // },
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss"></style>
