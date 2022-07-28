import React from "react";
import shoes from "@/components/CharacterOptions/shoes";
import { useSelector } from "react-redux";
import { IStoreState } from "@/interfaces/IStoreState";

const shoeLayers = shoes.map((shoe, i: number) => ({
	name: `shoe-${i + 1}`,
	component: shoe.layer,
}));

const ShoeLayer = () => {
	const { shoes: selectedShoes = "" } = useSelector((store: IStoreState) => store.character);

	const getShoeByName = (name: string) => shoeLayers.filter(shoe => shoe && shoe.name === name)[0];

	const getLayer = (active: string) => {
		const shoe = getShoeByName(active);
		return shoe ? shoe.component() : null;
	};

	return <g id="character-shoes">{getLayer(selectedShoes)}</g>;
};

export default ShoeLayer;
