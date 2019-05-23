import Game from '../model/Game';
import { getWeaponTypeFromString } from '../model/WeaponType';
import { getRoleTypeFromHeroClass } from '../model/RoleType';
import RoleType from '../model/RoleType';
import Hero from '../model/Hero';
import { ICharacterSimplified } from '../view/GameSettings';

class BrawlGameService {
  _game: Game = new Game();

  public generateMonsters(n: number) {
    this._game.monsters.splice(0);
    this._game.generateMonsters(n);
  }

  public createHero(heroName: string, heroClass: string, weaponName: string) {
    const weapon = getWeaponTypeFromString(weaponName);
    const roleType = getRoleTypeFromHeroClass(heroClass);
    this._game.createHero(heroName, roleType, weapon);
  }

  public getHeroesList(): ICharacterSimplified[] {
    return this._game.heroes.map(hero => ({
      name: hero.name,
      weapon: hero.weapon.type as string
    }));
  }

  public getMonstersList() {
    return this._game.monsters;
  }

  public getHeroesClass(): string[] {
    return Object.values(RoleType);
  }

  public getWeaponListOfHeroClass(heroClass: string) {
    const roleType = getRoleTypeFromHeroClass(heroClass);
    return Hero.getWeaponList(roleType);
  }
}
export default BrawlGameService;
