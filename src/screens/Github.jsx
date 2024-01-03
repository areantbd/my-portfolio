import React, { useContext, useEffect, useState } from 'react'
import Skyline2022 from '../components/3D/gh-skyline-2022/Skyline2022'
import NavBar from '../components/UI/nav-bar/NavBar'
import TypedComponent from '../components/UI/typed/TypedComponent'
import { ThemeContext } from '../contexts/ThemeContext'
import Skyline2023 from '../components/3D/gh-skyline-2023/Skyline2023'

function Github() {
  const [theme, setTheme] = useState(undefined)
  const mode = useContext(ThemeContext)

  useEffect(() => {
    setTheme(mode)
  }, [mode])
  console.log(theme)

  return theme?.theme === "dark" ? (
    <div className='bg-dark github'>
      
      <NavBar />
      <div className='pt-3 bg-dark'>
        <div className='container'>
          <a href='https://skyline.github.com/' target='_blank' rel="noreferrer" className='btn btn-outline-info btn-sm' >Create your own skyline</a>
          <Skyline2023 />
          <Skyline2022 />
          <div className='d-flex justify-content-around'>
            <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=areantbd&theme=nord&show_icons=true&locale=en&layout=compact" alt="areantbd" /></p>
            <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=areantbd&theme=nord&show_icons=true&locale=en" alt="areantbd" /></p>
          </div>
          <TypedComponent text={"More content soon..."} time={1000}/>

        </div>
      </div>
    </div>
  ) : (
    <div className='bg-light github'>
      <NavBar />
      <div className='container pt-3 bg-light'>
        <a href='https://skyline.github.com/' target='_blank' rel="noreferrer" className='btn btn-outline-info btn-sm' >Create your own skyline</a>
        <Skyline2022 />
          <div className='d-flex justify-content-around'>
            <p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=areantbd&theme=nord&show_icons=true&locale=en&layout=compact" alt="areantbd" /></p>
            <p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=areantbd&theme=nord&show_icons=true&locale=en" alt="areantbd" /></p>
          </div>
        <TypedComponent text={"More content soon..."} time={1000}/>
      </div>
    </div>
  )
}

export default Github