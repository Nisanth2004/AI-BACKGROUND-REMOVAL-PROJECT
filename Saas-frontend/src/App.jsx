

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import MenuBar from './components/MenuBar'
import Home from './Pages/Home'
import { Toaster } from 'react-hot-toast'
import UserSyncHandler from './components/UserSyncHandler'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Result from './Pages/Result'


function App() {
  return (
    <div>
      <UserSyncHandler/>
      <MenuBar/>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/result' element={
          <>
          <SignedIn>
            <Result/>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn/>
          </SignedOut>
          </>
        }  />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
