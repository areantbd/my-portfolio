import React, { useState } from 'react'
import { StlViewer } from 'react-stl-viewer'
 
const url = "https://res.cloudinary.com/dqzakvyfj/raw/upload/v1689867277/areantbd-2022_p7ssco.stl"

const style = {
  top: 20,
  left: 20,
  width: '100vw',
  height: '80vh',
  color: "#75BA75"
}


function Skyline2022() {
  const [controls, setControls] = useState(false)
  
  const changeControls = () => {
    setControls(!controls)
    console.log(controls)
  }

  const color = controls ? "text-success" : "text-danger"

  return (
    <>  
      <div className='d-flex align-items-center'>
        <h3>Skyline 2022</h3>
        <div className='d-flex ms-auto gap-2'>
          <a href='https://skyline.github.com/' target='_blank' rel="noreferrer" className='btn btn-outline-info btn-sm' >Create your own skyline</a>
          <button className='btn btn-outline-light fa fa-arrows-alt d-flex gap-3' onClick={() => changeControls()}><i className={`fa fa-circle ${color}`}></i></button>
        </div>
      </div>   
      <StlViewer   
        style={style}
        rotate={true}
        orbitControls={controls}
        modelProps={{
          scale: 2.5,
          positionX: -150,
          positionY: -150,
          rotationX: 0,
          rotationY: 0,
          rotationZ: -0.7,
          color: "#b7592e"
        }}
        // shadows
        onError={(error) => console.log(error)}
        url={url}
          />
      </>
  )
}

export default Skyline2022