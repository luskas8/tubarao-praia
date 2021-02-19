import { Link } from "react-router-dom";
import styled from "styled-components";

import { Colos } from "./Colors";

interface IFoodCircle {
  isSushi: boolean;
}

interface IBackground {
  imageUri: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background: ${Colos["red-scale-1"]};

  display: flex;
  position: relative;

  @media only screen and (max-width: 799.99px) {
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  color: ${Colos["white-scale-1"]};
  & > h1 {
    text-align: center;
  }
  & > h3 {
    border-radius: 12px 12px 0 0;
    text-align: center;
    padding: 12px;
    background: ${Colos["white-scale-2"]};
  }
`;

export const Header = styled.header`
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AcaiContainer = styled.div<IBackground>`
  width: 50%;
  height: 100vh;
  position: relative;

  background: url('${(props) => (props.imageUri)}') no-repeat center right;
  background-size: cover;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  
  & > img {
    z-index: 0;
    position: absolute;
    bottom: -150px;
    left: -320px;
    width: 120%;
  }

  @media only screen and (max-width: 799.99px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ShushiContainer = styled.div`
  width: 50%;
  height: 100vh;
  z-index: 4;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 799.99px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FoodCircle = styled(Link)<IFoodCircle>`
  width: 280px;
  height: 280px;
  font: 400 4.8rem "sans-serif";
  z-index: 4;

  border-radius: 50%;
  margin: ${(props) =>
    props.isSushi ? "0 0 calc(100% - 70%) calc(100% - 85%)" : "0 calc(100% - 85%) calc(100% - 70%) 0"};

  display: flex;
  justify-content: ${(props) => (props.isSushi ? "flex-end" : "flex-start")};
  align-items: center;
  background: ${(props) =>
    props.isSushi ? Colos["red-scale-2"] : Colos["purple-scale-2"]};

  & > p {
    color: ${Colos["white-scale-1"]};
    margin: ${(props) => (props.isSushi ? "0 -50px 0 0" : "0 0 0 -25px")};
  }

  @media only screen and (max-width: 799.99px) {
    margin: 0;
    justify-content: ${(props) => (props.isSushi ? "center" : "center")};
    align-items: center;

    & > p {
      margin: 0;
    }
  }
`;
