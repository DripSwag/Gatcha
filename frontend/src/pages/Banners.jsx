import { useState, useEffect, useCallback } from "react"
import TopTab from '../components/TopTab.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import BannerDisplay from '../components/BannerDisplay.jsx'

function Banners(){
	const navigate = useNavigate()
	const location = useLocation()
	const [username, setUsername] = useState()
	const [money, setMoney] = useState()
	const [banners, setBanners] = useState([])

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

		const getBanners = async () => {
			const response = await fetch('http://127.0.0.1:8000/api/banner')
			const body = await response.json().then((event) => {return event})
			setBanners(body)
		}

		getUserData()
		getBanners()
	}, [checkId, navigate])

  return(
	<div className="bg-roll bg-cover min-h-screen bg-center flex flex-col gap-8 pb-4">
	  <TopTab name={username} money={money} />
	  <div className="w-full min-h-full flex flex-col items-center gap-8">
		{ banners &&  banners.map((data) => {
		  return(<BannerDisplay key={data["id"]} name={data["name"]} price={data["price"]} user_id={location.state.id} banner_id={data["id"]} />)
		}) }
	  </div>
	</div>
  )
}
export default Banners
