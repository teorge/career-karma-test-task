import React from "react";

import { Checkbox } from "../../../../fields";
import * as S from "./styled";

const tuitionPayments = [
  "Upfront",
  "ISA",
  "Financing",
  "Scholarship",
  "Stipend"
];

const Tuitions = () => {
  return (
    <S.Tuitions>
      <S.Title>Tuition payment</S.Title>
      <S.Checkboxes>
        {tuitionPayments.map((tuition, i) => (
          <S.Tuition key={i}>
            <Checkbox name={`tuitions[${i}]`} label={tuition} />
          </S.Tuition>
        ))}
      </S.Checkboxes>
    </S.Tuitions>
  );
};

export default Tuitions;
