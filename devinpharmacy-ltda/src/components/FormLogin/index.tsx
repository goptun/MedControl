import { useForm } from "react-hook-form";
import { useLogin } from "../../context/useLogin";
import { Button, TextField, Box } from "@mui/material";
import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

function FormLogin() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { setValue } = useLogin();
  const [senha, setSenha] = useState("");

  const onSubmit = (dataFromForm: FormValues) => {
    setValue(dataFromForm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src="/logo.svg" alt="Logo" style={{ width: 100, padding: 8 }} />
      <h1
        style={{
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        DEVinPharmacy
      </h1>

      <h5
        style={{
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        Faça Login para acessar o site:
      </h5>
      <TextField
        label="E-mail"
        color="info"
        variant="filled"
        placeholder="nome@mail.com"
        type="email"
        {...register("email")}
        style={{ width: 300, padding: 8 }}
      />
      <TextField
        autoComplete="off"
        type="password"
        className="form-control"
        variant="filled"
        required
        placeholder="Senha"
        inputProps={{ pattern: "^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,30}$" }}
        onChange={(e) => setSenha(e.target.value)}
        style={{ width: 300, padding: 8 }}
      />

      <Box
        component="fieldset"
        sx={{
          marginTop: 1,
          marginBottom: 1,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 12,
          border: "1px solid #ccc",
          width: 265,
          height: 105,
          textAlign: "center",
          padding: 2,
          borderRadius: 1,
        }}
      >
        <span>
          <b>A senha deve conter:</b>
        </span>
        <br />
        <p>{senha.length >= 8 ? "✅" : "⛔"} Mínimo 8 caracteres</p>
        <p>{senha.search(/[a-z]/) !== -1 ? "✅" : "⛔"} Pelo menos 1 letra</p>
        <p>{senha.search(/[0-9]/) !== -1 ? "✅" : "⛔"} Pelo menos 1 número</p>
      </Box>

      <Button type="submit">Entrar</Button>
    </form>
  );
}

export { FormLogin };
