<template>
  <div class="meus-eventos">
    <h1>Meus Eventos</h1>
    <div>
      <b-table striped hover :items="eventos" :fields="campos">
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
      <EditEvento @exit="closeModal" :evento="editModal.content" :modalTarget="editModal.id"></EditEvento>
      <!-- <pre>{{ editModal.content }}</pre> -->
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import EditEvento from "@/components/EditEvento";

const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
const eventPath = "eventoacademico?cadastroId=1&offset=1&limit=10";

// function insertButtonEditColumn(eventos, campos) {
//   campos.push("editar");

//   eventos.forEach(item => {
//     let buttonEdit = document.createElement("button");
//     buttonEdit.title = "Editar evento";
//     buttonEdit.addEventListener("click", () => {
//       console.log(item.publicacaoAcademicaId);
//     });
//     console.log(item);
//     //item.editar = buttonEdit;
//   });
// }

export default {
  name: "MeusEventos",
  components: {
    EditEvento
  },
  data() {
    return {
      eventos: [],
      campos: [],
      editModal: {
        id: "edit-modal",
        title: "Edite seu evento",
        content: ""
      }
    };
  },
  methods: {
    imprime(id) {
      console.log(id);
    },
    editEventoModal(evento) {
      //this.editModal.content = JSON.stringify(evento);
      this.editModal.content = evento;
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },
    resetEditModal() {
      this.editModal.content = "";
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    }
  },
  mounted() {
    axios
      .get(url + eventPath)
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

          //console.log(this.eventos)
          this.eventos.push(item);
        });

        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);

        this.campos.push("editar");
        // console.log(this.campos);
        // console.log(this.eventos);

        //insertButtonEditColumn(this.eventos, this.campos);
      })
      .catch(error =>
        console.log("Error fetching in 'MeusEventos' page: ", error)
      );
  }
};
</script>

<style></style>
