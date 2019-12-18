import React from 'react';
import * as S from './styled';

import { Input } from '../../../../fields';

const MainInfo = () => (
  <S.MainInfo>
    <Input type="firstName" />
    <Input type="lastName" />
    <Input type="email" />
  </S.MainInfo>
);

export default MainInfo;