"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
const car = new vehicle_1.Car('1HGCM82633A123456', 'Alice');
console.log(car.drive());
console.log(car);
car.transferOwnership('Bob');
const newCar = car.duplicate();
console.log(newCar);
//console.log(Motorcycle);
const moto = new vehicle_1.Motorcycle('1HGCM82633A123490', 'Robert');
console.log(moto);
// const newMoto = moto.duplicate();
// console.log(newMoto);
moto.transferOwnership('Nick');
const newMoto = moto.duplicate();
console.log(newMoto);
//pokemon
const pokedex_1 = require("./pokedex");
const pokedex = new pokedex_1.Pokedex('https://pokeapi.co/api/v2/pokemon');
pokedex.findPokemonByName('raichu')
    .then(pokemon => console.log(pokemon))
    .catch(error => console.error(error));
