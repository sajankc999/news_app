import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  
} from "react-router-dom";



export class App extends Component {
    render() {
    return (
      <>
      <BrowserRouter>
        
      <Routes>
        <Route path='/categories/sports'  element={<News key='sports' category={'sports'}/>}/>
        <Route path='/'  element={<News key='general' category={'general'}/>}/>
        <Route path='/categories/technology' element={<News key='technology' category={'technology'}/>}/>
        <Route path='/categories/entertainment' element={<News key='entertainment' category={'entertainment'}/>}/>
        <Route path='/categories/business'element={<News  key='business' category={'business'}/>}/>
        <Route path='/categories/health' element={<News key='health' category={'health'}/>}/>
        <Route path='/categories/science' element={<News key='science' category={'science'}/>}/>
      </Routes>
      </BrowserRouter>
      
      </>
    )
  }
}

export default App

