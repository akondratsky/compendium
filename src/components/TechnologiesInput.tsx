import { RecoilState, SetterOrUpdater, useRecoilState } from 'recoil';
import { Autocomplete, TextField } from '@mui/material';
import technologies from '@/data/technologies.csv';
import { TechnologyOption } from '@/types';

export const getTechnologyOptions = (filter?: string[]): TechnologyOption[] => {
  let result = technologies;
  if (filter?.length) {
    result = result.filter(({ name }) => filter.includes(name));
  }
  return result.map(({ name, label }) => ({
    name,
    label: label || name
  }));
};

export const technologyOptions = getTechnologyOptions();

type TechnologiesInputProps = {
  state: RecoilState<TechnologyOption[]>;
};

export const TechnologiesInput = ({ state }: TechnologiesInputProps) => {
  const [selected, onChange] = useRecoilState(state);

  return (
    <Autocomplete
      multiple
      options={technologyOptions}
      isOptionEqualToValue={(opt, value) => opt.name === value.name}
      renderInput={(params) => <TextField {...params} margin="normal" label="Technologies" />}
      onChange={(e, value) => onChange(value)}
      value={selected}
    />
  );
};
