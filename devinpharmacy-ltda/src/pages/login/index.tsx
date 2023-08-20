import { useForm } from "react-hook-form";
import { useApp } from "../../hooks/useApp";
import { Button, TextField } from "@mui/material";
// import { Send } from "@mui/material/Icon";

function Login() {
  const { register, handleSubmit } = useForm();
  const { setValue } = useApp();

  const onSubmit = (dataFromForm) => {
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
      <TextField
        label="E-mail"
        color="info"
        // focused
        variant="filled"
        type="email"
        {...register("email")}
        style={{ width: 300, padding: 8 }}
      />
      <TextField
        label="Senha"
        color="info"
        // focused
        variant="filled"
        type="password"
        {...register("password")}
        style={{ width: 300, padding: 8 }}
      />
      {/* endIcon={<Send />} */}
      <Button type="submit" value="Submit">
        Enviar
      </Button>
    </form>
  );
}

export { Login };
