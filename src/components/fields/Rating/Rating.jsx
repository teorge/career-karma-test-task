import React from "react";
import { Field } from "formik";
import { Rate } from "antd";

import Label from "../Label";

const StyledRating = ({ form, field, label }) => {
  const { name } = field;
  const { setFieldValue } = form;
  return (
    <>
      <div>
        <Label value={label} />
      </div>
      <Rate {...field} onChange={value => setFieldValue(name, value)} onBlur={() => {}} />
    </>
  );
};

const RatingField = ({ name, label }) => {
  return (
    <Field name={name}>
      {p => <StyledRating {...p} label={label} />}
    </Field>
  );
};

export default RatingField;
