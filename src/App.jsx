import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/home/Home'
import Books from './component/home/Books'
import Navbar from './component/home/Navbar'
import Add from './component/add/Add'
import Edit from './component/edit/Edit'

function App() {

  return (
    < >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
    </>
  )
}

export default App
