import React from 'react'
import { useState } from 'react'
import '../style.css';
import { useNavigate } from 'react-router-dom';


const Cental = (props) => {
  const [searchInfo, setsearchInfo] = useState("")
  let navigate = useNavigate();

  const change=(e)=>{
   
    setsearchInfo(e.target.value)// ye photo state m dalta h
  
  }
  const handleclick=(e)=>{
    e.preventDefault();
    if (searchInfo==="nature" || searchInfo==="Nature") {
      navigate("/nature")
    }else if(searchInfo==="wallpaper" || searchInfo==="Wallpaper"){
      navigate("/")
    }else if(searchInfo==="Travel" || searchInfo==="travel"){
      navigate("/Travel")
    }else if(searchInfo==="3d-render" || searchInfo==="3d render"){
      navigate("/3d-render")
    }else if(searchInfo==="Street" || searchInfo==="street"){
      navigate("/street-photography")
    }else if(searchInfo==="experimental" || searchInfo==="Experimental"){
      navigate("/experimental")
    }else if(searchInfo==="Texture" || searchInfo==="texture"){
      navigate("/textures-patterns")
    }else if(searchInfo==="architecture" || searchInfo==="interior"){
      navigate("/architecture-interior")
    }else if(searchInfo==="fashion" || searchInfo==="beauty"){
      navigate("/fashion-beauty")
    }else if(searchInfo==="people" || searchInfo==="People"){
      navigate("/people")
    }else if(searchInfo==="business" || searchInfo==="work"){
      navigate("/business-work")
    }else if(searchInfo==="athletics" || searchInfo==="Athletics"){
      navigate("/athletics")
    }else if(searchInfo==="health" || searchInfo==="Health"){
      navigate("/health")
    }else if(searchInfo==="current" || searchInfo==="event"){
      navigate("/current-events")
    }else if(searchInfo==="art" || searchInfo==="culture"){
      navigate("/arts-culture")
    }else{
      alert("Please enter valid category")
    }
    
    setsearchInfo("")

  }
   
  const capitalizeFirstLetter = (str) => {
   if(typeof(str)=="string"){
    return str.charAt(0).toUpperCase() + str.slice(1);
   }else{
    return str
   }
    
  };

  return (
    <div className='d-flex justify-content-center align-items-center mx-2 my-2' style={{height:"70vh",backgroundImage:`url(${props.imgurl})`, backgroundRepeat: "no-repeat"}} > 
       <div className='d-flex flex-column' >
        <h1 className='heading-cental' style={{ color:"white"}}>{capitalizeFirstLetter(props.category)}</h1>
        <p className='para' style={{fontWeight: "400", color: "#fff"}} >{capitalizeFirstLetter(props.title)}</p>
         <form  className=" form-inline ">
      <input  onChange={change} name="search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <div className="text-center my-3">
      <button style={{color:"white" , outlineColor:"white"}} onClick={handleclick}  className="btn btn-outline-success my-3 my-sm-0" type="submit">Search</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Cental