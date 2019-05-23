import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

export interface IChooseHeroClassProps {
  heroClassSelected: string;
  heroClassList: string[];
  handleHeroClassSelect: (event: ChangeEvent<{}>, value: string) => void;
}

const ChooseHeroClass: React.SFC<IChooseHeroClassProps> = (
  props: IChooseHeroClassProps
) => {
  const { heroClassList, handleHeroClassSelect, heroClassSelected } = props;
  return (
    <FormControl>
      <FormLabel>
        Choose your <strong>HERO</strong>'s class between the legendary classes
        below :{' '}
      </FormLabel>
      <RadioGroup
        name="heroClass"
        value={heroClassSelected}
        onChange={handleHeroClassSelect}
      >
        {heroClassList.map((heroClass, index) => (
          <FormControlLabel
            key={index}
            value={heroClass}
            control={<Radio />}
            label={heroClass}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseHeroClass;
