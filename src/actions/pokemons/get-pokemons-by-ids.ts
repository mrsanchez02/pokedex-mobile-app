import { getPokemonById } from ".";
import { Pokemon } from "../../domain/entities/Pokemon";

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
  try {
    const pokemonPromises: Promise<Pokemon>[] = ids.map(id => {
      return getPokemonById(id);
    });

    return Promise.all(pokemonPromises);
  } catch (error) {
    throw new Error(`Error getting pokemon by ids: ${ids}`);
  };
};
