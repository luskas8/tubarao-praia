import styled from "styled-components";
import { Colos } from "./Colors";

import texturaSushi from '../images/textura_sushi.png';

interface IMenuProps {
  isOpen: boolean;
}

export const SuchiContainer = styled.div`
  background: url("${texturaSushi}");
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header<IMenuProps>`
  & > .header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 220px;
    padding: 25px 120px 25px 120px;
  }

  @media only screen and (max-width: 1184.99px) {
    & > .header-wrapper {
      flex-direction: column;
      gap: 15px;
    }
  }

  @media only screen and (max-width: 800.99px) {
    position: fixed;
    width: 100%;
    height: 100%;
    margin-left: ${(props) => (props.isOpen ? "0" : "-100%")};
    z-index: 99;
    transition: margin 0.2s ease-out;
    -webkit-transition: margin 0.2s ease-out;
    -moz-transition: margin 0.2s ease-out;
    -ms-transition: margin 0.2s ease-out;
    -o-transition: margin 0.2s ease-out;
  }
`;

export const LogoBlock = styled.div`
  width: 220px;
  heigth: 220px;
  padding: 0 0 25px 0;

  & > img {
    width: 100%;
    heigth: 100%;
  }
`;

export const Main = styled.main`
  width: 100%;
`;

export const SaleContainer = styled.div`
  position: relative;
  min-height: 600px;
  background: ${Colos["gray-scale-1"]};

  display: flex;
  justify-content: center;

  overflow: hidden;

  & > h2 {

  }
  `;
  
  export const ImageBlock = styled.div`
  width: 1100px;
  position: absolute;
  top: -250px;
  right: 0;

  & > img {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 800.99px) {
    width: 100%;
    top: 10%;
  }
  @media only screen and (max-width: 600.99px) {
    top: 50%;
  }
`;

export const SushiMenu = styled.div`
  width: 100%;
  background: url("${texturaSushi}");
  padding: 80px 20px 0 20px;

  & > h1 {
    font: 300 2.4rem 'sans-serif';
    color: ${Colos["white-scale-3"]};
    text-align: center;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));

    margin-top: 80px;
  }

  @media only screen and (max-width: 600.99px) {
    & > div {
      gap: 35px;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
  }
`;

export const ToggleMenu = styled.div<IMenuProps>`
  background-color: #FFF;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 40px;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  padding: 2px 2px 2px 3px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  transition: right 0.2s ease-out;
  -webkit-transition: right 0.2s ease-out;
  -moz-transition: right 0.2s ease-out;
  -ms-transition: right 0.2s ease-out;
  -o-transition: right 0.2s ease-out;
  & > .line {
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #000;
    transition: transform 0.2s ease-out;
    -webkit-transition: transform 0.2s ease-out;
    -moz-transition: transform 0.2s ease-out;
    -ms-transition: transform 0.2s ease-out;
    -o-transition: transform 0.2s ease-out;
  }
  @media only screen and (max-width: 970.99px) {
    display: flex;
  }
  ${(props) =>
    props.isOpen
      ? `
      & > .line1 {
        background-color: #000;
        transform: scale(0.9) rotateZ(-45deg) translate(-8px, 6px);
      }
    
      & > .line2 {
        display: none;
      }
    
      & > .line3 {
        background-color: #000;
        transform: scale(0.9) rotateZ(45deg) translate(-8px, -6px);
      }
    `
      : `
        z-index: 99;
        right: calc(100% - 60px);
      `}
`;
