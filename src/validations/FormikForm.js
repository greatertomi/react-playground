import React from 'react';
import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';
import {Styles} from './Styles';

const CustomTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </>
  )
};

const CustomCheckBox = ({children, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </>
  )
};

const CustomSelect = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <div className="error">{meta.error}</div>
      )}
    </>
  )
};

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
        onSubmit={(values, {setSubmitting, resetForm}) => {
          console.log('here')
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resetForm();
            setSubmitting(false);
          }, 3000)
        }}
      >
        {props => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput label="Name" name="name" type="text" placeholder="Frank" />
            <CustomTextInput label="Email" name="email" type="email" placeholder="frank@thetank.com" />
            <CustomSelect label="Special Power" name="specialPower">
              <option value="">Select a special Power</option>
              <option value="flight">flight</option>
              <option value="invisibility">invisibility</option>
              <option value="wealthy bat guy">wealthy bat guy</option>
              <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckBox name="acceptedTerms">
              I accept the terms and conditions
            </CustomCheckBox>
            <button type="submit">{props.isSubmitting ? 'loading...' : 'Submit'}</button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default FormikForm;
