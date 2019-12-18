import React from 'react';
import * as S from './styled';

import logoIcon from '../../../../../assets/logo.png';

const Header = () => (
  <S.Header>
    <S.HeaderIcon src={logoIcon} />
    <S.Title>Add review for App Academy</S.Title>
  </S.Header>
);

export default Header;