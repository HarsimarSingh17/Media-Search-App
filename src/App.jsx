import React from 'react'
import { fetchGIFS, fetchPhotos } from './api/mediaApi'
import SearchBar from './components/searchBar.jsx';
import Tab from './components/tabs.jsx';
import ResultGrid from './components/resultGrid.jsx';
import Navbar from './components/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/homePage.jsx'
import CollectionPage from './pages/pageCollection.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App = () => {

  return (

    <div className="w-full h-fit bg-gray-900 min-h-screen">

      <ToastContainer

        position='top-center'
        autoClose={2000}
        theme='dark'
      />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

    </div>
  )
}

export default App
