import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AddData from './Screens/AddData'
import Home from './Screens/Home'

const Routing = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/addData" element={<AddData />}/>
</Routes>
</BrowserRouter>
  )
}

export default Routing