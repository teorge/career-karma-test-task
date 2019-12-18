import React from 'react';
import * as S from './styled';

import { Input, Select } from '../../../../fields';

const Review = ({ options }) => (
  <S.Review>
    <Input type='title' />
    <Input type='userReview' />
    <Input type='pros' />
    <Input type='cons' />
    <Select type='school' options={options} />
    <Select type='course' options={options} />
    <Select type='programType' options={options} />
  </S.Review>
);

export default Review;



