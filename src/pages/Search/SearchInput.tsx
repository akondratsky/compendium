import { searchValueState } from '@/services/state';
import { TextField } from '@mui/material';
import { useRecoilState } from 'recoil';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  return (
    <TextField
      label="Search"
      fullWidth
      margin="normal"
      value={searchValue}
      onChange={({ target: { value } }) => {
        setSearchValue(value);
      }}
    />
  )
};