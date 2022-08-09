import Race from './Race';

export default class Elf extends Race {
  static counter = 0;
  _maxLifePoints: number;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.counter;
  }
}