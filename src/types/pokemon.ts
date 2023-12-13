export type Pokemon = {
  id: number;
  name: string;
  imgUrl: string;
  size: { weight: number; height: number };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  type: {
    mainType: string;
    secondaryType: string;
  };
};
