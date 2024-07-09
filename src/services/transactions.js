import axios from "axios";

const KAMBISTA_API = "https://5ma4a4rip8.execute-api.us-east-1.amazonaws.com/";

export const listTransactionsService = async (fechaInicio, fechaFinal) => {
  const result = await axios.get(
    KAMBISTA_API +
      `transactions?fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}`,
  );
  console.log("Response", result.data.length);
  const data = result.data;

  return data.map((element) => ({
    id: element?.id || "",
    monedaOrigen: element?.monedaOrigen || "",
    monedaDestino: element?.monedaDestino || "",
    tipoCambio: element?.tipoCambio || 0.0,
    monto: element?.monto || 0,
    montoCambiado: element?.montoCambiado || 0.0,
    fecha: element?.fecha || "",
  }));
};

export const changeCurrencyService = async (data) => {
  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(
    KAMBISTA_API + "transactions/change-currency",
    JSON.stringify(data),
    customConfig,
  );

  return response.data;
};
