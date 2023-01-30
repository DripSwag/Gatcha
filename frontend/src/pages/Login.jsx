import {useNavigate} from "react-router-dom"
import { useState } from "react"

function Login(){
	const navigate = useNavigate()
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()

	const onClick = async () => {
		const url = `http://127.0.0.1:8000/api/users/${username}/${password}`
		//Bruh async moments why, inefficient
		const response = await fetch(url)
		const body = await response.json()
		const id = body["id"]
	}

	return(
		<div>
			<form>
				<input type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}></input>
				<input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}></input>
			</form>
			<button onClick={onClick}>Login</button>
		</div>
	)
}
export default Login
