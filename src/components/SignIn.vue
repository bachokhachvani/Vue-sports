<template>
  <div class="main">
    <h3>Sign In</h3>
    <form action="submit" @click.prevent="submitHandler">
      <div>
        <label for="login">Login</label>
        <input v-model="name" type="text" placeholder="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="password" type="text" placeholder="password" />
      </div>
      <button>Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return { name: "", password: "" };
  },
  methods: {
    submitHandler() {
      console.log("user", this.password, this.name);
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
