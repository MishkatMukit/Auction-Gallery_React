import { useEffect } from 'react'
import './App.css'
import Auction from './assets/Components/Auction/Auction'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'

function App() {
  return (
    < >
      <div className='bg-[#EBF0F5]  min-h-screen'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Auction></Auction>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
