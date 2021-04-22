import React from "react";
import facialHair from "@/components/CharacterOptions/facial-hair";
import { useSelector } from "react-redux";
import get from "lodash-es/get";
import camelCase from "lodash-es/camelCase";
import { IStoreState } from "@/interfaces/IStoreState";

const FacialHairLayer = () => {
	const { facialHair: activeFacialHair = "", facialHairColor } = useSelector((store: IStoreState) => store.character);
	const activeLayer = get(facialHair, [camelCase(activeFacialHair), "layer"]);

	return (
		<g id="character-facial-hair">
			{activeLayer ? activeLayer({ colors: get(facialHairColor, ["palette"]) }) : null}
		</g>
	);
};

export default FacialHairLayer;
