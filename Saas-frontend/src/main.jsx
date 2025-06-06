
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY="pk_test_Y3JlZGlibGUtbW91c2UtNzMuY2xlcmsuYWNjb3VudHMuZGV2JA";

if(!PUBLISHABLE_KEY)
{
    throw new Error("Missing Publishable Key ")
}

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App/>

     </ClerkProvider>
    </BrowserRouter>
   
  
)
