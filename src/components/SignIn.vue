<template>
  <div class="main">
    <h3>Sign In</h3>
    <p>{{ token }}</p>
    <form @submit.prevent="submitHandler">
      <div>
        <label for="login">Login</label>
        <input v-model.trim="email" type="text" placeholder="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model.trim="password" type="text" placeholder="password" />
      </div>
      <p v-if="!formIsValid">Email or password is incorrect</p>
      <button>Sign in</button>
    </form>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "SignIn",
  data() {
    return { email: "", password: "", formIsValid: true };
  },
  computed: {
    token() {
      return this.$store.getters["auth/userToken"];
    },
    // ...mapGetters("auth", ["userToken"]),
  },
  methods: {
    submitHandler() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@")) {
        this.formIsValid = false;
        return;
      }
      console.log("user", this.password, this.email);
      this.$store.dispatch("auth/login", {
        login: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  h3 {
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    div {
      display: flex;
      justify-content: space-between;
    }
  }
}

input {
  width: 100px;
}

label {
  width: 100px;
  margin-right: 20px;
}
</style>
