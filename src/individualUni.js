import React,{useState,useEffect} from 'react';
import "./uniPage.css"
import EmployeeForm from './ApplyNow/EmployeeForm.js';

import { Provider } from "react-redux";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import store from "./store";
import Card from "./cardsIndividualUni"
import Hero from "./components/sections/HeroUni.js";
import Copyright from "./components/Copyright";
import HeroCarousel from "react-hero-carousel";
import db from './config';
import Blog from "./IndieUniBlogsPage/Blog"

export default function IndieUni(props) {
    const [blogs,setBlogs]=useState([])
    var id = toString(props.match.params.id)
    console.log(typeof props.match.params.id)
    const fetchBlogs=async()=>{
      const response=db.collection('universities').where("id", "==", props.match.params.id)
      console.log(response)
      const data=await response.get();
      data.docs.forEach(item=>{
       setBlogs([...blogs,item.data()])
      })
    }
    useEffect(() => {
        fetchBlogs();
      }, [])
console.log(blogs)
  return (
<> 

<HeroCarousel>
    
    
    <img
     style={{
       width: "100%",
       height: "100%",
       objectFit: "cover",
     }}
     src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1614593987/2_ning63.png"
     width="100%"
     height="100%"
   />
   
   <img
   style={{
     width: "100%",
     height: "100%",
     objectFit: "cover",
   }}
     src="https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1615099230/hero1_lva0ux.png"
     width="100%"
     height="100%"
   />


 </HeroCarousel>
<Provider store={store}>
          <div className="padding-top container">
            <div className="justify-content-center row">
              <div className="padding-top col-md-3">
            

              {
        blogs && blogs.map((blog,i)=>{
          return(
            <div key={i}><Card image={blog.Picture}/></div>
          )
        })
      }
              </div>

              <div className="col-md-9">
                <div className="justify-content-center section">
                  <div className="padding"></div>
                  <Blog/>
                  <div className="padding-top"><EmployeeForm/></div>
                </div>
              </div>

              <div>{/* <Basket />
              <Copyright /> */}</div>
            </div>
          </div>
        </Provider>



  </>
  
  );
}