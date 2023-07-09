import React from 'react'
import codeImg from "./images/home-code.png"
import me2 from "./images/me2.png"
import MainNavBar from "../components/UI/nav-bar/MainNavBar"
// import TypedComponent from '../components/UI/typed/TypedComponent'
 
function HomeScreen() {
  console.log(window.location.href)
  return (
    <>
    <MainNavBar/>
    {/* <TypedComponent /> */}
    <div className="home-screen bg-dark pt-5">
    <div>
      <div className='container home-data'>
        <div className='row justify-content-md-between '>
          <img src={me2} alt="me" className='col-md-5 p-0 w-50 mx-auto'></img>
          <img src={codeImg} alt="code" className='code ms-auto pt-5 col-md-5 p-0' style={{maxWidth: "100"}} ></img>
        </div>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default HomeScreen