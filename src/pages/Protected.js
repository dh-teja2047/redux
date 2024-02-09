import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected(props) {

    const {Component} = props
    const navigate = useNavigate()

    useEffect( ()=>{
        let loginToken = localStorage.getItem('token')
        if(!loginToken){
            navigate('/login')
        }
    }

    )
  return (
    <div><Component/></div>
  )
}

export default Protected