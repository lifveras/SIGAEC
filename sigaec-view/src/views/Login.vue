<template>
  <div>
    <img src="../assets/logo_sigaec.png" alt />

    <div class="login">
      <b-form @submit="doLogin">
        <b-form-group
          id="user"
          label="Usuário"
          label-for="user-input"
          description="Insira o seu nome de usuário (e-mail)."
          label-align="left"
        >
          <b-form-input
            id="user-input"
            v-model="login.user"
            type="email"
            required
            placeholder="Nome de usuário"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="pwd"
          label="Senha"
          label-for="pwd-input"
          label-align="left"
          description="Insira a sua senha."
        >
          <b-form-input
            id="pwd-input"
            v-model="login.pwd"
            type="password"
            required
            placeholder="Senha de login"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Entrar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        pwd: "",
      },
    };
  },
  methods: {
    doLogin(event) {
      event.preventDefault();
      let login = {
        email: "user@email.com",
        pwd: "123",
      };

      this.$http
        .post("/api/login", login) //substituir depois por this.login
        .then((response) => {
          console.log(response.data);
          console.log(response);
          this.$router.push("/home");
        })
        .catch((error) => {
          console.error("Não foi possível realizar o Login");
          console.error(error);
        });
    },
  },
};
</script>

<style>
img {
  margin-top: 50px;
}

.login {
  margin: 20px 350px 0px 350px;
  padding: 50px 50px 20px 50px;
  border-radius: 20px;
  background-color: #cdeefb;
}

.login button {
  background-color: rgb(98, 202, 202);
  border-color: gray;
}
</style>
