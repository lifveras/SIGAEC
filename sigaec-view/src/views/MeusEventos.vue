<template>
  <div class="meus-eventos">
    <h1>Meus Eventos</h1>
    <b-button @click="createEventoModal()" variant="success">
      <b-icon icon="file-earmark-plus"></b-icon>
    </b-button>

    <section v-if="errored">
      <p>Não estamos conseguindo acessar seus Evento no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.eventoCreated"
        dismissible
        fade
        variant="success"
      >Evento salvo com sucesso!</b-alert>
      <b-alert
        :show="editModal.eventoEdited"
        dismissible
        fade
        variant="warning"
      >Evento editado com sucesso!</b-alert>
      <b-alert
        :show="editModal.eventoError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Evento</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="eventos" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editEventoModal(linha.item)">Editar evento</b-button>
          <!-- <b-button v-on:click="imprimir(linha.item.publicacaoAcademicaId)">Editar evento</b-button> -->
        </template>
      </b-table>

      <!-- <li v-for="evento in eventos" :key="evento.publicacaoAcademicaId">
        <span :key="evento.publicacaoAcademicaId">
          {{ evento.nome }}
        </span>
      </li>-->
    </div>

    <!-- Edit modal -->
    <b-modal
      v-bind:id="editModal.id"
      size="xl"
      v-bind:title="editModal.title"
      v-on:hide="resetEditModal"
      ok-only
      ok-title="Cancelar"
    >
      <MeuEventoEditor
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></MeuEventoEditor>
    </b-modal>
  </div>
</template>

<script>
// import axios from "axios";
import MeuEventoEditor from "@/components/MeuEventoEditor";

export default {
  name: "MeusEventos",
  components: {
    MeuEventoEditor
  },
  data() {
    return {
      eventos: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite seu evento",
        content: "",
        callback: "",
        eventoCreated: false,
        eventoEdited: false,
        eventoError: false
      },
      errored: false,
      loading: true
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    createEventoModal() {
      this.editModal.title = "Crie um novo Evento";
      this.editModal.content = null;

      //Callback para enviar o evento via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/eventoacademico", data.evento_model)
          .then(response => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Criado com sucesso!", response.data);
            this.editModal.eventoCreated = true;
            //this.mounted();
            //}
          })
          .catch(error => {
            console.log(error);
            this.editModal.eventoError = true;
          })
          .finally(() => {});
      };

      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    editEventoModal(evento) {
      //this.editModal.content = JSON.stringify(evento);
      this.editModal.title = 'Edite o Evento "' + evento.nome + '"';
      this.editModal.content = evento;

      //Callback para editar o evento via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/eventoacademico", data.evento_model)
          .then(response => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Editado com sucesso!", response.data);
            this.editModal.eventoEdited = true;
            //}
          })
          .catch(error => {
            console.log(error);
            this.editModal.eventoError = true;
          })
          .finally(() => {});
      };

      this.$root.$emit("bv::show::modal", this.editModal.id);
    },

    resetEditModal() {
      this.editModal.content = "";
      this.editModal.eventoCreated = false;
      this.editModal.eventoEdited = false;
      this.editModal.callback = null;
      this.editModal.eventoError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/eventoacademico")
      .then(response => {
        response.data.forEach(item => {
          //Campos do endereço
          let endKeys = Object.keys(item.endereco);
          let enderecoConcat = "";

          //acumulador para retornar os campos do endereço concatenados
          enderecoConcat = endKeys.reduce((acc, key, index) => {
            let concatValue =
              index != 0 ? ", " + item.endereco[key] : item.endereco[key];
            return acc + concatValue;
          }, "");

          item.endereco = enderecoConcat;

          this.eventos.push(item);
        });

        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);

        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'MeusEventos' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
.meus-eventos h1 {
  display: inline;
}

.meus-eventos button {
  margin-left: 4px;
  margin-bottom: 10px;
}
</style>
