import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colos } from "../styles/Colos";

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 15px;
  position: relative;

  &::after {
    width: calc(100% - 10px);
    height: 0px;
    border-radius: 12px;
    content: '';
    background: ${Colos["white-scale-1"]};
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

const MenuBar = () => {
  return (
    <Menu>
      <MenuItem>
        <Link to="/">Fazer Pedido</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">Contato</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">Localização</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">Mais</Link>
      </MenuItem>
    </Menu>
  );
};

export { MenuBar };
