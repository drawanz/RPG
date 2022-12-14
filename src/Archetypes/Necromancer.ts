import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static counter = 0;
  private _hability: EnergyType;
  constructor(_name: string) {
    super(_name);
    this._hability = 'mana';
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this._hability as EnergyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.counter;
  }
}