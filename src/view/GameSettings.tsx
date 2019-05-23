import React, { ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import ChooseClassForm from './form/ChooseClassForm';
import ChooseWeapon from './ChooseWeapon';
import CharacterTab from './CharacterTab';
import { TextField, Button } from '@material-ui/core';
import Hero from '../model/Hero';
import Monster from '../model/Monster';
import BrawlGameService from '../service/BrawlGameService';
import { Redirect } from 'react-router';

export interface IGameSettingsProps {}
export interface IGameSettingsState {
  heroName: string;
  heroClass: string;
  heroClasses: string[];
  weapon: string;
  weaponList: string[];
  heroes: Hero[];
  monsters: Monster[];
}

export interface ICharacterSimplified {
  name: string;
  weapon: string;
}
class GameSettings extends React.Component<IGameSettingsProps> {
  brawlGameService = new BrawlGameService();

  state: IGameSettingsState = {
    heroName: '',
    weapon: '',
    heroClasses: [],
    heroClass: '',
    weaponList: [],
    heroes: [],
    monsters: []
  };

  componentDidMount() {
    this.setState({
      heroClasses: this.brawlGameService.getHeroesClass()
    });
  }

  handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.brawlGameService.createHero(
      this.state.heroName,
      this.state.heroClass,
      this.state.weapon
    );
    this.setState({
      heroes: this.brawlGameService.getHeroesList()
    });
  };

  handleHeroNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      heroName: event.target.value
    });
  };

  handleHeroClassSelect = (event: ChangeEvent<{}>, value: string) => {
    this.setState({
      heroClass: value,
      weaponList: this.brawlGameService.getWeaponListOfHeroClass(value)
    });
  };

  handleWeaponSelect = (event: ChangeEvent<{}>, value: string) => {
    this.setState({
      weapon: value
    });
  };

  handleMonsterGeneration = (_: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const nbMonster = Math.floor(
      Math.random() * (this.state.heroes.length * 2) + this.state.heroes.length
    );
    this.brawlGameService.generateMonsters(nbMonster);
    this.setState({
      monsters: this.brawlGameService.getMonstersList()
    });
  };

  handleGameStart = (_: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (this.state.heroes.length < 1) {
      window.alert('You need the help of some dothrakis, Jon !');
    } else {
      // use firebase service to persist game ?
      // Redirect here
    }
  };

  render() {
    const heroesList = this.state.heroes.map(hero => ({
      name: hero.name,
      weapon: hero.weapon.type
    }));
    const monstersList = this.state.monsters.map(monster => ({
      name: monster.name,
      weapon: monster.weapon.type
    }));

    return (
      <React.Fragment>
        <h2>Welcome to the brawl game !</h2>

        <Grid container={true} direction="row" spacing={8}>
          <Grid item={true} xs={4}>
            <ChooseClassForm
              displayWeapon={this.state.heroClass !== ''}
              handleSubmit={this.handleSubmitForm}
              heroClassSelected={this.state.heroClass}
              heroClassList={this.state.heroClasses}
              handleHeroClassSelect={this.handleHeroClassSelect}
            >
              <Grid item={true}>
                <ChooseWeapon
                  weaponSelected={this.state.weapon}
                  weaponList={this.state.weaponList}
                  handleWeaponSelect={this.handleWeaponSelect}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  variant="outlined"
                  name="heroName"
                  label="Enter a hero name"
                  value={this.state.heroName}
                  onChange={this.handleHeroNameChange}
                />
              </Grid>
            </ChooseClassForm>
          </Grid>

          <Grid item xs={8}>
            <Button variant="contained" onClick={this.handleMonsterGeneration}>
              GENERER MES MONSTRES
            </Button>
            <CharacterTab heroesList={heroesList} monstersList={monstersList} />
          </Grid>
        </Grid>
        <Grid
          container
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Button variant="contained" onClick={this.handleGameStart}>
            WINTER IS COMING ...
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default GameSettings;
