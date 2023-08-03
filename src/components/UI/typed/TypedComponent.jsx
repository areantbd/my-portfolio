import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

function TypedComponent({text, time}) {
  const [typingStatus, setTypingStatus] = useState('Initializing');
  console.log(typingStatus)
  return (
    <div className='px-5 d-flex flex-column justify-content-center align-items-center pt-3'>
    <TypeAnimation 
      // sequence={[text, time] || [
      //   'React', 1500,
      //   'JavaScript', 1500,
      //   'TypeScript', 1500,
      //   'NodeJS', 1500,
      //   'Git', 1500,
      //   'GitHub', 1500,
      //   'BootStrap', 1500,
      //   'Express', 1500,
      //   'MongoDB', 1500,
      //   'Postman', 1500,
      //   'React Native', 1500,
      //   'HTML', 1500,
      //   'CSS', 1500,
      //   'SASS', 1500,
      //   ]}
      // speed={10}
      // deletionSpeed={50}
      // cursor={true}
      // repeat={Infinity}
      // style={{fontSize: "1.8rem", color: "#3178c6", fontWeight: "bold", filter: "drop-shadow(2px 2px 2px #4d4f53)"}}

      sequence={[
    1500,
    () => {
      setTypingStatus('Typing...');
    },
    text,
    () => {
      setTypingStatus('Done Typing');
    },
    1000,
    () => {
      setTypingStatus('Deleting...');
    },
    '',
    () => {
      setTypingStatus('Done Deleting');
    },
  ]}
  speed={10}
  deletionSpeed={50}
  repeat={Infinity}
  style={{fontSize: "1.8rem", color: "#3178c6", fontWeight: "bold", filter: "drop-shadow(2px 2px 2px #4d4f53)"}}
    />
    </div>
  )
}

export default TypedComponent