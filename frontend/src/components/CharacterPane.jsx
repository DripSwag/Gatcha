function CharacterPane({ name, attack, defense, rarity }){
  return(
    <div>
	  <p>{rarity}</p>
	  <div>
	    <p>{name}</p>
	    <p>{attack}</p>
	  </div>
	  <p>{defense}</p>
	</div>
  )
}
export default CharacterPane
