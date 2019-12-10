import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass( items: Payload[] ): number {
        let var1: number = 0;
        for (let i=0; i < items.length; i++) {
            var1 += items[i].massKg;
        } 
        return var1;
    }
    currentMassKg(): number {
        let var1: number = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return var1;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo(cargo: Cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }


}