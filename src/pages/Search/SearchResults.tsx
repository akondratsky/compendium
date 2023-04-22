import { useRecoilState, useRecoilValue } from 'recoil'
import { FoundBoilerplate } from './FoundBoilerplate'
import { searchResultsState, searchValueState, technologyListState } from '@/services/state'
// import { searchBoilerplates } from '@/services/orama';
import { searchBoilerplates } from '@/services/flexsearch';
import { useEffect } from 'react';
import { Boilerplate } from '@/types';

export const SearchResults = () => {
  const searchValue = useRecoilValue(searchValueState);
  const technologies = useRecoilValue(technologyListState);
  const [results, setResults] = useRecoilState(searchResultsState);

  useEffect(() => {
    searchBoilerplates(searchValue, technologies).then(setResults);
  }, [searchValue, technologies])

  return (
    <>
    {results.map((boilerplate) => (
      <FoundBoilerplate boilerplate={boilerplate} key={`${boilerplate.name}${boilerplate.version}`} />
    ))}
    </>
  );
}