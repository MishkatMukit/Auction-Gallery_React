import { useEffect } from 'react'
import './App.css'
import Auction from './assets/Components/Auction/Auction'
import Banner from './assets/Components/Banner/Banner'
import Navbar from './assets/Components/Navbar/Navbar'

function App() {
  return (
    < >
      <div className='bg-[#EBF0F5]  min-h-screen'>
        <Navbar></Navbar>
        <Banner></Banner>
        <div>
          <Auction></Auction>
        </div>
      </div>
    </>
  )
}

export default App
