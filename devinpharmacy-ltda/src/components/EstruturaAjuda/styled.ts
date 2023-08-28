import styled from "styled-components";

export const EstruturaStyled = styled.form`
  margin-top: 100px;
  font-family: JetBrains Mono;
  width: 100%;
  padding-bottom: 1em;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.6rem;

  .box-control {
    margin: 0 auto;
    width: 90%;
    grid-template-columns: 1fr;
  }

  h1,
  h4,
  p {
    text-align: center;
  }
`;
