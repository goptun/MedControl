import { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";

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

//A função CardMedicamento recebe como parâmetro um objeto com as seguintes propriedades:
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
  //O id é convertido para string e depois é criada uma nova variável chamada novoId que recebe o id convertido para string.
  let novoId = id.toString();

  const [detalhesVisiveis, setDetalhesVisiveis] = useState(false);

  const mostrarDetalhes = () => {
    setDetalhesVisiveis(true);
  };

  const ocultarDetalhes = () => {
    setDetalhesVisiveis(false);
  };

  // O componente CardMedicamento retorna um Card do Material UI com as informações do medicamento.
  return (
    <Card
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: "5px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "5px",
        margin: "5px",
        fontFamily: "JetBrains Mono, monospace",
        textAlign: "left",
        h5: {
          fontSize: "1rem",
          fontWeight: "bold",
          margin: "5px",
        },
        h6: {
          fontSize: "0.8rem",
          fontWeight: "normal",
          margin: "5px",
        },
        span: {
          fontSize: "0.8rem",
          fontWeight: "normal",
          margin: "5px",
        },

        "@media (max-width: 600px)": {
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto",
          textAlign: "left",
        },
      }}
    >
      <CardContent>
        <h5>{medicamento}</h5>
        <h6>{dosagem}</h6>
        <br />
        {!detalhesVisiveis && (
          <Button onClick={mostrarDetalhes}>Mostrar Detalhes</Button>
        )}

        {detalhesVisiveis && (
          <div id={`a${novoId.substring(2, 13)}`}>
            <h5 id={`a${novoId.substring(2, 13)}`}>Detalhes do medicamento:</h5>
            <br />
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

            <Button
              style={{ margin: "5px" }}
              onClick={() => {
                excluir(id);
              }}
            >
              Excluir
            </Button>
            <Button style={{ margin: "5px" }} onClick={ocultarDetalhes}>
              Ocultar Detalhes
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export { CardMedicamento };
