import React from 'react';
import { MenuBar } from '../components/MenuBar';
import {
  AcaiContainer,
  Header,
  LogoBlock
} from '../styles/AcaiStyle';

import logoTubarao from '../images/logo-tubarao-praia.png';

const Acai = () => {
  return (
    <AcaiContainer>
      <Header>
        <div>
          <LogoBlock>
            <img src={logoTubarao} alt="Logo tubarão praia"/>
          </LogoBlock>

          <MenuBar praiaStyle={true}/>
        </div>
      </Header>
    </AcaiContainer>
  );
};

export { Acai };