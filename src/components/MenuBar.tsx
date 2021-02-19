import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colos } from "../styles/Colors";

interface IMenuBarProps {
  praiaStyle?: boolean;
  isOpen?: boolean;
}

interface IMenu {
  isOpen?: boolean;
}

const Menu = styled.div<IMenu>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 800.99px) {
    flex-direction: column;
  }
  `;

const MenuItem = styled.div<IMenuBarProps>`
  padding: 15px;
  position: relative;

  &::after {
    width: calc(100% - 10px);
    height: 0px;
    border-radius: 12px;
    content: '';
    background: ${(props) => (props.praiaStyle ? Colos["green-scale-1"] : Colos["white-scale-1"])};
    position: absolute;
    left: 5px;
    rigth: 5px;
    bottom: 0;

    transition: height .2s;
  }

  &:hover::after {
    height: 5px;
  }

  & > a {
    color: ${Colos["white-scale-1"]};
    font: 700 1.6rem 'sans-serif';
  }
`;

const MenuBar = ({praiaStyle = false, isOpen: isMenuOpen}: IMenuBarProps) => {
  return (
    <Menu isOpen={isMenuOpen}>
      <MenuItem praiaStyle={praiaStyle} >
        <Link to="/">Fazer Pedido</Link>
      </MenuItem>
      <MenuItem praiaStyle={praiaStyle} >
        <Link to="/">Contato</Link>
      </MenuItem >
      <MenuItem praiaStyle={praiaStyle} >
        <Link to="/">Localização</Link>
      </MenuItem >
      <MenuItem praiaStyle={praiaStyle} >
        <Link to="/">Mais</Link>
      </MenuItem >
    </Menu>
  );
};

export { MenuBar };
