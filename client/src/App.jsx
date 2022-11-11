import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Footer, Navbar, Services, Transactions, Welcome} from './components/index.js'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Footer/>
      <Transactions/>
      <Services/>
    </div>
  )
}

export default App
