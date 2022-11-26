<template>
  <div class="main">
    <nav>
      <button v-if="userToken" @click="logout">Logout</button>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LogoutBtn",
  // data() {},
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
      this.$store.dispatch("setTokenNull");
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: flex-end;
}
</style>
