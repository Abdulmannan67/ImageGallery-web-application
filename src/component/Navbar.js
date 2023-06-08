import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import img1 from "./Images/img1.png"

import '../style.css';



export default function Navbar(props) {

 
  return (
    <>
      

      <nav  className="navbar navbar-expand-lg ">
  <div style={{maxWidth:"150vw", overflowY:"scroll"}}  className="container-fluid">
  
  <img src={img1} width="150" height="50" alt=""/>
  

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item mx-2">
          <Link style={{width:"7vw"}}  className="nav-link" aria-current="page" to="/">Wallpapers</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"8vw"}} className="nav-link" to="/3d-renders">3d-Renders</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"5vw"}} className="nav-link" to="/Travel">Travel</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"6vw"}} className="nav-link" to="/nature">Nature</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"12vw"}} className="nav-link" to="/street-photography">Street Photography</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"8vw"}} className="nav-link" to="/experimental" >Experimental</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"11vw"}} className="nav-link" to="/textures-patterns" >Textures & Pattern</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"7vw"}} className="nav-link" to="/animals" >Animals</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"13vw"}} className="nav-link" to="/architecture-interior" >Architecture & Interior</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"11vw"}} className="nav-link" to="/fashion-beauty" >Fashion & Beauty</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"5vw"}} className="nav-link" to="/film" >Film </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"9vw"}} className="nav-link" to="/food-drink" >Food & Drink</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"6vw"}} className="nav-link" to="/people" >People </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"8vw"}} className="nav-link" to="/spirituality" >Spirituality </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"10vw"}} className="nav-link" to="/business-work" >Business & Work</Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"7vw"}} className="nav-link" to="/athletics" >Athletics </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"6vw"}} className="nav-link" to="/health" >Health </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"9vw"}} className="nav-link" to="/current-events" >Current-Events </Link>
        </li>
        <li className="nav-item">
          <Link style={{width:"9vw"}} className="nav-link" to="/arts-culture" >Arts & Culture </Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  
   

 </>
  )  
}

Navbar.prototype={title:PropTypes.string,
                    about:PropTypes.string};

Navbar.defaultProps={
  title:'set tilte here',
  about:'set about here'
}


