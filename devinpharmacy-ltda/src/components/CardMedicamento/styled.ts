import styled from "styled-components";

export const FormCardStyled = styled.form`
  margin-top: 150px;
  font-family: JetBrains Mono;
  width: 100%;
  padding-bottom: 1em;
  bottom: 0;

  .card-controls {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 0.6rem;
    margin-left: 0.6rem;
  }

  .button-styled {
    border: 0;
    padding: 10px;
    width: 200px;
    height: 50px;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
  }
`;
