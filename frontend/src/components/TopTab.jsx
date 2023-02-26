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
    <div className="h-16 bg-sky-300 py-1 relative mb-16">
      <button onClick={click} className="bg-[#262626] h-[90%] w-16 absolute text-white">Back</button>
      <div className="bg-[#262626] rounded-2xl w-max py-0.5 px-8 h-max absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
        <p className="text-white">{name}</p>
      </div>
      <div className="bg-[#262626] rounded-2xl w-max py-0.5 px-8 absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 h-max">
        <p className="text-white">{money}</p>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 rounded-full bg-white text-black w-8 h-8">+</button>
      </div>
	</div>
  )
}
export default TopTab
