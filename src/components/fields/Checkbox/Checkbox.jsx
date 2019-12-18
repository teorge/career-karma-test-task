import React from "react";
import { Checkbox } from "antd";
import { Field } from "formik";

import inputs from "../../../utils/reviewFormInputs";

const StyledCheckbox = ({ form, field, extra }) => {
  const { label } = extra;
  return (
    <div style={{ margin: '20px 0 0' }}>
      <Checkbox {...form}>{label}</Checkbox>
    </div>
  );
};

const CheckboxField = ({ type, ...rest }) => {
  const input = type ? inputs[type] : rest;
  const { name, ...restInput } = input;
  return (
    <Field
      name={name}
    >
      {p => <StyledCheckbox {...p} extra={{ ...input, ...restInput }} />}
    </Field>
  );
};

export default CheckboxField;