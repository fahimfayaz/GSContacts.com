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
  const {signup}  = useAuth()
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

  

    async function handleSubmit(e) {
        e.preventDefault();
        // setLoader(true);

    

        try {
            validate()
          } catch {
         
            alert("One or More fields are missing");
          }


          try {
            setError("")
            setLoading(true)
            await signup(values.email, values.password)          
            history.push("/")


            db.collection("agents")
          .add({
            name: values.fullName,
            email: values.email,
            role: values.role, 
            business_name: values.business_name,
            website: values.website,
            password:values.password,
            mobile: values.mobile,
            city:values.city,
            other_location:values.other_location,
            sub_agents:values.sub_agents,
            year_founded: values.year_founded,
            AvgUsa: values.AvgUsa,
            AvgUK:values.AvgUK,
            AvgTotal:values.AvgTotal,
            AvgEurope:values.AvgEurope,
            AvgCanada:values.AvgCanada,
            AvgAustralia:values.AvgAustralia,
            member_asso:values.member_asso,
            list_asso:values.list_asso,
           
            markets:values.markets,
            marketing_techniques:values.marketing_techniques,
            charge_students:values.charge_students,
        
            reference_1_institute_name: values.reference_1_institute_name,
            reference_1_country: values.reference_1_country,
            reference_1_name:values.reference_1_name,
            reference_1_email:values.reference_1_email,
            reference_1_email:values.reference_1_phonenumber,
          
            
            status:"TBA"
          })
          .then(() => {
            setLoader(false);
            alert("Your form has been submitted. You will get a confirmation email shortly👍");
          })    
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });





          } catch {
            setError("Failed to create an account")
            alert("An Account with the same Email already exists");
          }

       
    
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false)
      };
console.log(values)
    return (
        <Form onSubmit={handleSubmit}>
            <Grid className="padding" container>
                <div style={{padding:"10px 0 10px 10px"}}>Agency Details</div>
                <Grid  item xs={12}>
                <Controls.Input
                        label="Business Name"
                        name="business_name"
                        ref={emailRef}
                        value={values.business_name}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Website"
                        name="website"
                        ref={emailRef}
                        value={values.website}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                   
                    <Controls.Input
                        label="Where is your head-office"
                        name="city"  
                        value={values.city}
                        onChange={handleInputChange}
                    />
                     <Controls.InputHeight
                        name="other_location"
                        label="Do you have offices in  other location"
                        value={values.other_location}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                      <Controls.InputHeight
                        name="sub_agents"
                        label="Do you work with sub-agents?"
                        value={values.sub_agents}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                       <Controls.Input
                        label="Year Founded"
                        name="year_founded"  
                        value={values.year_founded} 
                        onChange={handleInputChange}
                    />
                </Grid>
                <div style={{padding:"10px 0 10px 10px"}}>Agent Account Details</div>
             <Grid>
                <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                     <Controls.Input
                        label="Role"
                        name="role"
                        ref={emailRef}
                        value={values.role}
                        onChange={handleInputChange}
                        error={errors.email}
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
             
                    {/* <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    /> */}
                   <div style={{padding:"10px 0 10px 10px"}}> Average Students placed per year</div> 
                    <Controls.Input
                        name="AvgUsa"
                        label="USA"
                        value={values.AvgUsa}
                        onChange={handleInputChange}
                        
                    />
                   
                    <Controls.Input
                        name="AvgUK"
                        label="UK"
                        value={values.AvgUK}
                        onChange={handleInputChange}
                        
                    />
                    
                    <Controls.Input
                        name="AvgCanada"
                        label="Canada"
                        value={values.AvgCanada}
                        onChange={handleInputChange}
                        
                    />
                  
                   
                     
                    <Controls.Input
                        name="AvgAustralia"
                        label="Australia"
                        value={values.AvgAustralia}
                        onChange={handleInputChange}
                      
                    />
                    
                    <Controls.Input
                        name="AvgCyprus"
                        label="Cyprus"
                        value={values.AvgCyprus}
                        onChange={handleInputChange}
                    
                    />
                    
                    <Controls.Input
                        name="AvgTotal"
                        label="Total"
                        value={values.AvgTotal}
                        onChange={handleInputChange}
                       
                    />

                </Grid>
                <div style={{padding:"10px 0 10px 10px"}}>Professional Associations and Accreditations</div>
                <Grid item xs={12}>
                
                <Controls.InputHeight
                        name="member_asso"
                        label="Are you a member of any education agent associations"
                        value={values.member_asso}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.InputHeight
                        label="List each education association"
                        name="list_asso"  
                        value={values.list_asso}
                        onChange={handleInputChange}
                        
                    />
                     {/* <Controls.InputHeight
                        name="qualification"
                        label="Do you have any education agent qualifications or accreditations"
                        value={values.qualification}
                        onChange={handleInputChange}
                        
                    />
                     <Controls.InputHeight
                        name="allegations"
                        label="Are you aware of any incidents or allegations of misconduct involving your business or its employees"
                        value={values.allegations}
                        onChange={handleInputChange}
                        
                    /> */}
                    {/* <Controls.Select
                        name="country"
                        label="Country"
                        value={values.country}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    /> */}
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
                </Grid>
             <div style={{padding:"10px 0 10px 10px"}}>Marketing</div>
                <Grid item xs={12}>
                <Controls.InputHeight
                        label="Which markets will you recruit students from"
                        name="markets"  
                        value={values.markets}
                        onChange={handleInputChange}
                    />
                      <Controls.InputHeight
                        label="What marketing techniques will you use"
                        name="marketing_techniques"  
                        value={values.marketing_techniques}
                        onChange={handleInputChange}
                    />


                     </Grid>
                <div style={{paddingLeft:"10px"}}>Fees</div>
                <Grid item xs={12}>
                <Controls.InputHeight
                        name="charge_students"
                        label="Do you charge students for their services"
                        value={values.charge_students}
                        onChange={handleInputChange}
                        
                    />
                    
                    {/* <Controls.InputHeight
                        label="describe the services and the fees you charge"
                        name="service_fee"  
                        value={values.service_fee}
                        onChange={handleInputChange}
                    /> */}
                    </Grid>
          
              <div style={{padding:"10px 0 10px 10px"}}>References</div>
                <Grid item xs={12}>
                
               
               
                  <Controls.Input
                        label="Name"
                        name="reference_1_name"  
                        value={values.reference_1_name}
                        onChange={handleInputChange}
                    />
                     <Controls.Input
                        label="Company Name "
                        name="reference_1_institute_name"  
                        value={values.reference_1_institute_name}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Designation "
                        name="reference_1_country"  
                        value={values.reference_1_country}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Email"
                        name="reference_1_email"  
                        value={values.reference_1_email}
                        onChange={handleInputChange}
                    />
                      <Controls.Input
                        label="Phone Number"
                        name="reference_1_phonenumber"  
                        value={values.reference_1_phonenumber}
                        onChange={handleInputChange}
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
    )
}