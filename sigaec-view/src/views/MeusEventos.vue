<template>
  <div class="meus-eventos">
    <h1>Meus Eventos</h1>
    <ul>
      <b-table striped hover :items="eventos" :fields="campos"></b-table>

      <!-- <li v-for="evento in eventos" :key="evento.publicacaoAcademicaId">
        <span :key="evento.publicacaoAcademicaId">
          {{ evento.nome }}
        </span>
      </li>-->
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
const eventPath = "eventoacademico?cadastroId=1&offset=1&limit=10";

export default {
  name: "MeusEventos",
  data() {
    return {
      eventos: [],
      campos: []
    };
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
          enderecoConcat = endKeys.reduce((acc, key) => {
            console.log(item.endereco);
            return acc + ", " + item.endereco[key];
          }, "");

          item.endereco = enderecoConcat;
          this.eventos.push(item);
        });

        this.campos = Object.keys(response.data[0]);
        this.campos = this.campos.slice(1, 6);
      })
      .catch(error =>
        console.log("Error fetching in 'MeusEventos' page: ", error)
      );
  }
};
</script>

<style></style>
