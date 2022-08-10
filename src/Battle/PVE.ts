import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter, 
    private _oponent: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    while (
      this.player.lifePoints !== -1 
      && this._oponent.some((e) => e.lifePoints !== -1)
    ) {
      this._oponent.map((e) => this.player.attack(e));
      this._oponent.map((e) => e.attack(this.player));
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}