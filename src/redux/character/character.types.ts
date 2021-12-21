import { Action } from "@/redux/createAction";
import { ICharacter, IColoredSelection, IStyledSelection, TopStyle } from "@/interfaces/ICharacter";

export const SET_HAIRSTYLE: string = "character/SET_HAIRSTYLE";
export const SET_HAIR_COLOR: string = "character/SET_HAIR_COLOR";
export const SET_SKIN_COLOR: string = "character/SET_SKIN_COLOR";
export const SET_FACIAL_HAIR: string = "character/SET_FACIAL_HAIR";
export const SET_FACIAL_HAIR_COLOR: string = "character/SET_FACIAL_HAIR_COLOR";
export const SET_EYEWEAR: string = "character/SET_EYEWEAR";
export const SET_TOP: string = "character/SET_TOP";
export const SET_BOTTOM: string = "character/SET_BOTTOM";
export const SET_SHOES: string = "character/SET_SHOES";
export const SET_ACCESSORY: string = "character/SET_ACCESSORY";

export const SET_START_TIME: string = "character/SET_START_TIME";
export const SET_END_TIME: string = "character/SET_END_TIME";

export const SET_VIEWED_TAB: string = "character/SET_VIEWED_TAB";

export const RESET_CHARACTER: string = "character/RESET_CHARACTER";

export enum CharacterActionType {
	SET_HAIRSTYLE = "character/SET_HAIRSTYLE",
	SET_HAIR_COLOR = "character/SET_HAIR_COLOR",
	SET_SKIN_COLOR = "character/SET_SKIN_COLOR",
	SET_FACIAL_HAIR = "character/SET_FACIAL_HAIR",
	SET_FACIAL_HAIR_COLOR = "character/SET_FACIAL_HAIR_COLOR",
	SET_EYEWEAR = "character/SET_EYEWEAR",
	SET_TOP = "character/SET_TOP",
	SET_BOTTOM = "character/SET_BOTTOM",
	SET_SHOES = "character/SET_SHOES",
	SET_ACCESSORY = "character/SET_ACCESSORY",
	SET_START_TIME = "character/SET_START_TIME",
	SET_END_TIME = "character/SET_END_TIME",
	SET_VIEWED_TAB = "character/SET_VIEWED_TAB",
	RESET_CHARACTER = "character/RESET_CHARACTER",
}

type SetBottomAction = Action<typeof CharacterActionType.SET_BOTTOM, ICharacter['bottom']>;
type SetTopAction = Action<typeof CharacterActionType.SET_TOP, IStyledSelection<TopStyle>>;
type SetShoesAction = Action<typeof CharacterActionType.SET_SHOES, IStyledSelection<string>>;
type SetAccessoryAction = Action<typeof CharacterActionType.SET_ACCESSORY, IStyledSelection<string | undefined>>;
type SetHairStyleAction = Action<typeof CharacterActionType.SET_HAIRSTYLE, Partial<IStyledSelection<string>>>;
type SetHairColorAction = Action<typeof CharacterActionType.SET_HAIR_COLOR, IColoredSelection>;

export type CharacterAction = SetBottomAction | SetTopAction | SetShoesAction | SetAccessoryAction | SetHairStyleAction | SetHairColorAction;