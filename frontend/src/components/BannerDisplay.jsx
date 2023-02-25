import { useNavigate } from "react-router-dom"

function BannerDisplay({ name, price, user_id, banner_id }){
  const navigate = useNavigate()

  const purchase = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/roll/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "banner": banner_id,
            "user": user_id
        })
    })
    if(response.status === 303){
      console.log("Poor")
    }
    else{
      const body = await response.json().then((data) => {return data})
      navigate("/homepage/banners/rolled", {
        state:{
          attack:body["attack"],
          defense:body["defense"],
          name:body["name"],
          rarity:body["rarity"],
          id:user_id
        }
      })
    }
  }
  
  return(
	<div>
      <h2>{name}</h2>
      <button onClick={purchase}>{price}</button>
	</div>
  )
}
export default BannerDisplay
