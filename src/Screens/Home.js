import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Common.css'

const Home = () => {

const navigate = useNavigate()

  return (
    <div className='container'>
            <div className='card'>
            <button onClick={() => window.location.reload()}>Leave</button>
            <button onClick={() => navigate('/addData')}>Proceed</button>
            </div>
    </div>
  )
}

export default Home
