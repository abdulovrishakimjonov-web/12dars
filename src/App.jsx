import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ALLPRODUCTS from './pages/ALLPRODUCTS'
import ABOUTSEEDRA from './pages/ABOUTSEEDRA'
import CONTACTS from './pages/CONTACTS'
import OURBLOG from './pages/OURBLOG'
import Leaut from './components/Leaut'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Leaut/>}>
      <Route path='/' element={<ALLPRODUCTS/>}/>
      <Route path='/about' element={<ABOUTSEEDRA/>}/>
      <Route path='/contacts' element={<CONTACTS/>}/>
      <Route path='/blog' element={<OURBLOG/>}/>
      </Route>
    </Routes>
  )
}

export default App