import { useForm } from "react-hook-form";
import { LoginProps } from "./interfaces";
import { useLogin } from "../../context/useLogin";

function Login() {
  const { register, handleSubmit } = useForm();
  const { setValue } = useLogin();
  const onSubmit = (dataFromForm: LoginProps) => {
    setValue(dataFromForm as string);
  };
}
