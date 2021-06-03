import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Styles} from './Styles';

const FormikForm = () => {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: '',
          specialPowers: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be atleast 3 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions'),
          specialPowers: Yup.string()
            .required('Required')
            .oneOf(
              ['flight', 'invisibility', 'wealthy bat guy', 'other'],
              'Invalid special power'
            )
        })}
      ></Formik>
    </Styles>
  );
};

export default FormikForm;
