import {
  SET_HAIRSTYLE,
  SET_HAIR_COLOR,
  SET_FACIAL_HAIR,
  SET_FACIAL_HAIR_COLOR,
  SET_SKIN_COLOR,
  SET_EYEWEAR,
  SET_BOTTOM,
  SET_TOP,
  SET_SHOES,
  RESET_CHARACTER,
  SET_ACCESSORY,
  SET_START_TIME,
  SET_END_TIME,
  SET_VIEWED_TAB,
} from "./character.types";
import { Colors } from "@/interfaces/Colors";
import { IAction } from "@/interfaces/IAction";

interface IColorSet {
  name: string;
  palette?: Colors;
}

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

export const setTop = (style: string, color?: IColorSet): IAction => ({
  type: SET_TOP,
  payload: { style, color },
});

export const setBottom = (style: string, color?: IColorSet): IAction => ({
  type: SET_BOTTOM,
  payload: { style, color },
});

export const setShoes = (style: string): IAction => ({
  type: SET_SHOES,
  payload: { style },
});

export const setAccessory = (style: string | undefined): IAction => ({
  type: SET_ACCESSORY,
  payload: { style },
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
