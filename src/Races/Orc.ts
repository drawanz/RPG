import Race from './Race';

export default class Orc extends Race {
  static counter = 0;
  _maxLifePoints: number;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.counter;
  }
}