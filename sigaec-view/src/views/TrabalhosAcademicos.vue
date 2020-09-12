<template>
  <div class="trabalhos-academicos">
    <h1>Trabalhos Acadêmicos</h1>
  </div>
</template>

<script>
export default {
  name: "TrabalhosAcademicos",
  data() {
    return {
      user: {
        name: "user"
      }
    };
  },
  methods: {
    getUserData() {
      this.$http
        .get("/api/user")
        .then(response => {
          console.log(response);
          this.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          this.$router.push("/");
        });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style></style>
