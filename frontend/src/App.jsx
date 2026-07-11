import React, { useContext } from 'react'
import Navbar from "./../src/components/navbar.jsx"
import { Route,Routes } from 'react-router-dom'
import { AppContext } from './contexts/AppContexts.jsx'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const {showLogin} = useContext(AppContext);
  // bg-gradient-to-b from-teal-50 to-orange-50

  return (
    <div className="px-4 sm:px-10 md:  lg:px-28
    min-h-screen bg-linear-to-b from-rose-50 via-white to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
    </div>
  )
}

export default App