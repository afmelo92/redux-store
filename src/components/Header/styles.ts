import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Switcher = styled(Switch)``;

export const Container = styled.nav`
  background: ${props => props.theme.color.primary};
  height: 100px;
  display: flex;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: 1;
  align-items: center;
  margin: -25px auto;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  height: 100%;

  img {
    margin-left: 30px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    svg {
      color: ${props => props.theme.color.text};
    }
    &:hover,
    &:focus {
      svg {
        color: ${props => lighten(0.3, props.theme.color.text)};
      }
    }
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  img {
    margin: 0 0 0 auto;
    width: 40px;
    height: 40px;
  }

  h1 {
    margin: 0 auto 0 -22px;
    font-size: 30px;
    color: ${props => props.theme.color.text};
  }
`;

export const NavItems = styled.div`
  display: flex;
  /* margin-right: 30px; */
  height: 100%;
  align-items: center;

  a {
    height: 100%;

    h3 {
      font-size: 18px;
      font-weight: bold;
      color: ${props => props.theme.color.text};

      /* margin: 0 20px; */
      padding: 35px 30px;

      transition: 0.2s ease-in;
    }
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => lighten(0.1, props.theme.color.primary)};
      color: ${props => props.theme.color.text};
      border-bottom: 5px solid ${props => props.theme.color.secondary};
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover,
  &:focus {
    opacity: 0.7;
    svg {
      color: ${props => lighten(0.1, props.theme.color.text)};
      opacity: 1;
    }
  }

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      font-size: 15px;
      display: flex;
      color: ${props => props.theme.color.text};
    }
    span {
      font-size: 12px;
      color: ${props => props.theme.color.secondary};
    }
  }
`;
