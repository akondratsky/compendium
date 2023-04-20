import boilerplates from '@/data/boilerplates.csv';
import { GridColDef } from '@mui/x-data-grid';

export const columnDefs: GridColDef<typeof boilerplates[number]>[] = [
  {
    field: 'name',
    flex: 1,
  },
  {
    field: 'git',
    flex: 1,
  },
  {
    field: 'website',
    flex: 1,
  },
  {
    field: 'version',
    flex: 0,
  },
  {
    field: 'description',
    flex: 2,
  },
  {
    field: 'technologies',
    flex: 1,
  },
];