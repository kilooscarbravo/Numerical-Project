import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Bisection from './components/Bisection'
import Graphical from './components/Graphical'
import FalsePosition from './components/FalsePosition'
import OnePoint from './components/OnePoint'
import Newton from './components/Newton'
import BisectionKob from './components/BisectionKob'
import BisectionTonkaew from './components/BisectionTonkaew'

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <main>
        <div>
            <div id='home'>
              <Home />
            </div>
            <div id='bisection'>
              <Bisection />            
            </div>
            <div id='graphical'>
              <Graphical />
            </div>
            <div id='false_position'>
              <FalsePosition />
            </div>
            <div id='one_point'>
              <OnePoint />
            </div>
            <div id='newton'>
              <Newton />
            </div>
        </div>
      </main>
    </div>
  )
}
export default App
