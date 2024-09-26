// pokedex.ts

// Define the Pokemon interface
export interface Pokemon {
  name: string;
  abilities: string[];
  height: number;
  weight: number;
  forms: string[];
}

// Define the Pokedex class
export class Pokedex {
  private readonly url: string; // URL should not be reassigneable
  private cache: Pokemon[] = []; // Cache to store fetched Pokemon objects

  constructor(url: string) {
    this.url = url;
    // this.cache = [];
  }

  // Method to find a Pokémon by its name
  public async findPokemonByName(name: string): Promise<Pokemon> {
    // Check if the Pokémon is already in the cache
    const cachedPokemon = this.cache.find(pokemon => pokemon.name === name);
    if (cachedPokemon) {
      return Promise.resolve(cachedPokemon); // Return the cached Pokémon if found
    }

    // If not found in the cache, fetch from the API
    // const response = await fetch(`${this.url}/${name}`);

    // if (!response.ok) {
    //   throw new Error(`Pokemon not found: ${name}`);
    // }

    // const data = await response.json();

    // // Transform the response data into the Pokemon type
    // const pokemon: Pokemon = {
    //   name: data.name,
    //   abilities: data.abilities.map((ability: any) => ability.ability.name),
    //   height: data.height,
    //   weight: data.weight,
    //   forms: data.forms.map((form: any) => form.name)
    // };`

    return fetch(`${this.url}/${name}`)
        .then(response =>{
          if(!response.ok){
            throw new Error(`Pokemon not found: ${name}`);
          }
          return response.json();
        })
        .then(data => {
          const pokemon: Pokemon = {
            name: data.name,
            abilities: data.abilities.map((ability: any) =>ability.ability.name),
            height: data.height,
            weight: data.weight,
            forms: data.forms.map((form: any) => form.name)
          };

          this.cache.push(pokemon);
          return pokemon;
        });

    // Save the new Pokémon to the cache
    // this.cache.push(pokemon);

    // return pokemon; // Return the newly fetched Pokémon
  }
}
