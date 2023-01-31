
import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './component/Home'
import Science from './component/Science'


export default function Allroute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/science" element={<Science/>}/>
    </Routes>
  )
}