import { Box } from '@mui/material';
import { SearchInput } from './SearchInput';
import { TechnologiesInput } from '@/components/TechnologiesInput';
import { SearchResults } from './SearchResults';
import { technologiesFilterState } from '@/services/state';

const Main = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <TechnologiesInput state={technologiesFilterState} />
      <SearchInput />
      <SearchResults />
    </Box>
  );
};

export default Main;
