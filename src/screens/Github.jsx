import React from 'react'
import Skyline2022 from '../components/3D/gh-skyline-2022/Skyline2022'
import NavBar from '../components/UI/nav-bar/NavBar'
import TypedComponent from '../components/UI/typed/TypedComponent'

function Github() {
  return (
    <>
      <NavBar />
      <div className='container pt-3 pb-5'>
        <a href='https://skyline.github.com/' target='_blank' rel="noreferrer" className='btn btn-outline-info btn-sm' >Create your own skyline</a>
        <Skyline2022 />
        <TypedComponent text={"More content soon..."} time={1000}/>
      </div>
    </>
  )
}

export default Github