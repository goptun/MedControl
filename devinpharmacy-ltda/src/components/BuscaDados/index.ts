function BuscaDados(): void {
  let primeiraFarmacia = [
    {
      id: Math.random(),
      razao: "CIA LATINO AMERICANA DE MEDICAMENTOS",
      cnpj: "84683481030599",
      nome: "FARMACIA PRECO POPULAR",
      email: "contato@farmaciapopular.com.br",
      telefone: "(48) 3333-3333",
      celular: "(48) 9999-9999",
      cep: "88035000",
      logradouro: "Av. Madre Benvenuta",
      numero: "956",
      bairro: "Santa Monica",
      cidade: "Florianopolis",
      estado: "SC",
      complemento: "",
      latitude: "-27.59105103459484",
      longitude: "-48.511791875125546",
    },
  ];

  let primeiroMedicamento = [
    {
      id: Math.random(),
      medicamento: "Aspirina",
      dosagem: "500mg",
      laboratorio: "Bayer",
      tipo: "Medicamento comum",
      descricao:
        "A Aspirina é indicada para o alívio sintomático de dores de intensidade leve a moderada, como dor de cabeça, dor de dente, dor de garganta, dor menstrual, dor muscular, dor nas articulações, dor nas costas, dor da artrite.",
      preco: "9,99",
    },
  ];

  if (localStorage.getItem("ListaFarmacias")) {
    console.log(`Farmácias carregadas com sucesso.`);
  } else {
    localStorage.setItem("ListaFarmacias", JSON.stringify(primeiraFarmacia));
  }
  if (localStorage.getItem("ListaMedicamentos")) {
    console.log(`Medicamentos carregados com sucesso.`);
  } else {
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(primeiroMedicamento)
    );
  }
  return console.log(`Dados inicializados com sucesso`);
}

export { BuscaDados };
