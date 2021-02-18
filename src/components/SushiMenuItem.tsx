import React from "react";
import styled from "styled-components";

interface IMenuItemProps {
  imagemUri: string;
  name: string;
}

const ItemContainer = styled.div`
  cursor: pointer;
  width: auto;
  heigth: 300px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 90%;
    heigth: 90%;
  }
  &:hover > img {
    filter: blur(2px);
    transition: filter 0.2s;
  }

  & > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;

    font: 700 2.4rem "sans-serif";
    color: #FFF;

    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;

const SushiMenuItem = ({ imagemUri, name }: IMenuItemProps) => {
  return (
    <ItemContainer>
      <img src={imagemUri} alt="Foto ilustrativa" />
      <span>{name}</span>
    </ItemContainer>
  );
};

export { SushiMenuItem };
