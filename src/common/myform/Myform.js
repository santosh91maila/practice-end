import React from 'react';
import { Formik, Form, Field, ErrorMessage ,useFormik} from 'formik';
import * as Yup from 'yup';
import './Myform.css';


const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(?!0+$)\d{8,10}$/, 'All zeros cannot be accepted')
    .required('Phone number is required')
});
const onSubmit = ()=>{
    console.log('submitted');
}
const MyForm = () => {

    const formik =useFormik({
        initialValues:{
            phoneNumber: ''
        },
        validationSchema:validationSchema,
        onSubmit

    })
  console.log(formik)

  

  return (
    <>  
        <form onSubmit={formik.handleSubmit} className='form' autoCorrect='off'>
            <label htmlFor='phoneNumber'>Phone Number</label>
            <input
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            id='phoneNumber'
            type='number'
            ></input>
            {console.log(formik.errors.phoneNumber, formik.touched.phoneNumber)}
            <p className='error'>{formik.errors.phoneNumber}{ formik.touched.phoneNumber}</p>
        </form>
    </>
);
};


export default MyForm;