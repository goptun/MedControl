import { useState, useEffect } from "react";
import { useDadosFarmacia } from "../../context/dadosFarmacia";
import { FormCadastraFarmaciaStyled } from "./styled";
import { Button, TextField } from "@mui/material";

interface FormCadastraFarmaciaProps {
  logradouro: string;
  localidade: string;
  bairro: string;
  uf: string;
  lat: string;
  lng: string;
}

function FormCadastraFarmacia({
  logradouro,
  localidade,
  bairro,
  uf,
  lat,
  lng,
}: FormCadastraFarmaciaProps) {
  //Variável que armazena os dados da farmácia
  const { cepInformado, setCepInformado } = useDadosFarmacia();
  const [farmacia, setFarmacia] = useState<any>({});

  //Array que armazena as farmácias cadastradas no localStorage
  let listaFarmacias: any[] = JSON.parse(
    localStorage.getItem("ListaFarmacias") || "[]"
  );
  useEffect(() => {
    setFarmacia({
      id: Math.random(),
      logradouro,
      bairro,
      cidade: localidade,
      estado: uf,
      latitude: lat,
      longitude: lng,
    });
  }, [cepInformado, bairro, localidade, logradouro, uf, lat, lng]);

  //Aqui a função armazena no localStorage por array os dados da farmácia cadastrada
  function armazenaFarmacia() {
    const newFarmacia = {
      ...farmacia,
      id: Math.random(),
    };
    listaFarmacias.push(newFarmacia);
    localStorage.setItem("ListaFarmacias", JSON.stringify(listaFarmacias));
    document.getElementById("reset")?.click();
    alert("Farmácia cadastrada!");
  }

  return (
    //Retorna o formulário de cadastro de farmácia
    <div onLoad={() => document.getElementById("reset")?.click()}>
      <FormCadastraFarmaciaStyled
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          armazenaFarmacia();
        }}
      >
        <h4>Cadastro Farmácia:</h4>
        <div className="form-control1">
          <TextField
            id=""
            className="razao-social"
            variant="filled"
            color="info"
            label="Razão Social"
            placeholder="Informe a razão social"
            value={farmacia.razao || ""}
            type="text"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, razao: e.target.value })
            }
          />
        </div>
        <div className="form-control2">
          <TextField
            className="cnpj"
            variant="filled"
            color="info"
            label="CNPJ"
            type="number"
            placeholder="00.000.000/0000-00"
            required
            InputProps={{ inputMode: "numeric" }}
            inputProps={{ minLength: 14 }}
            onChange={(e) => setFarmacia({ ...farmacia, cnpj: e.target.value })}
          />
          <TextField
            className="nome-fantasia"
            variant="filled"
            color="info"
            label="Nome Fantasia"
            value={farmacia.nome || ""}
            type="text"
            placeholder="Informe o nome fantasia"
            required
            onChange={(e) => setFarmacia({ ...farmacia, nome: e.target.value })}
          />
        </div>
        <div className="form-control3">
          <TextField
            className="email"
            variant="filled"
            color="info"
            label="E-mail"
            value={farmacia.email || ""}
            type="email"
            placeholder="nome@email.com"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, email: e.target.value })
            }
          />
          <TextField
            className="telefone"
            variant="filled"
            color="info"
            label="Telefone"
            value={farmacia.telefone || ""}
            type="phone"
            placeholder="(99) 9999-9999"
            onChange={(e) =>
              setFarmacia({ ...farmacia, telefone: e.target.value })
            }
          />
          <TextField
            className="celular"
            variant="filled"
            color="info"
            label="Celular"
            value={farmacia.celular || ""}
            type="phone"
            placeholder="(99) 9.9999-9999"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, celular: e.target.value })
            }
          />
        </div>
        <div className="form-control4">
          <TextField
            className="cep"
            variant="filled"
            color="info"
            label="CEP"
            type="number"
            placeholder="Apenas números {8}"
            required
            onChange={(e) => {
              const inputValue = e.target.value;
              if (/^\d{8}$/.test(inputValue)) {
                setCepInformado(inputValue);
              }
            }}
          />
          <TextField
            className="logradouro"
            variant="filled"
            color="info"
            label="Logradouro"
            value={farmacia.logradouro || ""}
            type="text"
            placeholder="Rua/Avenida/Travessa . . ."
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, logradouro: e.target.value })
            }
          />
          <TextField
            className="numero"
            variant="filled"
            color="info"
            label="Nº"
            value={farmacia.numero || ""}
            type="number"
            placeholder="0000"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, numero: e.target.value })
            }
          />
          <TextField
            className="complemento"
            variant="filled"
            color="info"
            label="Complemento"
            value={farmacia.complemento || ""}
            type="text"
            placeholder="Perto do estabelecimento . . . "
            onChange={(e) =>
              setFarmacia({ ...farmacia, complemento: e.target.value })
            }
          />
        </div>
        <div className="form-control3">
          <TextField
            className="bairro"
            variant="filled"
            color="info"
            label="Bairro"
            value={farmacia.bairro || ""}
            type="text"
            placeholder="Informe o bairro"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, bairro: e.target.value })
            }
          />
          <TextField
            className="cidade"
            variant="filled"
            color="info"
            label="Cidade"
            value={farmacia.cidade || ""}
            type="text"
            placeholder="Informe a cidade"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, cidade: e.target.value })
            }
          />

          <TextField
            className="estado"
            variant="filled"
            color="info"
            label="Estado"
            value={farmacia.estado || ""}
            type="text"
            placeholder="Informe o estado"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, estado: e.target.value })
            }
          />
        </div>
        <div className="form-control2">
          <TextField
            className="latitude"
            variant="filled"
            color="info"
            label="Latitude"
            value={farmacia.latitude || ""}
            type="text"
            placeholder="Informe a latitude"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, latitude: e.target.value })
            }
          />
          <TextField
            className="longitude"
            variant="filled"
            color="info"
            label="Longitude"
            value={farmacia.longitude || ""}
            type="text"
            placeholder="Informe a longitude"
            required
            onChange={(e) =>
              setFarmacia({ ...farmacia, longitude: e.target.value })
            }
          />
        </div>

        <div className="button-styled">
          <Button
            className="button-styled"
            type="reset"
            onClick={() => {
              setFarmacia({
                logradouro: "",
                bairro: "",
                cidade: "",
                estado: "",
                latitude: "",
                longitude: "",
              });
            }}
          >
            Limpar
          </Button>
        </div>

        <div className="button-styled">
          <Button type="submit" className="button-styled">
            Cadastrar
          </Button>{" "}
        </div>
      </FormCadastraFarmaciaStyled>
    </div>
  );
}

export { FormCadastraFarmacia };
