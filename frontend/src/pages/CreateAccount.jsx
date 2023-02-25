import { useNavigate } from "react-router-dom"
import { useState } from "react"

function CreateAccount(){
	const navigate = useNavigate()
	const [username, setUsername] = useState(undefined)
	const [password, setPassword] = useState(undefined)

	const post = async () => {
		const response = await fetch("http://127.0.0.1:8000/api/users/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"username":	username,
				"password": password
			})
		})
		if(response.status === 400){
			console.log("Nope")
		}
		else{
			navigate("/login")
		}
	}

  return(
	<div>
	  <form>
		<input type="text" placeholder="Username" onChange={(event) => {setUsername(event.target.value)}}></input>
		<input type="text" placeholder="Password" onChange={(event) => {setPassword(event.target.value)}}></input>
	  </form>
	  <button onClick={post}>Create Account</button>
	</div>
  )
}
export default CreateAccount;
