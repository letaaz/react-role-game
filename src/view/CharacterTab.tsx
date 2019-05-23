import React from 'react';
import { List, ListItem, ListItemText, Grid } from '@material-ui/core';
import { ICharacterSimplified } from './GameSettings';

interface ICharacterTabProps {
  monstersList: ICharacterSimplified[];
  heroesList: ICharacterSimplified[];
}

const ICharacterTab: React.SFC<ICharacterTabProps> = (
  props: ICharacterTabProps
) => {
  const { heroesList, monstersList } = props;
  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <List dense>
          {heroesList.map((hero, index) => (
            <ListItem key={index} button>
              <ListItemText
                primary={`${hero.name} armed with a ${hero.weapon}`}
              />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={4} />
      <List dense>
        {monstersList.map((monster, index) => (
          <ListItem key={index} button>
            <ListItemText
              primary={`${monster.name} armed with a ${monster.weapon}`}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default ICharacterTab;
