"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = exports.Car = exports.Vehicle = void 0;
class Vehicle {
    // forward(){
    //   console.log( "Move forward");
    //   return "Move forward"
    // }
    // reverse(){
    //   console.log("Move backward");
    //   return "Move backward"
    // }
    drive() {
        return "drive";
    }
    constructor(vin, owners_name) {
        this.vin = vin;
        this.owners_name = owners_name;
    }
    transferOwnership(newOwner) {
        this.owners_name = newOwner;
    }
    // duplicate({vin, owners_name}:{vin?:string , owners_name?: string} = {}): Vehicle{
    //   return new Vehicle( vin ?? this.vin, owners_name ?? this.owners_name);
    // }   // cleaner way for this
    duplicate(options = {}) {
        const { vin = this.vin, owners_name = this.owners_name } = options;
        return new Vehicle(vin, owners_name);
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor(vin, owners_name) {
        super(vin, owners_name);
    }
    reverse() {
        return "reverse";
    }
}
exports.Car = Car;
class Motorcycle extends Vehicle {
    constructor(vin, owners_name) {
        super(vin, owners_name);
    }
}
exports.Motorcycle = Motorcycle;
//
