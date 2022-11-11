import React, { useState } from 'react'
import './Common.css'
import { useNavigate } from 'react-router-dom'

const AddData = () => {

    const [name, setName] = useState("")
    const [dob, setDOB] = useState("")
    const [number, setNumber] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("Name",name)
        localStorage.setItem("DOB",dob)
        localStorage.setItem("Phone No",number)
        alert("Data Added")
        setTimeout(() => {
          navigate('/')
        },1000)
    }

    const validate = (e) => {
        e.preventDefault()
        const localName = localStorage.getItem('Name')
        const localDOB = localStorage.getItem('DOB')
        const localNumber = localStorage.getItem('Phone No')
        if (localName?.toUpperCase() == name?.toUpperCase() && localDOB == dob && localNumber == number){
            alert("DATA already Exists")
            setTimeout(() => {
                navigate('/')
              },1000)
        }
        else handleSubmit(e)
    }

  return (
    <div className='content'>
        <form onSubmit={(e) => validate(e)}>
            <input onChange={(e) => setName(e.target.value)} required type="text" placeholder='Name' name='name'/>
            <input onChange={(e) => setDOB(e.target.value)} required type="date" placeholder='Date of Birth' name='dob'/>
            <input onChange={(e) => setNumber(e.target.value)} required type="tel" placeholder='Phone No' name='phone'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddData
