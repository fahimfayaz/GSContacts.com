import db from '../config';
import React,{useState,useEffect} from 'react';

function Uni() {
  const [blogs,setBlogs]=useState([])
  const fetchBlogs=async()=>{
    const response=db.collection('products');
    const data=await response.get();
    data.docs.forEach(item=>{
     setBlogs([...blogs,item.data()])
    })
  }
  useEffect(() => {
    fetchBlogs();
  }, [])
  return (
    <div className="App">
      {
        blogs && blogs.map(blog=>{
          return(
            <div className="blog-container">
              <h4>{blog.title}</h4>
              <p>{blog.body}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Uni;