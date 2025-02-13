import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {Login} from  './Component/Login'
import {Signup} from './Component/Signup'
import {Home} from './page/Home'
import Productform from './Component/Productform'
import Productcardforseller from './Component/Productcardforseller'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/productform" element={<Productform/>}></Route>
        <Route path="/productcardforseller" element={<Productcardforseller/>}></Route>
      </Routes>
    </>
  )
}

export default App
