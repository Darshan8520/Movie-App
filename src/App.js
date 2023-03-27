import logo from './logo.svg';
import './App.css';
import React from 'react'
import Layout from './Layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Details from './Details';
function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Layout/> */}
      <Routes>
        <Route path='/' element ={<Layout/>}></Route>
        <Route path='movie/:id' element={<Details/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App

