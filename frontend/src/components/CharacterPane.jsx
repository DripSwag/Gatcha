function CharacterPane({ name, attack, defense, rarity }){
	const rarityDic = {
		1:"UR",
		2:"SSR",
		3:"SR",
		4:"R",
		5:"N",
	}

	const stylingDic = {
		"UR": "bg-gradient-to-tr from-red-500 via-yellow-500 via-green-500 to-blue-500",
		"SSR": "bg-yellow-500",
		"SR": "bg-blue-500",
		"R": "bg-green-500",
		"N": "bg-gray-300",
	}

  return(
    <div className={`h-64 w-40 relative bg-gray-300 rounded-xl ${stylingDic[rarityDic[rarity]]}`}>
	  <p className="absolute right-0 p-2">{rarityDic[rarity]}</p>
	  <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{name}</p>
	  <div className="absolute left-0 bottom-0 flex flex-col items-center justify-center m-2">
		<h2>ATK:</h2>
	    <p className="relative left-1/4">{attack}</p>
	  </div>
	  <div className="absolute right-0 bottom-0 flex flex-col items-center justify-center m-2">
		<h2 className="relative right-1/4">DEF:</h2>
	    <p>{defense}</p>
	  </div>
	</div>
  )
}
export default CharacterPane
