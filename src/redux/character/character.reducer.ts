import {
  SET_HAIRSTYLE,
  SET_HAIR_COLOR,
  SET_SKIN_COLOR,
  SET_FACIAL_HAIR,
  SET_FACIAL_HAIR_COLOR,
  SET_EYEWEAR,
  SET_TOP,
  SET_BOTTOM,
  SET_SHOES,
  RESET_CHARACTER,
  SET_ACCESSORY,
  SET_START_TIME,
  SET_END_TIME,
  SET_VIEWED_TAB,
} from "./character.types";
import { defaultColorObject } from "@/components/CharacterOptions/hair/colors";
import { defaultColorObject as defaultSkin } from "@/components/CharacterOptions/skin";
import { defaultColorObject as defaultFacialHairColor } from "@/components/CharacterOptions/facial-hair/colors";
import { IAction } from "@/interfaces/IAction";
import { ICharacter } from "@/interfaces/ICharacter";
import isEqual from "lodash-es/isEqual";

const initialState: ICharacter = {
  hairstyle: "hair7",
  hairColor: defaultColorObject,
  skinColor: defaultSkin,
  facialHairColor: defaultFacialHairColor,
  viewedOptionTabs: [],
};

const reducer = (state: ICharacter = initialState, { type, payload }: IAction) => {
  switch (type) {
    case SET_HAIRSTYLE:
      return {
        ...state,
        hairstyle: payload.style,
      };

    case SET_HAIR_COLOR:
      return {
        ...state,
        hairColor: {
          ...payload.color,
        },
      };

    case SET_SKIN_COLOR:
      return {
        ...state,
        skinColor: {
          ...payload.color,
        },
      };

    case SET_FACIAL_HAIR:
      return {
        ...state,
        facialHair: payload.style,
      };

    case SET_FACIAL_HAIR_COLOR:
      return {
        ...state,
        facialHairColor: {
          ...payload.color,
        },
      };

    case SET_EYEWEAR:
      return {
        ...state,
        eyewear: payload.style,
      };

    case SET_TOP:
      /* remove option if adding already equipped style */
      if (payload.color && isEqual(state[payload.style], payload.color)) {
        const newState = {
          ...state,
        };
        delete newState[payload.style];
        return newState;
      } else {
        return {
          ...state,
          [payload.style]: {
            ...payload.color,
          },
        };
      }

    case SET_BOTTOM:
      /* remove option if adding already equipped style or no color is selected */
      if ((payload.color && state.bottom && isEqual(state.bottom.color, payload.color)) || !payload.color) {
        const { bottom, ...newState } = state;
        return newState;
      } else {
        return {
          ...state,
          bottom: {
            ...payload,
          },
        };
      }

    case SET_SHOES:
      if (state.shoes && state.shoes === payload.style) {
        const { shoes, ...newState } = state;

        return newState;
      } else {
        return {
          ...state,
          shoes: payload.style,
        };
      }

    case SET_ACCESSORY: {
      if (!payload.style) return { ...state, accessories: [] };
      const accs = state.accessories ? state.accessories : [];
      const index = accs.indexOf(payload.style);

      let newAccessories = [...accs];
      if (index === -1) {
        newAccessories = [...newAccessories, payload.style];
      } else {
        newAccessories.splice(index, 1);
      }

      return {
        ...state,
        accessories: newAccessories,
      };
    }

    case SET_START_TIME:
      return {
        ...state,
        startedAt: payload.time,
      };

    case SET_END_TIME:
      return {
        ...state,
        completedAt: payload.time,
      };

    case SET_VIEWED_TAB:
      return {
        ...state,
        viewedOptionTabs: [...state.viewedOptionTabs, payload.tab],
      };

    case RESET_CHARACTER:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
