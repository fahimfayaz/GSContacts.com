import React, { useState, useRef, useEffect,useCallback } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./Controls";
import { useForm, Form } from './useForm';
import * as employeeService from "./employeeService";
import './form.css'
import db from "../config.js"
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import { Link, useHistory } from "react-router-dom"
import firebaseApp from "../config"
import { useAuth } from "../context"
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
    password:'',
    confirm_password:'',
    city: '',
    gender: 'male',
    country: '',
    hireDate: new Date(),
    isPermanent: false,
}



export default function EmployeeForm() {
    const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

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

    // const handleSubmit = useCallback(async event => {
    //     event.preventDefault();
    //     const { email, password } = event.target.elements;
    //     try {
    //       await firebaseApp
    //             .auth()
    //         .createUserWithEmailAndPassword(email.value, password.value);
    //       history.push("/");
    //     } catch (error) {
    //       alert(error);
    //     }
    //   }, [history]);

    async function handleSubmit(e) {
        e.preventDefault();
        // setLoader(true);
     
      
          try {
            setError("")
            setLoading(true)
            await signup(values.email, values.password)
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
      
      


        db.collection("agents")
          .add({
            name: values.fullName,
            email: values.email,
            mobile: values.mobile,
            gender: values.gender,
            country:values.country,
            password:values.password,
            status:"TBA"
          })
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted. You will get a confirmation email shortly👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false)
      };
console.log(values)
    return (
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
                        ref={emailRef}
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                  
                    <Controls.Password
                        label="Password"
                        name="password"
                        ref={passwordRef}
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Password
                        label="Confirm Password"
                        name="confirm_password"
                        ref={passwordConfirmRef}
                        value={values.confirm_password}
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
                    <Controls.Input
                        label="City"
                        name="city"  
                        value={values.city}
                        onChange={handleInputChange}
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
                        name="country"
                        label="Country"
                        value={values.country}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

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
    )
}