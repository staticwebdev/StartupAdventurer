import { IColorSet } from "@/interfaces/Colors";
import { BottomStyle, TopStyle } from "@/interfaces/ICharacter"
import { CharacterAction, CharacterActionType } from "@/redux/character/character.types"

export const setHairStyle = (style: string | undefined): CharacterAction => ({
  type: CharacterActionType.SET_HAIRSTYLE,
  payload: { style },
  typed: true
});

export const setHairColor = (color: IColorSet | undefined): CharacterAction => ({
  type: CharacterActionType.SET_HAIR_COLOR,
  payload: { color },
  typed: true
});

export const setFacialHair = (style: string | undefined): CharacterAction => ({
  type: CharacterActionType.SET_FACIAL_HAIR,
  payload: { style },
  typed: true
});

export const setFacialHairColor = (color: IColorSet | undefined): CharacterAction => ({
  type: CharacterActionType.SET_FACIAL_HAIR_COLOR,
  payload: { color },
  typed: true
});

export const setSkinColor = (color: IColorSet): CharacterAction => ({
  type: CharacterActionType.SET_SKIN_COLOR,
  payload: { color },
  typed: true
});

export const setEyewear = (style: string | undefined): CharacterAction => ({
  type: CharacterActionType.SET_EYEWEAR,
  payload: { style },
  typed: true
});

export const setTop = (style: TopStyle, color?: IColorSet): CharacterAction => ({
  type: CharacterActionType.SET_TOP,
  payload: { style, color },
  typed: true
});

export const setBottom = (style: BottomStyle, color?: IColorSet): CharacterAction => ({
  type: CharacterActionType.SET_BOTTOM,
  payload: { style, color },
  typed: true
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

export const setStartTime = (time: string): CharacterAction => ({
  type: CharacterActionType.SET_START_TIME,
  payload: { time },
  typed: true
});

export const setEndTime = (time: string): CharacterAction => ({
  type: CharacterActionType.SET_END_TIME,
  payload: { time },
  typed: true
});

export const setViewedTab = (tab: string): CharacterAction => ({
  type: CharacterActionType.SET_VIEWED_TAB,
  payload: { tab },
  typed: true
});

export const resetCharacter = (): CharacterAction => ({
  type: CharacterActionType.RESET_CHARACTER,
  payload: {},
  typed: true
});
