import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
  font-family: JetBrains Mono;
  width: 100%;
  margin-top: 2em;
  padding-bottom: 1em;
  bottom: 0;
  position: fixed;

  .button-styled {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .footer-border {
    width: 90%;
    border: 1px solid #fff;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 1em;
  }
  li {
    list-style: none;
    margin: 0 2em;
  }

  li:hover {
    color: #fff;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffff;
    margin: 1em 4em;
  }

  a:hover {
    color: #fff;
    transform: scale(1.05);
    transition: transform 0.5s;
  }

  @media (max-width: 590px) {
    a {
      font-size: 13px;
    }

    ul {
      display: block;
    }

    li {
      white-space: nowrap;
    }

    a {
      margin: 1em 2em;
    }
  }
`;

export { FooterStyled };

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
