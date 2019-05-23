import Hero from './Hero';
import Monster from './Monster';
import Character from './Character';

class Fight {
  heroes: Hero[];

  monsters: Monster[];

  turnOrder: Character[] = [];

  constructor(Hero: Hero[], monsters: Monster[]) {
    this.heroes = Hero;

    this.heroes.forEach(hero => {
      this.turnOrder.push(hero);
    });

    this.monsters = monsters;

    this.monsters.forEach(monster => {
      this.turnOrder.push(monster);
    });

    this.turnOrder.sort(this.initiative);
  }
  initiative(a: Character, b: Character) {
    if (a.speed < b.speed) return 1;

    if (a.speed > b.speed) return -1;

    return 0;
  }
  rollDice(): number {
    return Math.floor(Math.random() * 20) + 1;
  }
  FightThemAll(): void {
    while (this.heroes.length > 0 && this.monsters.length > 0) {
      this.turnOrder.forEach((character, index) => {
        let target: Character;

        if (character instanceof Hero) {
          target = character.targetting(this.monsters);
        } else target = character.targetting(this.heroes);

        let action = this.rollDice();

        if (action < 6) {
          /* Réussite critique il utilise sa compétence spécial et attaque*/

          if (character instanceof Hero) character.ultimate();
          else if (character instanceof Monster) character.cheat();

          character.attack(target);
        } else if (action < 16) {
          /* il attaque */

          character.attack(target);
        } else return; /*il panique */
        if (target.pv < 1) {
          // suppression dans turnOrder et dans le tableau correspondant au type

          this.turnOrder.splice(index, 1);

          if (character instanceof Hero) {
            this.heroes.splice(
              this.heroes.findIndex(x => x.name === target.name),
              1
            );
          } else
            this.monsters.splice(
              this.monsters.findIndex(x => x.name === target.name),
              1
            );
        }
      });
    }

    //end game

    if (this.heroes.length > 0) console.log('Victoire des Monstres');
    else console.log('Victoire des Heros');
  }
}
export default Fight;
