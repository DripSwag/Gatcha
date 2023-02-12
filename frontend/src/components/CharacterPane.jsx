function CharacterPane({ name, attack, defense, rarity }){
  return(
    <div>
	  <p>{name}</p>
	  <p>{attack}</p>
	  <p>{defense}</p>
	  <p>{rarity}</p>
	</div>
  )
}
export default CharacterPane
