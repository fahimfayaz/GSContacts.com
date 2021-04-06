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


export default function IndieUni() {
    const [blogs,setBlogs]=useState([])
    const fetchBlogs=async()=>{
      const response=db.collection('universities');
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