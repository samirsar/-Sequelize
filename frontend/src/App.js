import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCategory from './Component/ItemCategory/ItemCategory';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<ItemCategory/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  )
}
