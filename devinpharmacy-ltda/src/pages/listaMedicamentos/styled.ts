import styled from "styled-components";

export const ListaStyled = styled.form`
  margin-top: 100px;
  font-family: JetBrains Mono;
  width: 100%;
  padding-bottom: 1em;
  bottom: 0;

  .card-control {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .form-pesquisa {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  h4 {
    text-align: center;
  }
`;
