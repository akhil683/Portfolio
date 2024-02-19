import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Menu from './components/Menu'

const App = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const [ lastScrollY, setLastScrollY ] = useState(0);
  const controlNavbar = () => {
    if(window.scrollY > 100) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
    setLastScrollY(window.scrollY);
    console.log(lastScrollY);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <div className='max-w-[500px] relative'>
      {showMenu && <Menu />}
      <Home />
    </div>
  )
}

export default App
