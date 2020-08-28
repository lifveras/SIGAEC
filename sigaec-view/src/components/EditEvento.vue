<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Nome do evento:" label-for="evento-nome">
        <b-form-input id="evento-nome" v-model="evento_model.nome" placeholder="evento_model.nome"></b-form-input>
      </b-form-group>
      <b-form-group label="Descrição:" label-for="evento-desc">
        <b-form-textarea
          id="evento-desc"
          v-model="evento_model.descricao"
          placeholder="evento_model.descricao"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Início:" label-for="evento-inicio">
        <b-form-datepicker
          id="evento-inicio"
          v-model="evento_model.inicio"
          value-as-date
          class="mb-2"
        ></b-form-datepicker>
        <!-- <b-form-input id="evento-inicio" v-model="evento_model.inicio" placeholder></b-form-input> -->
      </b-form-group>
      <b-form-group label="Término:" label-for="evento-termino">
        <b-form-datepicker
          id="evento-termino"
          v-model="evento_model.termino"
          value-as-date
          class="mb-2"
        ></b-form-datepicker>
        <!-- <b-form-input id="evento-termino" v-model="evento_model.termino" placeholder></b-form-input> -->
      </b-form-group>

      <b-button type="submit" variant="primary">Modificar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditEvento",
  props: {
    evento: {
      publicacaoAcademicaId: Number,
      nome: String,
      descricao: String,
      inicio: String,
      termino: String,
      endereco: Object
    },
    modalTarget: String
  },
  data() {
    return {
      evento_model: {
        publicacaoAcademicaId: "",
        nome: "",
        descricao: "",
        inicio: new Date("01-07-2019"),
        termino: new Date("02-08-2020")
        //endereco: "" Ainda não envia!
      }
    };
  },
  mounted() {
    this.evento_model.publicacaoAcademicaId = this.evento.publicacaoAcademicaId;
    this.evento_model.nome = this.evento.nome;
    this.evento_model.descricao = this.evento.descricao;
    this.evento_model.inicio = new Date(this.evento_model.inicio);
    this.evento_model.termino = new Date(this.evento_model.termino);
    //this.evento_model.endereco = Object.assign({}, this.evento.endereco);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
      const eventPath = "eventoacademico";
      // "publicacaoAcademicaId": 1,
      // "nome": "Novo nome",
      // "descricao":  "Nova descrição",
      // "inicio": "01-07-2021",
      // "termino": "01-07-2021"
      alert("Enviando..." + JSON.stringify(this.evento_model));
      axios
        .put(url + eventPath, this.evento_model)
        .then(response => {
          alert("Evento alterado: " + response.data);
          this.$emit("exit", true);
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style>
</style>