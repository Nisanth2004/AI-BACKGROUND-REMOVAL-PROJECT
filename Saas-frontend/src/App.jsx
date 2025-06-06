

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import MenuBar from './components/MenuBar'
import Home from './Pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <MenuBar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
