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
              <BisectionKob/>
              <BisectionTonkaew />

      {/* <Navbar></Navbar>
      <main>
        <div>
            <div id='home'>
              <Home />
            </div>
            <div id='bisection'>
              <Bisection />            </div>
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
      </main> */}
    </div>
  )
}
export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App