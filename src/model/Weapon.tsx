import WeaponType from './WeaponType';

class Weapon {
  private _damage: number;
  private _type: WeaponType;

  constructor(type: WeaponType) {
    this._type = type;
    switch (type) {
      case WeaponType.CROSSBOW:
        this._damage = Math.floor(Math.random() * 30) + 10;
        break;
      case WeaponType.SWORD:
        this._damage = Math.floor(Math.random() * 30) + 25;
        break;
      case WeaponType.MAGIC_WAND:
        this._damage = Math.floor(Math.random() * 30) + 15;
        break;
      case WeaponType.POISON:
        this._damage = Math.floor(Math.random() * 30) + 1;
        break;
      default:
        this._damage = Math.floor(Math.random() * 30) + 1;
        break;
    }
  }

  public get damage(): number {
    return this._damage;
  }

  public set damage(value: number) {
    this._damage = value;
  }

  public get type(): WeaponType {
    return this._type;
  }
  public set type(value: WeaponType) {
    this._type = value;
  }
}
export default Weapon;
