import React from "react";

import { MenuBar } from "../components/MenuBar";
import { SushiItem } from "../components/SushiItem";
import {
  Header,
  LogoBlock,
  Main,
  SaleContainer,
  SuchiContainer,
  ImageBlock,
  SushiMenu,
} from "../styles/Sushi";

import comboOne from "../images/combo1.png";
import comboTwo from "../images/combo2.png";

const Sushi = () => {
  return (
    <SuchiContainer>
      <Header>
        <div>
          <LogoBlock>
            <img src={comboOne} alt="Logo japa" />
          </LogoBlock>

          <MenuBar />
        </div>
      </Header>

      <Main>
        {/* SaleContainer -> div para promoções */}
        <SaleContainer>
          <h2>
            <span>50%</span> OFF
          </h2>
          <ImageBlock>
            <img src={comboTwo} alt="Combo 2 sushi" />
          </ImageBlock>
        </SaleContainer>

        <SushiMenu>
          <h1>Conheça nosso Menu!</h1>

          <SushiItem />
        </SushiMenu>
      </Main>
    </SuchiContainer>
  );
};

export { Sushi };
