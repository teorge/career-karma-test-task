import React from "react";
import { Field } from "formik";
import { DatePicker } from "antd";

import Label from "../Label";
import * as S from "./styled";
import inputs from "../../../utils/reviewFormInputs";

const StyledDatePicker = ({ form, field, extra }) => {
  const { name } = field;
  const { touched } = form;
  const { label, ...restExtra } = extra;
  return (
    <S.Wrapper>
      <div>
        {label && (
          <Label value={label} htmlFor={name} touched={touched[name]} />
        )}
      </div>
      <DatePicker {...restExtra} />
    </S.Wrapper>
  );
};

const DatePickerField = ({ type }) => {
  const { name, ...rest } = inputs[type];
  return (
    <Field name={name}>
      {p => <StyledDatePicker {...p} extra={rest} />}
    </Field>
  );
};

export default DatePickerField;