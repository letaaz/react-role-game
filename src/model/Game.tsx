import Hero from './Hero';
import Monster from './Monster';
import WeaponType from './WeaponType';
import Weapon from './Weapon';
import RoleType from './RoleType';

class Game {
  private _heroes: Hero[] = [];

  public get heroes(): Hero[] {
    return this._heroes;
  }
  public set heroes(value: Hero[]) {
    this._heroes = value;
  }
  private _monsters: Monster[] = [];

  public get monsters(): Monster[] {
    return this._monsters;
  }
  public set monsters(value: Monster[]) {
    this._monsters = value;
  }

  generateMonsters(n: number) {
    for (let i = 0; i < n; i++) {
      this.monsters.push(
        new Monster(new Weapon(WeaponType.CLAW), `Monster ${i}`)
      );
    }
  }

  createHero(name: string, roleType: RoleType, weaponName: WeaponType) {
    this.heroes.push(new Hero(name, roleType, new Weapon(weaponName), true));
  }
}

export default Game;
