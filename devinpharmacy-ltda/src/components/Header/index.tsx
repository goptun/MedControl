import { HeaderStyled, NavStyled, LinkStyled } from "./styled";
function Header() {
  const pages = [
    {
      route: "/cadastra-farmacia",
      description: "Cadastrar Farmácia",
    },
    {
      route: "/cadastra-medicamentos",
      description: "Cadastrar Medicamento",
    },
    {
      route: "/lista-medicamentos",
      description: "Lista Medicamentos",
    },
    {
      route: "/ajuda",
      description: "Ajuda",
    },
    {
      route: "/mapa",
      description: "Mapa",
    },
  ];
  return (
    <HeaderStyled>
      <NavStyled>
        <img src="/logo.svg" alt="MedControl" />
        <a href="/">MedControl</a>
      </NavStyled>

      <NavStyled>
        <ul>
          {pages.map(({ route, description }) => (
            <li key={description}>
              <LinkStyled to={route}>{description}</LinkStyled>
            </li>
          ))}
        </ul>
      </NavStyled>
    </HeaderStyled>
  );
}
export { Header };
