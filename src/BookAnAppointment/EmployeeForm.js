import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "./employeeService";
import './form.css'
import db from "../config.js"
import Typography from '@material-ui/core/Typography';

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
    StudyDestination: '',
    PreviousQualification: '',
    EnglishTest: '',
    Result: '',
    hireDate: new Date(),
   
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
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
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
    
        db.collection("apply-now")
          .add({
            name: values.fullName,
            email: values.email,
            mobile: values.mobile,
            StudyDestination: values.StudyDestination,
            PreviousQualification : values.PreviousQualification,
            EnglishTest:values.EnglishTest,
            Result:values.Result,
            hireDate:values.hireDate,

          })
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setName("");
        setEmail("");
        setMessage("");
      };
console.log(values)
    return (
        <React.Fragment>       <Typography className="padding" style={{color:"black", fontFamily:"poppins"}} variant="h6" gutterBottom>
        Book a free appointment with one of our Agents
      </Typography>
        <Form onSubmit={handleSubmit}>
            <Grid className="padding" container>
                <Grid  item xs={12}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                   <Controls.Select
                        name="StudyDestination"
                        label="Study Destination"
                        value={values.StudyDestination}
                        onChange={handleInputChange}
                        options={employeeService.getStudyDestination()}
                        error={errors.departmentId}
                    />

                </Grid>
                <Grid item xs={12}>
                    {/* <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    /> */}
                    <Controls.Select
                        name="PreviousQualification"
                        label="Previous Qualifications"
                        value={values.PreviousQualification}
                        onChange={handleInputChange}
                        options={employeeService.getPreviousQualification()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="hireDate"
                        label="Set A Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                  <Controls.Select
                        name="EnglishTest"
                        label="English Test"
                        value={values.EnglishTest}
                        onChange={handleInputChange}
                        options={employeeService.getEnglishTest()}
                        error={errors.departmentId}
                    />
                        <Controls.Input
                        label="English Test Result"
                        name="Result"
                        value={values.Result}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
        </React.Fragment>  
    )
}