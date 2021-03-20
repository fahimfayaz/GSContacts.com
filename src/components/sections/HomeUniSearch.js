import Form from 'react-bootstrap/Form'
import Button from "../elements/Button";
import React, { Component } from "react";
import './sections.css'
import { Link } from "react-router-dom";

class HomeUniSearch extends Component{
render (){
    
return(
<>

<Form>
  
  <Form.Group controlId="exampleForm.SelectCustomSizeLg">
    <Form.Label><div className="select-country">Select a country</div></Form.Label>
    <Form.Control as="select" size="lg" custom>
      <option>Canada</option>
      <option>Australia</option>
      <option>Cyprus</option>
      <option>U.K.</option>
    </Form.Control>
  </Form.Group>
  <Button  className="right-button" type="submit"> <Link
                        className="menu-text-color"
                        to="/university"
                       
                      >
                        Search
                      </Link></Button>
</Form>

</>

)

}

}
export default HomeUniSearch 