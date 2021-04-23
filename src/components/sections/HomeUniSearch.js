import Form from 'react-bootstrap/Form'
import Button from "../elements/Button";
import React, { Component } from "react";
import './sections.css'
import { Link } from "react-router-dom";
import Image from '../elements/Image';

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

<Form>
  
  <Form.Group controlId="exampleForm.SelectCustomSizeLg" style={{width:"79%"}}>
    <Form.Label><div className="select-country">Select a country</div></Form.Label>
    <Form.Control as="select" size="lg" custom style={{width:"79%"}}>
      <option>Canada</option>
      <option>Australia</option>
      <option>Cyprus</option>
      <option>U.K.</option>
    </Form.Control>
    <Button  className="right-button" 
            style={{
              backgroundColor:"#00a54f",  
              height:"60px", 
              width:"20%",
              borderRadius:".3em" 
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
                        {/* <span style={{color:"white"}}>Search</span> */}
                      </div>
                      </Link></Button>
  </Form.Group>
</Form>

</>

)

}

}
export default HomeUniSearch 