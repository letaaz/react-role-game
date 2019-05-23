import Weapon from './Weapon';
import Heroes from './Hero';

class Character {
  private _maxPv: number;
  private _armor: number;

  private _pv: number;
  private _weapon: Weapon;
  private _name: string;
  private _speed: number;

  constructor(weapon: Weapon, name: string) {
    this._maxPv = Math.floor(Math.random() * 100) + 50;
    this._armor = Math.floor(Math.random() * 10) + 1;
    this._pv = this.maxPv;
    this._name = name;
    this._weapon = weapon;
    this._speed = Math.floor(Math.random() * 100) + 1;
  }

  public get maxPv(): number {
    return this._maxPv;
  }

  public set maxPv(value: number) {
    this._maxPv = value;
  }

  public get pv(): number {
    return this._pv;
  }

  public set pv(value: number) {
    this._pv = value;
  }

  public get weapon(): Weapon {
    return this._weapon;
  }

  public set weapon(value: Weapon) {
    this._weapon = value;
  }
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
  public get speed(): number {
    return this._speed;
  }
  public attack = (target: Character) => {
    target.pv -= this._weapon.damage;
  };

  public get armor(): number {
    return this._armor;
  }

  public set armor(value: number) {
    this._armor = value;
  }

  public compare = (a: Character, b: Character) => {
    if (a._pv < b._pv) return 1;
    if (a._pv > b._pv) return -1;
    return 0;
  };

  public targetting = (enemyList: Character[]) => {
    if (this instanceof Heroes && !this.isStupid) {
      return enemyList.sort(this.compare)[0];
    }

    return enemyList[Math.floor(Math.random() * enemyList.length)];
  };
}

export default Character;
