import React from "react";
import { OptionPanel } from "./styles";
import hair from "@/components/CharacterOptions/hair";
import hairColors from "@/components/CharacterOptions/hair/colors";
import skinColors from "@/components/CharacterOptions/skin";
import facialHair from "@/components/CharacterOptions/facial-hair";
import facialHairColors from "@/components/CharacterOptions/facial-hair/colors";
import eyewear from "@/components/CharacterOptions/eyewear";

import OptionStyleSelectable from "@/components/Selectables/option-style-selectable";
import OptionColorSelectable from "@/components/Selectables/option-color-selectable";

import toArray from "lodash-es/toArray";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import {
	setHairStyle,
	setHairColor,
	setSkinColor,
	setFacialHair,
	setFacialHairColor,
	setEyewear,
} from "@/redux/character/character.actions";

import { IStoreState } from "@/interfaces/IStoreState";
import clsx from "clsx";

const BodyPanel = () => {
	const dispatch: Dispatch = useDispatch();

	const {
		hairstyle = "",
		hairColor,
		facialHair: selectedFacialHair = "",
		facialHairColor,
		skinColor,
		eyewear: selectedEyewear,
	} = useSelector((store: IStoreState) => store.character);

	const hairOptions = toArray(hair).map(({ name, thumb }) => ({
		value: name,
		thumb,
	}));

	const facialHairOptions = toArray(facialHair).map(({ name, thumb }) => ({
		value: name,
		thumb,
	}));

	const eyewearOptions = toArray(eyewear).map(({ name, thumb }) => ({
		value: name,
		thumb,
	}));

	return (
		<OptionPanel id="body-panel" aria-labelledby="body" className={clsx("body-options", !selectedFacialHair && "no-facial-hair", !hairstyle && "no-hair")}>
			<OptionStyleSelectable
				thumbColors={hairColor && hairColor.palette}
				horizontal={true}
				title="Hair style"
				styles={hairOptions}
				onResetClicked={() => dispatch(setHairStyle(undefined))}
				onStyleClicked={style => dispatch(setHairStyle(style))}
				selectedStyle={hairstyle}
				className="hair-style"
			/>
			<OptionColorSelectable
				horizontal={true}
				colors={hairColors}
				title="Hair Color"
				showTitle={false}
				onColorClicked={color => dispatch(setHairColor(color))}
				withHeader={false}
				withSwatchContainer={false}
				activeColor={hairColor}
				className="hair-color"
			/>

			<OptionColorSelectable
				title="Skin"
				horizontal={true}
				colors={skinColors}
				onColorClicked={color => dispatch(setSkinColor(color))}
				withSwatchContainer={false}
				activeColor={skinColor}
				className="skin-color"
				withResetButton={false}
			/>

			<OptionStyleSelectable
				thumbColors={facialHairColor && facialHairColor.palette}
				horizontal={true}
				title="Facial hair"
				styles={facialHairOptions}
				onResetClicked={() => dispatch(setFacialHair(undefined))}
				onStyleClicked={style => dispatch(setFacialHair(style))}
				selectedStyle={selectedFacialHair}
				className="facial-hair"
			/>
			<OptionColorSelectable
				title="Facial Hair Color"
				horizontal={true}
				colors={facialHairColors}
				onColorClicked={color => dispatch(setFacialHairColor(color))}
				onResetClicked={() => dispatch(setFacialHairColor(undefined))}
				withHeader={false}
				withSwatchContainer={false}
				activeColor={facialHairColor}
				className="facial-hair-color"
			/>
			<OptionStyleSelectable
				horizontal={true}
				title="Glasses"
				styles={eyewearOptions}
				onResetClicked={() => dispatch(setEyewear(null))}
				onStyleClicked={style => dispatch(setEyewear(style))}
				selectedStyle={selectedEyewear}
				className="eyewear"
			/>
		</OptionPanel>
	);
};

export default BodyPanel;
