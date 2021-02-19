import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import {
  AcaiContainer,
  Container,
  FoodCircle,
  Footer,
  Header,
  ShushiContainer,
  TextBlock,
} from "../styles/HomeStyle";

import bgAcaiImg from "../images/Retângulo Arredondado 1.png";
import acaiImg from "../images/group_acai.svg";
import sushiImg from "../images/home page sushi.png";

const Home = () => {
  return (
    <Container>
      <Header>
        <TextBlock>
          <h1>Qual é a sua FOME ?</h1>
        </TextBlock>
        <a href="#food-section" className="svg">
          <RiArrowDownSLine size={85} />
        </a>
      </Header>
      <section id="food-section">
        <AcaiContainer imageUri={bgAcaiImg} id="acai">
          <div>
            <img src={acaiImg} alt="Acai foto ilustrativa" />
            <FoodCircle to="/acai" isSushi={false}>
              <p>Açaí</p>
            </FoodCircle>
            <a href="#sushi" className="svg">
              <RiArrowDownSLine size={85} />
            </a>
          </div>
        </AcaiContainer>
        <ShushiContainer id="sushi">
          <div>
            <img src={sushiImg} alt="Sushi foto ilustrativa" />
            <FoodCircle to="/sushi" isSushi={true}>
              <p>Sushi</p>
            </FoodCircle>
            <a href="#acai" className="svg">
              <RiArrowDownSLine size={85} />
            </a>
          </div>
        </ShushiContainer>
      </section>
      <Footer>
        <TextBlock>
          <h3>Tubarão da Praia</h3>
        </TextBlock>
      </Footer>
    </Container>
  );
};

export { Home };
