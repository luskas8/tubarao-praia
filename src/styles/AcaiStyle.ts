import styled from "styled-components";

import texturaAcai from "../images/textura_acai.png";
import texturaAcaiMain from "../images/textura_main_acai.png";
import { Colos } from "./Colors";

interface IMenu {
  isOpen: boolean;
}

export const AcaiContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header<IMenu>`
  height: 150px;
  background: url("${texturaAcai}");

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
      padding: 0;
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
  width: 350px;

  & > img {
    margin-top: -25px;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1184.99px) {
    margin-top: 25px;
  }
`;

export const Main = styled.div`
  min-height: calc(100vh - 150px);
  background: url("${texturaAcaiMain}");
  background-size: 360px 260px;

  @media only screen and (max-width: 1184.99px) {
    min-height: 100vh;
    max-height: 100vh;
  }
`;

export const SalasContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div > img {
    width: 75%;
  }

  & > div:first-child {
    width: 500px;
  }

  & > div:last-child {
    width: 1200px;
  }

  @media only screen and (max-width: 1184.99px) {
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: center;
    }

    & > div:first-child {
      width: calc(100% - 500px);
    }

    & > div:last-child {
      margin-top: 50px;
      width: 100%;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin: 25px 0 0 0;
  color: ${Colos["white-scale-1"]};

  & > h1 {
    font: 300 2.4rem "sans-serif";
  }

  & > h2 {
    margin: 10px 0;
    font: 300 1.2rem "sans-serif";
  }
  @media only screen and (max-width: 1184.99px) {
    position: absolute;
    bottom: 0;
  }
`;

export const ToggleMenu = styled.div<IMenu>`
  background-color: #fff;
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
