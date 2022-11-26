<template>
  <div v-if="userToken" class="main">
    <nav>
      <button @click="logout">Logout</button>
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
  background-color: rgb(113, 153, 232);

  button {
    background-color: rgb(43, 66, 157);
    color: #ffff;
    border: none;
    border-radius: 8px;
    height: 25px;
    width: 100px;
    cursor: pointer;
  }
}
</style>
