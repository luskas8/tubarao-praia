import styled from "styled-components";
import { Colos } from "./Colos";

import texturaSushi from '../images/textura_sushi.png';

export const SuchiContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: url("${texturaSushi}");

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 220px;
    padding: 25px 120px 25px 120px;
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
    height: 100%;
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
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));

    margin-top: 80px;
  }
`;
