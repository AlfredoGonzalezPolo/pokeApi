import { Stat } from './stats';
import { Type } from './type';

export type PokemonResponse = {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: Stat[];
  types: Type[] | undefined[];
  sprites: {
    front_default?: string;
    back_default?: string;
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
            back_default: string;
          };
        };
      };
    };
  };
};
