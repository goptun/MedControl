import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  background-color: blue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 3rem;
    margin: 5px 5px 5px 0px;

    @media (max-width: 768px) {
      max-width: 2rem;

      &:hover {
        max-width: 2.5rem;
      }
    }

    @media (max-width: 576px) {
      max-width: 2rem;

      &:hover {
        max-width: 2.5rem;
      }
    }

    @media (max-width: 320px) {
      max-width: 2rem;

      &:hover {
        max-width: 2.5rem;
      }
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
    li {
      margin: 0 0.5rem;
      text-align: center;
    }

    a {
      font-family: JetBrains Mono, monospace;
      font-size: 1rem;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      &:hover {
        color: #ccc;
      }

      &:active {
        color: #aaa;
      }

      @media (max-width: 768px) {
        font-size: 0.75rem;
      }

      @media (max-width: 576px) {
        font-size: 0.6rem;
      }

      @media (max-width: 320px) {
        font-size: 0.5rem;
      }
    }
  }
`;
