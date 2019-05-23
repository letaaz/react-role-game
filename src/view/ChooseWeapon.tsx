import {
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import React, { ChangeEvent } from 'react';

export interface IChooseWeaponProps {
  weaponList: string[];
  weaponSelected: string;
  handleWeaponSelect: (event: ChangeEvent<{}>, value: string) => void;
}

const ChooseWeapon: React.SFC<IChooseWeaponProps> = (
  props: IChooseWeaponProps
) => {
  const { weaponList, handleWeaponSelect, weaponSelected } = props;
  return (
    <FormControl>
      <FormLabel>
        Greate choice ! Here is the weapons available to from your Hero Class :{' '}
      </FormLabel>
      <RadioGroup
        name="heroClass"
        value={weaponSelected}
        onChange={handleWeaponSelect}
      >
        {weaponList.map((weapon, index) => (
          <FormControlLabel
            key={index}
            value={weapon}
            control={<Radio />}
            label={weapon}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ChooseWeapon;
