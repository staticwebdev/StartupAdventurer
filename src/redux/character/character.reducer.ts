import {
  SET_SKIN_COLOR,
  SET_BOTTOM,
  RESET_CHARACTER,
  SET_START_TIME,
  SET_END_TIME,
  SET_VIEWED_TAB,
  CharacterAction,
  CharacterActionType,
} from "./character.types";
import { defaultColorObject } from "@/components/CharacterOptions/hair/colors";
import { defaultColorObject as defaultSkin } from "@/components/CharacterOptions/skin";
import { defaultColorObject as defaultFacialHairColor } from "@/components/CharacterOptions/facial-hair/colors";
import { IAction } from "@/interfaces/IAction";
import { ICharacter } from "@/interfaces/ICharacter";
import isEqual from "lodash-es/isEqual";

const initialState: ICharacter = {
  hair: {
    style: "hair7",
    color: defaultColorObject,
  },
  skinColor: defaultSkin,
  facialHair:
  {
    color: defaultFacialHairColor,
    style: undefined
  },
  viewedOptionTabs: [],
};

function isTyped(action: IAction | CharacterAction): action is CharacterAction {
  return (action as CharacterAction).typed === true;
}

const reducer = (state: ICharacter = initialState, action: IAction | CharacterAction) => {
  if (isTyped(action)) {
    switch (action.type) {
      case (CharacterActionType.SET_TOP):
        /* remove option if adding already equipped style */
        if (action.payload.color && state.tops && isEqual(state.tops[action.payload.style], action.payload.color)) {
          const newState = {
            ...state,
          };
          if (newState.tops) { delete newState.tops[action.payload.style]; }
          return newState;
        } else {
          return {
            ...state,
            tops: {
              ...state.tops,
              [action.payload.style]: {
                ...action.payload.color,
              },
            }
          };
        }
      case (CharacterActionType.SET_SHOES):
        if (state.shoes && state.shoes === action.payload.style) {
          const { shoes, ...newState } = state;

          return newState;
        } else {
          return {
            ...state,
            shoes: action.payload.style,
          };
        }
      case CharacterActionType.SET_ACCESSORY: {
        if (!action.payload.style) return { ...state, accessories: [] };
        const accs = state.accessories ? state.accessories : [];
        const index = accs.indexOf(action.payload.style);

        let newAccessories = [...accs];
        if (index === -1) {
          newAccessories = [...newAccessories, action.payload.style];
        } else {
          newAccessories.splice(index, 1);
        }

        return {
          ...state,
          accessories: newAccessories,
        };
      }
      case CharacterActionType.SET_HAIRSTYLE:
        return {
          ...state,
          hair: {
            ...state.hair,
            style: action.payload.style,
          }
        };

      case CharacterActionType.SET_HAIR_COLOR:
        return {
          ...state,
          hair: {
            ...state.hair,
            color: action.payload.color,
          }
        };
      case CharacterActionType.SET_EYEWEAR:
        return {
          ...state,
          eyewear: action.payload.style,
        };
      case CharacterActionType.SET_FACIAL_HAIR:
        return {
          ...state,
          facialHair: {
            ...state.facialHair,
            style: action.payload.style,
          }
        };

      case CharacterActionType.SET_FACIAL_HAIR_COLOR:
        return {
          ...state,
          facialHair: {
            ...state.facialHair,
            color: action.payload.color,
          },
        };
      case CharacterActionType.SET_BOTTOM:
        /* remove option if adding already equipped style or no color is selected */
        if ((action.payload?.color && state.bottom && isEqual(state.bottom.color, action.payload.color)) || !action.payload?.color) {
          const { bottom, ...newState } = state;
          return newState;
        } else {
          return {
            ...state,
            bottom: {
              ...action.payload,
            },
          };
        }
    }
  } else {
    const { type, payload } = action;
    switch (type) {

      case SET_SKIN_COLOR:
        return {
          ...state,
          skinColor: {
            ...payload.color,
          },
        };



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
  }
};

export default reducer;
