import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react" 

function UserHomePage(){
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState()
	const [money, setMoney] = useState()
	const [characters, setCharacters] = useState([])

	const checkId = () => {
		if(location.state.id === null && document.cookie === ""){
			navigate("/")
		}
		else if(document.cookie !== "" && location.state.id === null){
			const userIdValue = document.cookie.match('(^|;)\\s*' + "id" + '\\s*=\\s*([^;]+)')?.pop() || ''
			return userIdValue
		}
		else{
			return location.state.id
		}
	}

	useEffect(() => {
		// Why
		const getUserData = async () => {
			const response = await fetch(`http://127.0.0.1:8000/api/user/${checkId()}`)
			if(response.status === 404){
				navigate("/")
			}
			else{
				const body = await response.json().then((event) => {return event})
				setUsername(body["username"])
				setMoney(body["money"])
			}
		}

		const getRollData = async () => {
			const response = await fetch(`http://127.0.0.1:8000/api/roll/${checkId()}`)
			if(response.status === 404){
				navigate("/")
			}
			else{
				const body = await response.json()
				setCharacters(body)
			}
		}

		getUserData()
		getRollData()
	}, [location.state.id])

  return(
	<div>
	  <h1>UserHomePage</h1>
	  <div>
		<p>{username}</p>
		<p>{money}</p>
	  </div>
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
