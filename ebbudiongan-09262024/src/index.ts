import { Vehicle, Car, Motorcycle } from './vehicle';

const car = new Car('1HGCM82633A123456', 'Alice');
console.log(car.drive());
console.log(car);
car.transferOwnership('Bob');
const newCar = car.duplicate();
console.log(newCar);
//console.log(Motorcycle);
const moto = new Motorcycle('1HGCM82633A123490', 'Robert')
console.log(moto);
// const newMoto = moto.duplicate();
// console.log(newMoto);
moto.transferOwnership('Nick')
const newMoto = moto.duplicate();
console.log(newMoto);

//pokemon

import { Pokedex } from './pokedex';

const pokedex = new Pokedex('https://pokeapi.co/api/v2/pokemon');

pokedex.findPokemonByName('raichu')
  .then(pokemon => console.log(pokemon))
  .catch(error => console.error(error));
