import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TypedComponent() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center pt-3'>
    <h2 style={{fontSize: "1.8rem", fontWeight: "bold", filter: "drop-shadow(2px 2px 2px #4d4f53)"}}>I have knowledge about: </h2>
    <TypeAnimation 
      sequence={[
        'React', 1500,
        'JavaScript', 1500,
        'TypeScript', 1500,
        'NodeJS', 1500,
        'Git', 1500,
        'GitHub', 1500,
        'BootStrap', 1500,
        'Express', 1500,
        'MongoDB', 1500,
        'Postman', 1500,
        'React Native', 1500,
        'HTML', 1500,
        'CSS', 1500,
        'SASS', 1500,
        ]}
      speed={10}
      deletionSpeed={50}
      cursor={true}
      repeat={Infinity}
      style={{fontSize: "1.8rem", color: "#3178c6", fontWeight: "bold", filter: "drop-shadow(2px 2px 2px #4d4f53)"}}
    />
    </div>
  )
}

export default TypedComponent