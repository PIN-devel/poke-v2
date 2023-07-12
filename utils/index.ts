import { PokeNamesType } from "@/types";

export const getKoName = (names: PokeNamesType[]) => {
  for (let i = 0; i < names.length; i++) {
    const data = names[i];
    if (data.language.name === "ko") return data.name;
  }
};

export const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

export const formatNumber = (index: number): string =>
  `#${String(index).padStart(3, "0")}`;
