<script setup>
import { ref } from "vue";
import { changeCurrencyService } from "../services/transactions";

const amount = ref("100");
const currentSource = ref("USD");
const currentDestination = ref("PEN");
const amountChanged = ref(" ");

async function changeCurrency() {
  if (hasValidInput()) {
    console.log(
      `${amount.value}, ${currentSource.value}, ${currentDestination.value}`,
    );
  }

  const data = await changeCurrencyService({
    monto: Number(amount.value),
    monedaOrigen: currentSource.value,
    monedaDestino: currentDestination.value,
  });
  amountChanged.value = data.montoCambiado;
}

function hasValidInput() {
  return (
    amount.value.trim() &&
    currentSource.value.trim() &&
    currentDestination.value.trim()
  );
}
</script>

<template>
  <div><label>Monto: </label> <input v-model="amount" /></div>
  <div><label>Moneda origen: </label> <input v-model="currentSource" /></div>
  <div>
    <label>Moneda destino: </label> <input v-model="currentDestination" />
  </div>
  <div><label>Monto cambiado: </label> <input v-model="amountChanged" /></div>

  <div class="buttons">
    <button @click="changeCurrency">Calcular cambio</button>
  </div>
</template>

<style>
* {
  font-size: inherit;
}

.buttons {
  clear: both;
}

button + button {
  margin-left: 5px;
}
</style>
