import React from 'react';

import { Rating } from '../../../../fields';
import * as S from './styled';

const ratings = [
  'Overall experience',
  'Job Support',
  'Instructions',
  'Curriculum'
];

const Ratings = () => {
  return (
    <S.Wrapper>
      <S.Header>Ratings</S.Header>
      <S.Items>
        {ratings.map((label, index) => (
          <S.Item key={index}>
            <Rating name={`ratings[${index}]`} label={label} />
          </S.Item>
        ))}
      </S.Items>
    </S.Wrapper>
  );
};

export default Ratings;
