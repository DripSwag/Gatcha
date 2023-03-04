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
	<div className="text-white bg-home bg-cover min-h-screen static">
	  <TopTab name={username} money={money}/>
		<button onClick={() => {navigate("/homepage/characters", {state:{id:checkId()} })}} className="h-32 w-full border-y-[1px] px-8 border-white text-left relative background">Characters</button>
		<button onClick={() => {navigate("/homepage/banners", {state:{id:checkId()}})}} className="h-32 w-full relative border-y-[1px] px-8 border-white text-left background">Banners</button>
	</div>
  )
}
export default UserHomePage
