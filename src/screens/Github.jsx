import React from 'react'
import Skyline2022 from '../components/3D/gh-skyline-2022/Skyline2022'
import NavBar from '../components/UI/nav-bar/NavBar'

function Github() {
  return (
    <>
      <NavBar />
      <div className='container mt-2'>
        <Skyline2022 />
        <h1 className='text-center'>More content soon...</h1>
      </div>
    </>
  )
}

export default Github