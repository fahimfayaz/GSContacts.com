import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "./employeeService";
import './form.css'
import db from "../config.js"
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    country: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    const [loader, setLoader] = useState(false);
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('country' in fieldValues)
            temp.country = fieldValues.country.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
    
     
    
        setName("");
        setEmail("");
        setMessage("");
      };
console.log(values)
    return (
        <Form onSubmit={handleSubmit}>
            <Grid className="padding" container>
              
                <Grid item xs={12}>
                
                    <Controls.Select
                        name="country"
                        label="Country"
                        value={values.country}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                 

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            className="btn-color"
                            onClick={event =>  window.location.href='/university/'+values.country} />
                        <Controls.Button
                            text="Reset"
                            color="default"
                        
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}