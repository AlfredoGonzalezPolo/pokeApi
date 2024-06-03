import { pokeType } from './pokeType';

export type Pokemon = {
  id: number;
  name: string;
  imgUrl: string;
  imgUrlBack: string;

  size: {
    weight: number;
    height: number;
  };

  stats: {
    name: string;
    value: number;
  }[];

  type1: keyof typeof pokeType;
  type2: keyof typeof pokeType;
};
