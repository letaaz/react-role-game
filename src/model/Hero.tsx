import Personnage from './Character';
import Weapon from './Weapon';
import RoleType from './RoleType';
import WeaponType from './WeaponType';

class Hero extends Personnage {
  private _isStupid: boolean = false;

  private _roleType: RoleType;

  constructor(
    name: string,
    roleType: RoleType,
    weapon: Weapon,
    isStupid?: boolean
  ) {
    super(weapon, name);
    this._roleType = roleType;
    this._isStupid = isStupid!;
  }

  public get roleType(): RoleType {
    return this._roleType;
  }
  public set roleType(value: RoleType) {
    this._roleType = value;
  }
  public heal = () => {
    let amountOfHeal = Math.floor(Math.random() * 10) + 1;

    this.pv + amountOfHeal > this.maxPv
      ? (this.pv = this.maxPv)
      : (this.pv += amountOfHeal);
  };

  public get isStupid(): boolean {
    return this._isStupid;
  }

  public ultimate() {
    switch (this._roleType) {
      case RoleType.Archery: // Archery
        this.weapon.damage += Math.floor(Math.random() * 10) + 1;
        this._isStupid = true;

        break;

      case RoleType.Warrior: //Guerrier
        this.armor += Math.floor(Math.random() * 10) + 1;
        break;

      case RoleType.Healer: //Healer
        let amountOfHeal = Math.floor(Math.random() * 10) + 1;

        this.pv + amountOfHeal > this.maxPv
          ? (this.pv = this.maxPv)
          : (this.pv += amountOfHeal);
        break;

      case RoleType.Assassin: //Assassin
        this.weapon.damage += Math.floor(Math.random() * 10) + 1;

        break;
    }
  }

  static getWeaponList(roleType: RoleType): WeaponType[] {
    switch (roleType) {
      case RoleType.Archery: // Archery
        return [WeaponType.CROSSBOW];

      case RoleType.Warrior: //Guerrier
        return [WeaponType.SWORD];

      case RoleType.Healer: //Healer
        return [WeaponType.POISON];

      default:
        //Assassin
        return [WeaponType.POISON, WeaponType.DAGGER];
    }
  }
}

export default Hero;
