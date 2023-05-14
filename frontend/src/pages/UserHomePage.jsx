import { useLocation, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import TopTab from "../components/TopTab.jsx"

function UserHomePage(){
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState()
	const [money, setMoney] = useState()

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

		getUserData()
	}, [checkId, navigate])

	return(
		<div className="text-white bg-home bg-cover bg-center min-h-screen static gap-4">
		<TopTab name={username} money={money}/>
			<div className="flex flex-col items-center align-center gap-8">
				<button onClick={() => {navigate("/homepage/characters", {state:{id:checkId()} })}} className="h-32 w-3/4 border-4 px-8 border-zinc-400 text-left relative background">Characters</button>
				<button onClick={() => {navigate("/homepage/banners", {state:{id:checkId()}})}} className="h-32 w-3/4 relative border-4 rounded-lg px-8 border-zinc-400 text-left background">Banners</button>
			</div>
		</div>
	)
}
export default UserHomePage
