import { IColorSet } from "./Colors"

export interface ICharacter {
	[key: string]: any;
	bottom?: IStyledSelection<BottomStyle>;
	tops?: {
		hoodie?: IColorSet;
		tshirt?: IColorSet;
		shirt?: IColorSet;
		jacket?: IColorSet;
	};
	shoes?: string; // This should probably be a type
	accessories?: string[];
}

export type TopStyle = "hoodie" | "jacket" | "tshirt" | "shirt"
export type BottomStyle = "pants" | "maxi-skirt" | "mini-skirt" | "prosthetic"

export interface IStyledSelection<Styles> {
	style: Styles,
	color?: IColorSet
}

export interface IColoredSelection {
	color: IColorSet
}