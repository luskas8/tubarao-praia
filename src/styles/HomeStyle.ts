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
  scroll-behavior: smooth;
  width: 100%;
  min-height: 100vh;

  background: ${Colos["red-scale-1"]};

  position: relative;
  display: flex;

  @media only screen and (max-width: 1600.99px) {
    flex-direction: column;
  }
`;

export const TextBlock = styled.div`
  z-index: 4;
  color: ${Colos["white-scale-1"]};

  &:first-child {
    
  }
  
  & > h1 {
    margin-top: 100px;
    width: 490px;
    text-align: center;
    font: 300 4.4rem 'Fjalla One','sans-serif';
  }
  & > h3 {
    border-radius: 12px 12px 0 0;
    text-align: center;
    font: 300 1.2rem 'sans-serif';
    padding: 12px;
    background: ${Colos["white-scale-2"]};
  }

  @media only screen and (max-width: 1600.99px) {
    & > h1 {
      margin-top: 0;
      width: 350px;
      font-size: 3.4rem;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1600.99px) {
    height: 100vh;
    position: relative;

    & > .svg {
      position: absolute;
      bottom: 0;
      color: ${Colos["white-scale-1"]};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1600.99px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  max-height: 100vh;
  position: relative;

  @media only screen and (max-width: 1600.99px) {
  }
`;

export const AcaiContainer = styled.div<IBackground>`
  width: 50%;
  height: 100vh;
  background: url("${(props) => props.imageUri}") no-repeat center right;
  background-size: cover;
  position: absolute;
  left: 0;

  & > div {
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;

    & > img {
      width: 100%;
      position: absolute;
      left: -25%;
      bottom: -15%;
    }
  }

  & > div > a:last-child {
    color: #fff;
    position: absolute;
    right: 0%;
    display: none;
    transform: rotate(-90deg);
  }

  @media only screen and (max-width: 1600.99px) {
    width: 100%;
    background: ${Colos["purple-scale-1"]};

    & > div {
      justify-content: center;

      & > img {
        width: 70%;
        left: -20%;
        bottom: -15%;
      }
    }

    & > div > a:last-child {
      display: inherit;
    }
  }

  @media only screen and (max-width: 800.99px) {
    & > div {
      & > img {
        width: 100%;
        left: -25%;
        bottom: -10%;
      }
    }
  }
`;

export const ShushiContainer = styled.div`
  width: 50%;
  height: 100vh;
  background: ${Colos["red-scale-1"]};
  background-size: cover;
  position: absolute;
  left: 50%;

  & > div {
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
    justify-content: flex-start;
    align-items: center;

    & > img {
      width: 100%;
      position: absolute;
      right: -4.5%;
      bottom: 0%;
    }
  }

  & > div > a:last-child {
    color: #fff;
    position: absolute;
    left: 0%;
    display: none;
    transform: rotate(90deg);
  }

  @media only screen and (max-width: 1600.99px) {
    width: 100%;
    left: 100%;

    & > div {
      justify-content: center;
    }

    & > div > a:last-child {
      display: inherit;
    }
  }
`;

export const FoodCircle = styled(Link)<IFoodCircle>`
  width: 280px;
  height: 280px;
  font: 400 4.8rem "sans-serif";
  z-index: 4;

  border-radius: 50%;
  margin: ${(props) =>
    props.isSushi
      ? "0 0 calc(100% - 70%) calc(100% - 85%)"
      : "0 calc(100% - 85%) calc(100% - 70%) 0"};

  display: flex;
  justify-content: ${(props) => (props.isSushi ? "flex-end" : "flex-start")};
  align-items: center;
  background: ${(props) =>
    props.isSushi ? Colos["red-scale-2"] : Colos["purple-scale-2"]};

  & > p {
    color: ${Colos["white-scale-1"]};
    margin: ${(props) => (props.isSushi ? "0 -50px 0 0" : "0 0 0 -25px")};
  }

  @media only screen and (max-width: 1600.99px) {
    margin: 0;
    justify-content: center;
    align-items: center;

    & > p {
      margin: 0;
    }
  }
`;
