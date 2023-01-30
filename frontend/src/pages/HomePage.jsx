import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function HomePage(){
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/login")
  }

  return(
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
export default HomePage
