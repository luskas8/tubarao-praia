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

import fundoShushiImg from "../images/homepage_bg.svg";

const Home = () => {
  return (
    <Container imageUri={fundoShushiImg}>
      <Header>
        <TextBlock>
          <h1>Qual é a sua fome?</h1>
        </TextBlock>
      </Header>
      <AcaiContainer>
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
