import React from "react";
import { Field } from "formik";
import { Input } from "antd";

import Label from "../Label";
import * as S from "./styled";

import inputs from "../../../utils/reviewFormInputs";

const { TextArea } = Input;

const StyledInput = ({ field, form, extra }) => {
  const { label, ...restExtra } = extra;
  const { name } = field;
  const { touched } = form;
  return (
    <S.Wrapper numbered={extra.type === 'number'}>
      {label && <Label value={label} htmlFor={name} touched={touched[name]} />}
      {extra.type === "textarea" ? (
        <TextArea {...field} rows={4} {...restExtra} />
      ) : (
        <Input {...field} {...restExtra} />
      )}
    </S.Wrapper>
  );
};

const InputField = ({ type }) => {
  const { name, ...rest } = inputs[type];
  return (
    <Field name={name}>
      {p => <StyledInput {...p} extra={rest} />}
    </Field>
  );
};

export default InputField;
