import React from "react";
import eyewear from "@/components/CharacterOptions/eyewear";
import { useSelector } from "react-redux";
import get from "lodash-es/get";
import camelCase from "lodash-es/camelCase";
import { IStoreState } from "@/interfaces/IStoreState";

const BottomLayer = () => {
	const { eyewear: selectedEyewear = "" } = useSelector((store: IStoreState) => store.character);
	const activeLayer = get(eyewear, [camelCase(selectedEyewear), "layer"]);

	return <g id="character-eyewear">{activeLayer ? activeLayer() : null}</g>;
};

export default BottomLayer;
