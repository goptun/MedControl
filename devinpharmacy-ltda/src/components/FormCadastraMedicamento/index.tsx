import { useState } from "react";
import { FormCadastraStyled } from "./styled";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface Medicamento {
  id: number;
  medicamento: string;
  laboratorio: string;
  dosagem: string;
  preco: string;
  tipo: string;
  descricao: string;
}

const FormCadastraMedicamento: React.FC = () => {
  const [medicamento, setMedicamento] = useState<Medicamento>({
    id: Math.random(),
    medicamento: "",
    laboratorio: "",
    dosagem: "",
    preco: "",
    tipo: "",
    descricao: "",
  });

  const listaMedicamentos: Medicamento[] = JSON.parse(
    localStorage.getItem("ListaMedicamentos") || "[]"
  );

  const armazenaMedicamento = (e: React.FormEvent) => {
    e.preventDefault();
    listaMedicamentos.push(medicamento);
    localStorage.setItem(
      "ListaMedicamentos",
      JSON.stringify(listaMedicamentos)
    );
    document.getElementById("reset")?.click();
    alert("Medicamento cadastrado!");
  };

  return (
    <FormCadastraStyled autoComplete="off" onSubmit={armazenaMedicamento}>
      <h4>Novo Medicamento:</h4>
      <div className="form-control2">
        <TextField
          variant="filled"
          color="info"
          label="Medicamento"
          placeholder="Insira o nome do medicamento"
          className="form-control"
          value={medicamento.medicamento || ""}
          type="text"
          required
          onChange={(e) =>
            setMedicamento({ ...medicamento, medicamento: e.target.value })
          }
        />
        <TextField
          variant="filled"
          color="info"
          label="Laboratório"
          placeholder="Insira o laboratório"
          className="form-control"
          value={medicamento.laboratorio || ""}
          type="text"
          required
          onChange={(e) =>
            setMedicamento({ ...medicamento, laboratorio: e.target.value })
          }
        />
      </div>
      <div className="form-control3">
        <TextField
          variant="filled"
          color="info"
          label="Dosagem"
          placeholder="Insira o laboratório"
          className="form-control"
          value={medicamento.dosagem || ""}
          type="text"
          required
          onChange={(e) =>
            setMedicamento({ ...medicamento, dosagem: e.target.value })
          }
        />
        <TextField
          variant="filled"
          color="info"
          label="Preço Unitário"
          placeholder="Insira o preço unitário"
          className="form-control"
          value={medicamento.preco || ""}
          type="text"
          required
          onChange={(e) =>
            setMedicamento({ ...medicamento, preco: e.target.value })
          }
        />
        <FormControl
          fullWidth
          variant="filled"
          color="info"
          required
          style={{ marginBottom: "20px" }}
        >
          <InputLabel>Selecione o tipo do medicamento</InputLabel>
          <Select
            value={medicamento.tipo}
            onChange={(e) =>
              setMedicamento({ ...medicamento, tipo: e.target.value })
            }
          >
            <MenuItem value="Medicamento controlado">
              Medicamento controlado
            </MenuItem>
            <MenuItem value="Medicamento comum">Medicamento comum</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-control1">
        <TextField
          variant="filled"
          color="info"
          label="Descrição"
          multiline
          maxRows={10}
          placeholder="Insira a descrição"
          value={medicamento.descricao || ""}
          fullWidth
          inputProps={{
            maxLength: 870,
          }}
          onChange={(e) =>
            setMedicamento({ ...medicamento, descricao: e.target.value })
          }
        />
      </div>
      <div className="button-styled">
        <Button
          type="reset"
          onClick={() => {
            setMedicamento({
              id: Math.random(),
              medicamento: "",
              laboratorio: "",
              dosagem: "",
              preco: "",
              tipo: "",
              descricao: "",
            });
          }}
        >
          Limpar
        </Button>
      </div>
      <div className="button-styled">
        <Button type="submit">Cadastrar</Button>
      </div>
    </FormCadastraStyled>
  );
};

export { FormCadastraMedicamento };
