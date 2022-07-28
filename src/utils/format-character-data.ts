import { Colors } from "@/interfaces/Colors";
import { IStoreState } from "@/interfaces/IStoreState";
import { IColorSet } from "./selection-utils";

const getColorString = (colorObj: { name: string; palette: Colors }) => {
  const { name, palette } = colorObj;

  if (!palette) return name;

  return name + "|" + palette.join(",");
};

export const decodeColourSet = (data: string): IColorSet => {
  const [name, palette] = data.split("|");

  return {
    name,
    palette: palette.split(","),
  };
};

const getColoredAttribute = (name: string | undefined, color: { name: string; palette: Colors }) => {
  if (!color || !color.palette || !color.name) {
    return {
      id: name ? name : "none",
      color: undefined,
    };
  }

  return {
    id: name ? name : "none",
    color: getColorString(color),
  };
};

type NecessaryState = Omit<IStoreState, "ui">;

const formatCharacterData = (state: NecessaryState) => {
  const {
    info,
    character,
    stats: { gradedStats = [] },
  } = state;

  const characterData = {
    appearance: {
      hair: getColoredAttribute(character.hairstyle, character.hairColor),
      facialHair: getColoredAttribute(character.facialHair, character.facialHairColor),
      skin: character.skinColor ? character.skinColor.name + "|" + character.skinColor.palette.join(",") : "",
      eyewear: character.eyewear || null,
      "t-shirt": character.tshirt ? getColorString(character.tshirt) : null,
      shirt: character.shirt ? getColorString(character.shirt) : null,
      jacket: character.jacket ? getColorString(character.jacket) : null,
      hoodie: character.hoodie ? getColorString(character.hoodie) : null,
      "bottom-clothes": character.bottom ? getColoredAttribute(character.bottom.style, character.bottom.color) : null,
      shoes: character.shoes ? character.shoes : null,
    },
    stats: gradedStats,
    accessories: character.accessories,
    companyInfo: info,
    startedAt: character.startedAt,
    completedAt: character.completedAt,
  };

  return characterData;
};

export default formatCharacterData;
