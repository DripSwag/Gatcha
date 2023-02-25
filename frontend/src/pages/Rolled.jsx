import { useLocation, useNavigate } from "react-router-dom"
import CharacterPane from "../components/CharacterPane" 

function Rolled(){
  const location = useLocation()
  const navigate = useNavigate()

  const click = () => {
	  navigate(-1, {
		  state:{
			  id:location.state.id
		  }
	  })
  }

  return(
	<div>
	  <CharacterPane name={location.state.name} attack={location.state.attack} defense={location.state.defense} rarity={location.state.rarity} />
	  <button onClick={click}>Back</button> 
	</div>
  )
}
export default Rolled
