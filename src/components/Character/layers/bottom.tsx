import React from "react";
import bottoms from "@/components/CharacterOptions/bottoms";
import { useSelector } from "react-redux";
import get from "lodash-es/get";
import { IStoreState } from "@/interfaces/IStoreState";

const BottomLayer = () => {
	const { bottom: selectedBottom = {} } = useSelector((store: IStoreState) => store.character);
	const activeLayer = get(bottoms, [selectedBottom.style, "layer"]);

	return (
		<g id="character-bottom">
			{activeLayer ? activeLayer({ colors: get(selectedBottom, ["color", "palette"]) }) : null}
		</g>
	);
};

export default BottomLayer;
