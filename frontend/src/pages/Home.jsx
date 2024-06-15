import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  const image = require("../images/photo-1603831905217-8c2f485a2e20.avif")
  return (
    <div className="Home-Page bg-dark text-white container-fluid d-flex justify-content-center  align-items-center">
      <div className="row container">
        <div 
          className="col-lg-6 d-flex justify-content-center  align-items-start flex-column" 
          style={{ height: "91.5vh" }}
        >
            <h2 style={{fontSize: "80px"}}>Book Store</h2>
            <h3 style={{fontSize: "50px"}}>For You</h3>
            <p className='mb-0' style={{color: 'silver'}}>Checkout The Books From Here.</p>
            <Link to="/books" className="viewBook my-3 ">View Books</Link>
        </div>
        <div 
            className="col-lg-6 d-flex justify-content-center align-items-end flex-column" 
            style={{ height: "91.5vh" }}
        >
          <img className='img-fluid homeimg' src='https://images.unsplash.com/photo-1603831905217-8c2f485a2e20?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default Home;
