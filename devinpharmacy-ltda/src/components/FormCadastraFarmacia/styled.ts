import styled from "styled-components";

export const FormCadastraFarmaciaStyled = styled.form`
  margin-top: 100px;
  font-family: JetBrains Mono;
  width: 100%;
  padding-bottom: 1em;
  bottom: 0;

  .form-control1,
  .form-control2,
  .form-control3,
  .form-control4 {
    display: grid;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .form-control1 {
    grid-template-columns: 1fr;
  }

  .form-control2 {
    grid-template-columns: 1fr 1fr;
  }

  .form-control3 {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .form-control4 {
    grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
  }

  h4 {
    text-align: center;
  }

  .button-styled {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .form-control1,
    .form-control2,
    .form-control3,
    .form-control4 {
      grid-template-columns: 1fr;
    }
  }
`;
