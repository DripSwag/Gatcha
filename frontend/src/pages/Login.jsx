import {useNavigate} from "react-router-dom"
import { useState } from "react"

function Login(){
	const navigate = useNavigate()
	const [username, setUsername] = useState(undefined)
	const [password, setPassword] = useState(undefined)

	const getId = async () => {
		const url = `http://127.0.0.1:8000/api/users/${username}/${password}`
		//Bruh async moments why, inefficient
		const response = await fetch(url)
		if(response.status === 500){
			return null
		}
		else{
			const body = await response.json().then((event) => {return event["id"]})
			return body
		}
	}
	
	const idCheck = async () => {
		const userId = await getId()
		if(userId === undefined){
			console.log("Nope")
		}
		else{
			//Need to add the id to cookies here
			navigate("/homepage", {
				state:{
					id:userId
				}
			})
		}
	}

	return(
		<div>
		  <form>
		    <input type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}></input>
			<input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}></input>
		  </form>
		  <button onClick={idCheck}>Login</button>
		  <button onClick={() => {navigate("/createAccount")}}>Create Account</button>
		</div>
	)
}
export default Login
