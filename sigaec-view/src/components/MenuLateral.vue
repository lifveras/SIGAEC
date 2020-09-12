<template>
  <div>
    <b-button v-b-toggle.menu>Abrir Opções</b-button>
    <b-sidebar id="menu" title="Menu" shadow>
      <div class="px-3 py-2">
        <b-nav vertical class>
          <b-nav-item
            v-for="item in itensMenu"
            :activate="item.name === 'Home'"
            :to="item.link"
            v-bind:key="item.name.toLowerCase() + '-nav-item'"
          >
            <b-icon v-bind:icon="item.icon"></b-icon>
            <span>{{ item.name }}</span>
          </b-nav-item>
          <a href="" @click="logout">Logout</a>
          <!-- <b-nav-item active>
            <b-icon icon="house-fill"></b-icon>Home
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="book-half"></b-icon>Trabalhos acadêmicos
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="award-fill"></b-icon>Meus Eventos
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="bookmarks"></b-icon>Evento Inscritos
          </b-nav-item>-->
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "MenuLateral",
  data() {
    return {
      itensMenu: [
        { name: "Home", icon: "house-fill", link: "/" },
        {
          name: "Trabalhos acadêmicos",
          icon: "book-half",
          link: "/trabalhos-academicos",
        },
        { name: "Meus Eventos", icon: "award-fill", link: "/meus-eventos" },
        {
          name: "Evento Inscritos",
          icon: "bookmarks",
          link: "/eventos-inscritos",
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$http
        .get("/api/logout")
        .then(() => {
          this.$router.push("/");
        })
        .catch((errors) => console.error(errors));
    },
  },
};
</script>

<style></style>
