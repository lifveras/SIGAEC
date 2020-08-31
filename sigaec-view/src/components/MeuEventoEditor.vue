<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group label="Nome do evento:" label-for="evento-nome">
        <b-form-input
          id="evento-nome"
          v-model="editEventoData.evento_model.nome"
          :placeholder="editEventoData.evento_model.nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Descrição:" label-for="evento-desc">
        <b-form-textarea
          id="evento-desc"
          v-model="editEventoData.evento_model.descricao"
          :placeholder="editEventoData.evento_model.descricao"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="Início:" label-for="evento-inicio">
        <b-form-datepicker
          id="evento-inicio"
          v-model="editEventoData.evento_model.inicio"
          value-as-date
          class="mb-2"
        ></b-form-datepicker>
        <!-- <b-form-input id="evento-inicio" v-model="evento_model.inicio" placeholder></b-form-input> -->
      </b-form-group>
      <b-form-group label="Término:" label-for="evento-termino">
        <b-form-datepicker
          id="evento-termino"
          v-model="editEventoData.evento_model.termino"
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
//import axios from "axios";

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
    modalTarget: String,
    callback: Function
  },
  data() {
    return {
      editEventoData: {
        evento_model: {
          publicacaoAcademicaId: 0,
          nome: "Nome do evento",
          descricao: "Descrição do evento",
          inicio: new Date(),
          termino: new Date()
          //endereco: "" Ainda não envia!
        }
      }
    };
  },
  mounted() {
    if (this.evento) {
      this.editEventoData.evento_model.publicacaoAcademicaId = this.evento.publicacaoAcademicaId;
      this.editEventoData.evento_model.nome = this.evento.nome;
      this.editEventoData.evento_model.descricao = this.evento.descricao;
      this.editEventoData.evento_model.inicio = new Date(this.evento.inicio);
      this.editEventoData.evento_model.termino = new Date(this.evento.termino);
    }
    //this.evento_model.endereco = Object.assign({}, this.evento.endereco);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.callback(evt, this.editEventoData);
      this.$emit("exit", true);

      // const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
      // const eventPath = "eventoacademico";

      // alert("Enviando..." + JSON.stringify(this.evento_model));
      // axios
      //   .put(url + eventPath, this.evento_model)
      //   .then(response => {
      //     alert("Evento alterado: " + response.data);
      //     this.$emit("exit", true);
      //   })
      //   .catch(error => {
      //     alert(error);
      //   });
    }
  }
};
</script>

<style>
</style>