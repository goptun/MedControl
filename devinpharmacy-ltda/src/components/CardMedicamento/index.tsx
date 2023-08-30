import { useState } from "react";
import { FormCardStyled } from "./styled";

interface CardMedicamentoProps {
  dosagem: string;
  medicamento: string;
  laboratorio: string;
  preco: number;
  tipo: string;
  id: number;
  descricao?: string;
  excluir: (id: number) => void;
}

function CardMedicamento({
  dosagem,
  medicamento,
  laboratorio,
  preco,
  tipo,
  id,
  descricao,
  excluir,
}: CardMedicamentoProps) {
  let novoId = id.toString();

  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  const mostrarDetalhes = () => {
    setDetalhesVisiveis(true);
  };

  const ocultarDetalhes = () => {
    setDetalhesVisiveis(false);
  };

  return (
    <FormCardStyled>
      <h5>{medicamento}</h5>
      <h6>{dosagem}</h6>

      {!detalhesVisiveis && (
        <button onClick={mostrarDetalhes}>Mostrar Detalhes</button>
      )}

      {detalhesVisiveis && (
        <div id={`a${novoId.substring(2, 13)}`}>
          <h5 id={`a${novoId.substring(2, 13)}`}>Detalhes do medicamento:</h5>
          <div>
            <span>
              <b>Medicamento:</b> {medicamento}
            </span>
            <br />
            <span>
              <b>Dosagem:</b> {dosagem}
            </span>
            <br />
            <span>
              <b>Laboratório:</b> {laboratorio}
            </span>
            <br />
            <span>
              <b>Tipo:</b> {tipo}
            </span>
            <br />
            <span>
              <b>Preço:</b> R$ {preco}
            </span>
            <br />
            {descricao ? (
              <span>
                <b>Descrição:</b> {descricao}
                <br />
              </span>
            ) : null}
          </div>
          <button
            onClick={() => {
              excluir(id);
            }}
          >
            Excluir
          </button>
          <button onClick={ocultarDetalhes}>Ocultar Detalhes</button>
        </div>
      )}
    </FormCardStyled>
  );
}

export { CardMedicamento };
