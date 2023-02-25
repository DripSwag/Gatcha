import { useNavigate, useLocation } from "react-router-dom"

function TopTab({ name, money }){
  const location = useLocation()
  const navigate = useNavigate()
  
  const click = () => {
    const user_id = location.state.id

    navigate(-1, {
      state:{
        id: user_id
      }
    })
  }

  return(
    <div>
      <button onClick={click}>Back</button>
      <div>
        <p>{name}</p>
        <p>{money}</p>
      </div>
	</div>
  )
}
export default TopTab
