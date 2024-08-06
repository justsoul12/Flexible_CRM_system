import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './styles/index.css'
// import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes  from './routes'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
     </ClerkProvider> */}
     <AppRoutes/>
    </Router>
  </React.StrictMode>,
)
