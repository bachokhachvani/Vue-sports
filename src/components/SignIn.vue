<template>
  <div class="main">
    <div v-if="userToken">
      <h3>Home Page</h3>
    </div>
    <div v-if="!userToken">
      <h3>Sign In</h3>
      <form @submit.prevent="submitHandler">
        <div>
          <label for="login">Login</label>
          <input v-model.trim="email" type="text" placeholder="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model.trim="password" type="text" placeholder="password" />
        </div>
        <p v-if="isLoading">Loading ...</p>
        <p v-if="loginErrorMessage && !isLoading">{{ loginErrorMessage }}</p>
        <p v-if="!formIsValid">Email or password is incorrect</p>
        <button>Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      isLoading: false,
      error: false,
    };
  },
  computed: {
    ...mapGetters(["userToken", "loginErrorMessage"]),
  },
  methods: {
    async submitHandler() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@")) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          login: this.email,
          password: this.password,
        });
      } catch (e) {
        this.error = e.message || "failed to login!";
        console.log("err");
      }
      this.isLoading = false;
      if (!this.loginErrorMessage) {
        this.$router.push("/sports");
        try {
          await this.$store.dispatch("getSports");
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  h3 {
    margin-bottom: 30px;
    color: rgb(43, 66, 157);
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
  button {
    background-color: rgb(43, 66, 157);
    border-radius: 8px;
    color: #ffff;
    border: none;
    height: 30px;
    cursor: pointer;
  }
}

input {
  width: 100px;
}

label {
  color: rgb(43, 66, 157);
  width: 100px;
  margin-right: 20px;
  font-weight: 600;
}
</style>
