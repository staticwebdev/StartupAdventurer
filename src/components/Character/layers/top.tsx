import React from "react";
import { useSelector } from "react-redux";
import tops from "@/components/CharacterOptions/tops";

import isEmpty from "lodash-es/isEmpty";
import get from "lodash-es/get";
import { IStoreState } from "@/interfaces/IStoreState";

const CharacterTop = () => {
	const { hoodie, jacket, shirt, tshirt } = tops;
	const {
		hoodie: selectedHoodie,
		jacket: selectedJacket,
		shirt: selectedShirt,
		tshirt: selectedTShirt,
	} = useSelector((store: IStoreState) => store.character);

	return (
		<g id="character-top">
			{!isEmpty(selectedTShirt) && tshirt.layer({ colors: get(selectedTShirt, "palette") })}
			{!isEmpty(selectedShirt) && shirt.layer({ colors: get(selectedShirt, "palette") })}
			{!isEmpty(selectedJacket) && jacket.layer({ colors: get(selectedJacket, "palette") })}
			{!isEmpty(selectedHoodie) && hoodie.layer({ colors: get(selectedHoodie, "palette") })}
		</g>
	);
};

export default CharacterTop;
