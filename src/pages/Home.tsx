import React from "react";

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
import acaiImg from '../images/group_acai.svg';

const Home = () => {
  return (
    <Container>
      <Header>
        <TextBlock>
          <h1>Qual é a sua fome?</h1>
        </TextBlock>
      </Header>
      <AcaiContainer imageUri={bgAcaiImg}>
        <img src={acaiImg} alt="Acai foto ilustrativa"/>
        <FoodCircle to="/" isSushi={false}>
          <p>Açaí</p>
        </FoodCircle>
      </AcaiContainer>
      <ShushiContainer>
        <FoodCircle to="/sushi" isSushi={true}>
          <p>Sushi</p>
        </FoodCircle>
      </ShushiContainer>
      <Footer>
        <TextBlock>
          <h3>Tubarão da Praia</h3>
        </TextBlock>
      </Footer>
    </Container>
  );
};

export { Home };
