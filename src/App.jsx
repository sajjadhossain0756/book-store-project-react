
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbarPage/Navbar'
import Bannar from './components/bannarSection/Bannar'
import Books from './components/books/Books'
import Footer from './components/footerSection/Footer'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Books></Books>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
