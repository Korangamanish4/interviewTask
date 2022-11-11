import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Common.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

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