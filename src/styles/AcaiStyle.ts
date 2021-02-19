import styled from "styled-components";

import texturaAcai from "../images/textura_acai.png";
import texturaAcaiMain from "../images/textura_main_acai.png";
import { Colos } from "./Colors";

export const AcaiContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  height: 150px;
  background: url("${texturaAcai}");

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 220px;
    padding: 25px 120px 25px 120px;
  }
`;

export const LogoBlock = styled.div`
  width: 350px;

  & > img {
    margin-top: -25px;
    width: 100%;
    height: 100%;
  }
`;

export const Main = styled.div`
  min-height: calc(100vh - 150px);
  background: url("${texturaAcaiMain}");
  background-size: 360px 260px;
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
`;

export const Footer = styled.footer`
  text-align: center;
  margin: 25px 0 0 0;
  color: ${Colos["white-scale-1"]};

  & > h1 {
    font: 300 2.4rem 'sans-serif';
  }

  & > h2 {
    margin: 10px 0;
    font: 300 1.2rem 'sans-serif';
  }
`;
