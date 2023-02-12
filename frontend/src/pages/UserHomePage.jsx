import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react" 

function UserHomePage(){
	const location = useLocation()
	const [username, setUsername] = useState()
	const [money, setMoney] = useState()
	const [characters, setCharacters] = useState([])

	const getUserData = async () => {
		const response = await fetch(`http://127.0.0.1:8000/api/user/${location.state.id}`)
		if(response.status === 500){
			return null
		}
		else{
			const body = await response.json().then((event) => {return event})
			setUsername(body["username"])
			setMoney(body["money"])
		}
	}

	const getRollData = async () => {
		const response = await fetch(`http://127.0.0.1:8000/api/roll/${location.state.id}`)
		if(response.status === 500){
			return null
		}
		else{
			const body = await response.json()
			setCharacters(body)
		}
	}

	useEffect(() => {
		getUserData()
		getRollData()
	}, [getUserData, getRollData])

  return(
	<div>
	  <h1>UserHomePage</h1>
	  <h2>{username}</h2>
	  <p>{money}</p>
	  {characters && characters.map((data, x) => {
			return <div key={x}>
				<p>{data["name"]}</p>
				<p>{data["attack"]}</p>
				<p>{data["defense"]}</p>
			  </div>
		})}
	</div>
  )
}
export default UserHomePage
