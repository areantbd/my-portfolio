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
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between align-items-center mt-2'>
          <h5>Skyline 2022</h5>
          <button className='btn btn-outline-secondary fa fa-arrows-alt d-flex gap-3' onClick={() => changeControls()}><i className={`fa fa-circle ${color}`}></i></button>
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
          color: "#4e4e4e"
        }}
        // shadows
        onError={(error) => console.log(error)}
        url={url}
          />
      </>
  )
}

export default Skyline2022