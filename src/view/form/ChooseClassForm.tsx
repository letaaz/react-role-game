import React, { ChangeEvent } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import ChooseHeroClass from '../ChooseHeroClass';

export interface IHeroFormProps {
  children: any;
  heroClassSelected: string;
  heroClassList: string[];
  displayWeapon: boolean;
  handleHeroClassSelect: (event: ChangeEvent<{}>, value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

class ChooseClassForm extends React.Component<IHeroFormProps> {
  render() {
    const {
      children,
      handleSubmit,
      heroClassList,
      handleHeroClassSelect,
      heroClassSelected,
      displayWeapon
    } = this.props;

    return (
      <Grid
        container={true}
        direction="row"
        justify="center"
        alignItems="center"
        spacing={16}
      >
        <Paper style={{ padding: '20px', margin: '25px' }}>
          <form onSubmit={handleSubmit}>
            <ChooseHeroClass
              heroClassList={heroClassList}
              handleHeroClassSelect={handleHeroClassSelect}
              heroClassSelected={heroClassSelected}
            />
            {displayWeapon && children}
            <Grid
              item={true}
              style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                VALIDER
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default ChooseClassForm;
