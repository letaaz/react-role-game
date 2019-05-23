import Personnage from './Character';
import Weapon from './Weapon';

class Monster extends Personnage {
  constructor(weapon: Weapon, name: string) {
    super(weapon, name);
  }
  public cheat = () => {
    this.weapon.damage += Math.floor(Math.random() * 10) + 1;
  };
}
export default Monster;
