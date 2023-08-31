import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";
import { useLogin } from "../context/useLogin";

function RoutesApp() {
  const { value } = useLogin();

  if (value?.email) {
    return <PrivateRoutes />;
  }
  return <PublicRoutes />;
}

export { RoutesApp };
