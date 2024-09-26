"use strict";
// pokedex.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
// Define the Pokedex class
class Pokedex {
    constructor(url) {
        this.cache = []; // Cache to store fetched Pokemon objects
        this.url = url;
        // this.cache = [];
    }
    // Method to find a Pokémon by its name
    findPokemonByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
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
                .then(response => {
                if (!response.ok) {
                    throw new Error(`Pokemon not found: ${name}`);
                }
                return response.json();
            })
                .then(data => {
                const pokemon = {
                    name: data.name,
                    abilities: data.abilities.map((ability) => ability.ability.name),
                    height: data.height,
                    weight: data.weight,
                    forms: data.forms.map((form) => form.name)
                };
                this.cache.push(pokemon);
                return pokemon;
            });
            // Save the new Pokémon to the cache
            // this.cache.push(pokemon);
            // return pokemon; // Return the newly fetched Pokémon
        });
    }
}
exports.Pokedex = Pokedex;
