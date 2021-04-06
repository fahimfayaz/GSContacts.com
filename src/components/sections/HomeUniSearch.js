import Form from 'react-bootstrap/Form'
import Button from "../elements/Button";
import React, { Component } from "react";
import './sections.css'
import { Link } from "react-router-dom";
import Image from '../elements/Image';
import EmployeeForm from '../../HomeUniSearchForm/EmployeeForm';
class HomeUniSearch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ''
    };
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
render (){
  const { data, value } = this.state;
return(
<>

<EmployeeForm/>

{/* <Form>
  
  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
    <Form.Label><div className="select-country">Select a country</div></Form.Label>
    <Form.Control as="select" size="lg" custom>
      <option>Canada</option>
      <option>Australia</option>
      <option>Cyprus</option>
      <option>U.K.</option>
    </Form.Control>
  </Form.Group>
  <Button  className="right-button" 
            style={{
              backgroundColor:"#00a54f",  
              height:"50px"  
            }}
            type="submit"> <Link
                        className="menu-text-color"
                        to="/university"                   
                      >
                      <div classNane="wrapper" style={{display:"flex"}}>
                        <Image
                            src={require('./../../assets/images/search.ico')}
                            alt="Features tile icon 01"
                            width={25}
                            height={25} />
                        <span style={{color:"white"}}>Search</span>
                      </div>
                      </Link></Button>
</Form> */}

</>

)

}

}
export default HomeUniSearch 