import React from "react";
import bottoms from "@/components/CharacterOptions/bottoms";
import { useSelector } from "react-redux";
import get from "lodash-es/get";
import { IStoreState } from "@/interfaces/IStoreState";

interface IProps {
	selected?: {
		style: string,
		color: string
	}
}

const BottomLayer = ({ selected: selectedBottom }: IProps) => {
	const activeLayer = selectedBottom ? get(bottoms, [selectedBottom.style, "layer"]) : null;

	return (
		<g id="character-bottom">
			{activeLayer ? activeLayer({ colors: get(selectedBottom, ["color", "palette"]) }) : null}
		</g>
	);
};

export default BottomLayer;
