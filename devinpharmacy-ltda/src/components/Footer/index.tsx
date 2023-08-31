import { FooterStyled } from "./styled";
import { useLogin } from "../../context/useLogin";
import { Button } from "@mui/material";

function Footer() {
  const { logout } = useLogin();

  const handleLogout = () => {
    logout();

    window.location.href = "http://localhost:5173/";
  };

  return (
    <FooterStyled>
      <div>
        <div className="footer-border" />
      </div>
      <ul></ul>
      <div className="button-styled">
        <Button onClick={handleLogout}>Deslogar</Button>{" "}
      </div>
      <a href="#top">© 2023 | DEVinPharmacy</a>
    </FooterStyled>
  );
}

export { Footer };
