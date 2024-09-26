interface VehicleOptions{
  vin?: string;
  owners_name?: string;
}

export class Vehicle{
  private vin: string; //must put access modifier(private)
  private owners_name: string; //must put access modifier(private)
  // forward(){
  //   console.log( "Move forward");
  //   return "Move forward"
  // }
  // reverse(){
  //   console.log("Move backward");
  //   return "Move backward"

  // }

    drive(){
      return "drive";
    }

    constructor( vin: string, owners_name: string){
      this.vin = vin;
      this.owners_name = owners_name;
    }

    transferOwnership(newOwner: string): void {
      this.owners_name = newOwner;
    }

    // duplicate({vin, owners_name}:{vin?:string , owners_name?: string} = {}): Vehicle{
    //   return new Vehicle( vin ?? this.vin, owners_name ?? this.owners_name);
    // }   // cleaner way for this

    duplicate(options: VehicleOptions = {} ): Vehicle{
      const {vin = this.vin, owners_name = this.owners_name} = options;
      return new Vehicle(vin, owners_name);
    }
}

export class Car extends Vehicle{
  constructor(vin: string, owners_name: string){
    super(vin, owners_name);
  }

  reverse() {
    return "reverse"
  }
}

export class Motorcycle extends Vehicle{
  constructor(vin: string, owners_name: string){
    super(vin, owners_name);
  }
}

//

