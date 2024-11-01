
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbarPage/Navbar'
import Bannar from './components/bannarSection/Bannar'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Bannar></Bannar>
      <Outlet></Outlet>
      
    </div>
  )
}

export default App
