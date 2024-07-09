<script setup>
import { listTransactionsService } from "../services/transactions";
import Form from "./Form.vue";
import ListGrid from "./Grid.vue";
import { ref } from "vue";

const gridColumns = [
  "monedaOrigen",
  "monedaDestino",
  "tipoCambio",
  "monto",
  "montoCambiado",
  "fecha",
];

let gridData = ref([]);

const fechaInicio = ref("2024-07-01");
const fechaFinal = ref("2024-07-31");

async function listTransactions() {
  try {
    if (hasValidInput()) {
      console.log(`${fechaInicio.value}, ${fechaFinal.value}`);
    }
    gridData.value = await listTransactionsService(
      fechaInicio.value,
      fechaFinal.value,
    );
    console.log("gridData", gridData);
  } catch (error) {
    console.log("error:", error.message);
    gridData.value = [];
  }
}

function hasValidInput() {
  return fechaInicio.value.trim() && fechaFinal.value.trim();
}
</script>

<template>
  <Form></Form>
  <hr />
  <div>
    <label>Buscar por fecha</label>
    <input name="fechaInicio" v-model="fechaInicio" />
    <input name="fechaFinal" v-model="fechaFinal" />
    <div class="buttons">
      <button @click="listTransactions">Buscar</button>
    </div>
  </div>
  <ListGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </ListGrid>
</template>
