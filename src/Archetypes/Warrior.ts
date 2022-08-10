import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static counter = 0;
  private _hability: EnergyType;
  constructor(_name: string) {
    super(_name);
    this._hability = 'stamina';
    Warrior.counter += 1;
  }

  get energyType(): EnergyType {
    return this._hability as EnergyType;
  }

  static createdArchetypeInstances() {
    return Warrior.counter;
  }
}