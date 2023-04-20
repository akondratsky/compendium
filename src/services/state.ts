import boilerplates from '@/data/boilerplates.csv';
import { Boilerplate, TechnologyOption } from '@/types';
import { SerializableParam, atom, atomFamily, selector } from 'recoil';

export const searchValueState = atom({
  key: 'searchInputValue',
  default: '',
});

const technologiesInputFamily = atomFamily<TechnologyOption[], SerializableParam>({
  key: 'technologiesInputFamily',
  default: []
})

export const technologiesFilterState = technologiesInputFamily('filter');
export const technologiesEditorState = technologiesInputFamily('editor');

export const technologyListState = selector({
  key: 'technologyListState',
  get: ({ get }) => {
    return get(technologiesFilterState).map((value) => value.name);
  },
});

export const searchResultsState = atom<Boilerplate[]>({
  key: 'searchResultState',
  default: [],
});

export const isDarkModeState = atom({
  key: 'darkModeState',
  default: localStorage.getItem('isDarkMode') === 'true',
});

export const boilerplatesTableState = atom({
  key: 'boilerplatesTableState',
  default: boilerplates,
});

export const isEditDialogOpen = atom({
  key: 'isEditDialogOpen',
  default: false,
});

export type EditableBoilerplate = Omit<Boilerplate, 'technologies'> & {
  isNew: boolean
}

export const editableBoilerplate = atom<EditableBoilerplate>({
  key: 'editableBoilerplateState',
  default: {
    isNew: true,
  } as EditableBoilerplate,
});
