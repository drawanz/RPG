import Race from './Race';

export default class Halfling extends Race {
  static counter = 0;
  _maxLifePoints: number;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling.counter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.counter;
  }
}