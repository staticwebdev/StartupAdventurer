import React from "react";
import hair from "@/components/CharacterOptions/hair";
import { useSelector } from "react-redux";
import get from "lodash-es/get";
import { IStoreState } from "@/interfaces/IStoreState";

const HairLayer = () => {
	const { hairstyle = "", hairColor } = useSelector((store: IStoreState) => store.character);
	const activeLayer = get(hair, [hairstyle, "layer"]);

	return <g id="character-hair">{activeLayer ? activeLayer({ colors: get(hairColor, ["palette"]) }) : null}</g>;
};

export default HairLayer;
