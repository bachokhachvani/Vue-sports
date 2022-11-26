<template>
  <div class="main">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "SportName",
  data() {
    return { name: null };
  },
  computed: {},
  methods: {
    // getName() {
    //   this.name = this.$route.params.sportName;
    //   console.log(this.$route.params.sportName);
    // },
  },
  mounted() {
    this.name = this.$route.params.sportName;
  },
};
</script>

<style scoped lang="scss"></style>
