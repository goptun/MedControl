import { Header } from "../../components/Header";
import { ErrorStyled } from "./styled";
function NaoEncontrado() {
  return (
    <>
      <Header />
      <ErrorStyled>
        <div>
          <h4>Error 404 - Página não encontrada</h4>
        </div>
      </ErrorStyled>
    </>
  );
}
export { NaoEncontrado };
