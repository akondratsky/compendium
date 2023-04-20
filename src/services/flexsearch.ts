import { Document } from 'flexsearch';
import { uniq } from 'lodash';
import { Boilerplate } from '@/types';
import { boilerplates } from '@/data/boilerplates';

const document = new Document({
  tokenize: 'full',
  document: {
    id: 'name',
    index: [
      'description',
      'technologies',
      'website',
      'git',
    ]
  }
});

boilerplates.forEach(b => document.add(b.name, b));

const searchByInputValue = (inputValue: string) => {
  return !inputValue
    ? boilerplates
    : document
        .search(inputValue, 25)
        .reduce((acc, current) => {
          acc.push(...current.result as string[]);
          return uniq(acc);
        }, [] as string[])
        .map((found) => {
          return boilerplates.find(({ name }) => name === found);
        }) as Boilerplate[];
};

const filterByTechnologies = (boilerplates: Boilerplate[], technologies: string[]) => {
  return !technologies.length
    ? boilerplates
    : boilerplates.filter((boilerplate) => {
      return technologies.every(tech => boilerplate?.technologies.includes(tech));
    }) as Boilerplate[];
};

export const searchBoilerplates = async (inputValue: string, technologies: string[]) => {
    const found = searchByInputValue(inputValue);
    return filterByTechnologies(found, technologies);
};