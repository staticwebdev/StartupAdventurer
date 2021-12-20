import {
  SET_HAIRSTYLE,
  SET_HAIR_COLOR,
  SET_FACIAL_HAIR,
  SET_FACIAL_HAIR_COLOR,
  SET_SKIN_COLOR,
  SET_EYEWEAR,
  SET_BOTTOM,
  RESET_CHARACTER,
  SET_START_TIME,
  SET_END_TIME,
  SET_VIEWED_TAB,
} from "./character.types";
import { IColorSet } from "@/interfaces/Colors";
import { IAction } from "@/interfaces/IAction";
import { TopStyle } from "@/interfaces/ICharacter"
import { CharacterAction, CharacterActionType } from "@/redux/character/character.types"

export const setHairStyle = (style: string | undefined): IAction => ({
  type: SET_HAIRSTYLE,
  payload: { style },
});

export const setHairColor = (color: IColorSet | undefined): IAction => ({
  type: SET_HAIR_COLOR,
  payload: { color },
});

export const setFacialHair = (style: string | undefined): IAction => ({
  type: SET_FACIAL_HAIR,
  payload: { style },
});

export const setFacialHairColor = (color: IColorSet | undefined): IAction => ({
  type: SET_FACIAL_HAIR_COLOR,
  payload: { color },
});

export const setSkinColor = (color: IColorSet): IAction => ({
  type: SET_SKIN_COLOR,
  payload: { color },
});

export const setEyewear = (style: string | null): IAction => ({
  type: SET_EYEWEAR,
  payload: { style },
});

export const setTop = (style: TopStyle, color?: IColorSet): CharacterAction => ({
  type: CharacterActionType.SET_TOP,
  payload: { style, color },
  typed: true
});

export const setBottom = (style: string, color?: IColorSet): IAction => ({
  type: SET_BOTTOM,
  payload: { style, color },
});

export const setShoes = (style: string): CharacterAction => ({
  type: CharacterActionType.SET_SHOES,
  payload: { style },
  typed: true
});

export const setAccessory = (style: string | undefined): CharacterAction => ({
  type: CharacterActionType.SET_ACCESSORY,
  payload: { style },
  typed: true
});

export const setStartTime = (time: string): IAction => ({
  type: SET_START_TIME,
  payload: { time },
});

export const setEndTime = (time: string): IAction => ({
  type: SET_END_TIME,
  payload: { time },
});

export const setViewedTab = (tab: string): IAction => ({
  type: SET_VIEWED_TAB,
  payload: { tab },
});

export const resetCharacter = (): IAction => ({
  type: RESET_CHARACTER,
  payload: {},
});
