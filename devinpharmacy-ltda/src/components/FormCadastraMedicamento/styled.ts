import styled from "styled-components";

export const FormCadastraStyled = styled.form`
  margin-top: 100px;
  font-family: JetBrains Mono;
  width: 100%;
  padding-bottom: 1em;
  bottom: 0;

  .form-control1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .form-control2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .form-control3 {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .form-control4 {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  h4 {
    text-align: center;
  }

  .button-styled {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;
