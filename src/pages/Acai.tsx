import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MenuBar } from "../components/MenuBar";
import {
  AcaiContainer,
  Header,
  LogoBlock,
  Main,
  SalasContainer,
  Footer,
} from "../styles/AcaiStyle";

import logoTubarao from "../images/logo-tubarao-praia.png";
import melhorBarca from "../images/melhor-acai.png";
import barcaImg from "../images/barca.png";
import { ToggleMenu } from "../styles/SushiStyle";

const Acai = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <AcaiContainer>
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
            <img src={logoTubarao} alt="Logo tubarão praia" />
          </LogoBlock>

          <MenuBar praiaStyle={true} />
        </div>
      </Header>

      <Main>
        <SalasContainer>
          <div>
            <img src={melhorBarca} alt="Melhor barca" />
          </div>
          <div>
            <img src={barcaImg} alt="Barca de açaí" />
          </div>
        </SalasContainer>
        <Footer>
          <h1>Conheça nosso Menu!</h1>
          <h2>
            Adicione o pedido e depois escolha a forma de pagamento e a forma de
            entrega
          </h2>
          <RiArrowDownSLine size={35} />
        </Footer>
      </Main>
    </AcaiContainer>
  );
};

export { Acai };
