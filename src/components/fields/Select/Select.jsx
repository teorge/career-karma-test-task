import React from "react";
import { Field } from "formik";
import { Select } from "antd";

import Label from "../Label";
import * as S from "./styled";
import inputs from "../../../utils/reviewFormInputs";

const { Option } = Select;

const StyledSelect = ({ field, form, extra }) => {
  const { options, label } = extra;
  const { setFieldValue } = form;
  const { name } = field;
  return (
    <S.Wrapper>
      <div>
        <Label value={label} />
      </div>
      <Select {...field}>
        {options.map(({ value, label }, idx) => (
          <Option key={idx} value={value} onClick={() => { setFieldValue(name, value) }}>
            {label}
          </Option>
        ))}
      </Select>
    </S.Wrapper>
  );
};

const SelectField = ({ type, options }) => {
  const { name, ...rest } = inputs[type];
  return (
    <Field name={name}>
      {p => <StyledSelect {...p} extra={{ ...rest, options }} />}
    </Field>
  );
};

export default SelectField;