import React, { useState } from "react";

import { MenuBar } from "../components/MenuBar";
import { SushiMenuItem } from "../components/SushiMenuItem";
import {
  Header,
  LogoBlock,
  Main,
  SaleContainer,
  SuchiContainer,
  ImageBlock,
  SushiMenu,
  ToggleMenu,
} from "../styles/SushiStyle";

import logoTubarao from "../images/logo-tubarao-da-praia-2.png";
import comboOne from "../images/combo1.png";
import comboTwo from "../images/combo2.png";
import comboThree from "../images/combo3.png";
import comboFour from "../images/combo4.png";

const Sushi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <SuchiContainer>
      <Header isOpen={isMenuOpen}>
        <ToggleMenu
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </ToggleMenu>
        <div className="header-wrapper">
          <LogoBlock>
            <img src={logoTubarao} alt="Logo tubarão japa" />
          </LogoBlock>

          <MenuBar isOpen={isMenuOpen} />
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
          <div>
            <SushiMenuItem imagemUri={comboOne} name="Combo 12 peças" />
            <SushiMenuItem imagemUri={comboFour} name="Combo Multi" />
            <SushiMenuItem imagemUri={comboThree} name="Combo Vegan" />
          </div>
        </SushiMenu>
      </Main>
    </SuchiContainer>
  );
};

export { Sushi };
