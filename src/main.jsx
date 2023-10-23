import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { UserContextProvider } from './share/context/User/UserContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
)
