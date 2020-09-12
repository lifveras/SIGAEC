<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      user: {
        name: "Frank",
      },
    };
  },

  methods: {
    getUserData() {
      console.log(document.cookie);
      this.$http
        .get("/api/user")
        .then((response) => {
          console.log(response.data);
          this.$set(this, "user", response.data.user);
        })
        .catch((errors) => {
          console.log(errors);
          this.$router.push("/");
        });
    },
  },
  mounted() {
    this.getUserData();
  },
};
</script>
