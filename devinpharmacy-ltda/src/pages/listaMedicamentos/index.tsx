import React, { useState, useEffect } from "react";
import { ListaStyled } from "./styled";
import { CardMedicamento } from "../../components/CardMedicamento";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { TextField } from "@mui/material";

interface Medicamento {
  id: number;
  descricao: string;
  medicamento: string;
  dosagem: string;
  preco: number;
  tipo: string;
  laboratorio: string;
}

const ListaMedicamentos: React.FC = () => {
  const listaMedicamentos: Medicamento[] | null = JSON.parse(
    localStorage.getItem("ListaMedicamentos") || "null"
  );
  const [listaAnterior, setListaAnterior] = useState<Medicamento[] | null>(
    JSON.parse(localStorage.getItem("ListaMedicamentos") || "null")
  );
  let novaLista: Medicamento[] | null;

  const [filtrado, setFiltro] = useState<Medicamento[] | null>(
    listaMedicamentos
  );
  const [termo, setTermo] = useState<string>("");

  function apagaMedicamento(id: number) {
    novaLista = listaAnterior?.filter((item) => item.id !== id) || null;
    localStorage.setItem("ListaMedicamentos", JSON.stringify(novaLista));
    setListaAnterior(novaLista);
    alert(`Medicamenoto excluído com sucesso.`);
  }

  useEffect(() => {
    setFiltro(
      listaMedicamentos?.filter((item) =>
        item.medicamento.toLowerCase().includes(termo.toLowerCase())
      ) || null
    );
  }, [termo, listaAnterior]);

  return (
    <ListaStyled>
      <Header />
      <h4>Lista de Medicamentos Cadastrados:</h4>

      <TextField
        className="form-pesquisa"
        variant="filled"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Pesquisar"
      />
      <div className="card-control">
        {filtrado?.map((item) => (
          <CardMedicamento
            excluir={apagaMedicamento}
            key={item.id}
            descricao={item.descricao}
            medicamento={item.medicamento}
            dosagem={item.dosagem}
            preco={item.preco}
            tipo={item.tipo}
            laboratorio={item.laboratorio}
            id={item.id}
          />
        ))}
        {filtrado?.length === 0 ? (
          <div>Este medicamento não está cadastrado.</div>
        ) : null}
      </div>
      <Footer />
    </ListaStyled>
  );
};

export { ListaMedicamentos };
