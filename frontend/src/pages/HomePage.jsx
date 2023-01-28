import React, { useState, useEffect } from "react"

function HomePage(){
  const [data, setData] = useState([])

  const getUser = async () => {
    const fetchedData = await fetch("http://127.0.0.1:8000/api/users/1/").then((response) => response.json())
    console.log(data)
    setData(fetchedData)
  }

  useEffect(() => {
    if (data.length === 0){
      getUser()
    }
  }, [getUser])
  
  return(
    <div>
	  <h1>Test</h1>
      <p>{data["username"]}</p>
    </div>
  )
}
export default HomePage
