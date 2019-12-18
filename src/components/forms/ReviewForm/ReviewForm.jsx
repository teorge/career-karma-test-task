import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import checkmarkIcon from '../../../assets/checkmark-white.png';

import * as S from './styled';
import {
  Select,
  Input,
  Checkbox,
  DatePicker,
} from '../../fields';
import {
  Header,
  MainInfo,
  Status,
  Ratings,
  Review,
  Tuitions,
} from './sections';

const options = [
  { value: 'first', label: 'First option' },
  { value: 'second', label: 'Second option' },
  { value: 'third', label: 'Third option' }
];

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Email is invalid, Please provide valid email')
    .required('Required')
});


const initialValues = {
  firstName: '',
  lastName: '',
  userEmail: '',
  keepAnonymous: true,
  status: 'graduate',
  ratings: [1, 1, 1, 1],
  title: '',
  userReview: '',
  pros: '',
  cons: '',
  school: '',
  course: '',
  programType: '',
  tuitions: [false, false, false, false, false],
  location: '',
  graduationDate: '',
  employed: true,
  monthsForAJob: '',
  salary: '',
};

const ReviewForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <S.Wrapper>
      <S.SignInButton isFormSubmitted={isFormSubmitted}>
        {isFormSubmitted && <S.CheckIcon src={checkmarkIcon} />}
        {isFormSubmitted ? 'Thank you for submitting a review' : 'Already have an account? Sign in'}
      </S.SignInButton>
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          setIsFormSubmitted(true);
          alert(JSON.stringify(values));
        }}
        validationSchema={validationSchema}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Header />
              <MainInfo />
              <Checkbox type='keepAnonymous' />
              <Status
                value={values.status}
                setStatus={value => setFieldValue('status', value)}
              />
              <Ratings />
              <Review options={options} />
              <Tuitions />
              <Select type='location' options={options} />
              <DatePicker type='graduationDate' />
              <Input type='monthsForAJob' />
              <Input type='salary' />
              <S.Submit type='submit'>Submit review</S.Submit>
            </form>
          )}
        </Formik>
    </S.Wrapper>
  );
};

export default ReviewForm;
