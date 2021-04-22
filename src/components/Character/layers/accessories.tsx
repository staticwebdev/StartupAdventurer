import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import accessories from "@/components/CharacterOptions/accessories";

import get from "lodash-es/get";
import { IStoreState } from "@/interfaces/IStoreState";

const CharacterAccessories = () => {
	const { accessories: selectedAccessories } = useSelector((store: IStoreState) => store.character);

	const getLayer = (key: string, i: number) => {
		const layer = get(accessories, [key, "layer"]);

		if (typeof layer === "function") return <Fragment key={"layer" + key + i}>{layer()}</Fragment>;

		return null;
	};

	return <g id="character-accessories">{!!selectedAccessories && selectedAccessories.map(getLayer)}</g>;
};

export default CharacterAccessories;
