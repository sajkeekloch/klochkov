import React, { useEffect } from 'react'
import { Route } from 'react-router'
import About from './components/About/About'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Projects from './components/Projects/Projects'

function App() {

  // const [isOpen, setIsOpen] = React.useState(false)

  // function handleMenu() {
  //   setIsOpen(!isOpen)
  //   stopScroll()
  // }

  // function handleClick(e) {
  //   if (isOpen && e.target.className === "menu") {
  //     setIsOpen(false)
  //   }
  // }

  // function stopScroll() {
  //   if (isOpen) {
  //     document.body.classList.remove('scroll-block')
  //   }
  //   else if(!isOpen) {
  //     document.body.classList.add('scroll-block')
      
  //   }
  // }

  // useEffect(() => {
  // })

  return (
    <div className="App"
      // onClick = {handleClick}
    >
      <Header 
        // handleMenu= {handleMenu}
      />
      <Route exact path='/klochkov'>
        <Main/>
      </Route>
      <Route path='/projects'>
        <Projects/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>  
    </div>
  );
}

export default App;
