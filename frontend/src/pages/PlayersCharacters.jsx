import { useNavigate, useLocation } from "react-router-dom"
import { useState, useCallback, useEffect } from "react"
import TopTab from "../components/TopTab"
import CharacterPane from "../components/CharacterPane"

function PlayersCharacters(){
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState()
	const [money, setMoney] = useState()
	const [characters, setCharacters] = useState([])

	const checkId = useCallback(() => {
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
	}, [location.state.id, navigate]) 

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

		const getCharacters = async () => {
			const response = await fetch(`http://127.0.0.1:8000/api/roll/${checkId()}`)
			if(response.status === 404){
				navigate("/")
			}
			else{
				const body = await response.json().then((event) => {return event})
				setCharacters(body)
			}
		}

		getUserData()
		getCharacters()
	}, [checkId, navigate])

  return(
	<div>
      <TopTab name={username} money={money} />
		{characters && characters.map((data, x) => {
			return <CharacterPane name={data["name"]} attack={data["attack"]} defense={data["defense"]} rarity={data["rarity"]}/>
		})}
	</div> 
  )
}
export default PlayersCharacters
