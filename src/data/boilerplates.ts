import data from '@/data/boilerplates.csv';
import { BoilerplateCsvRecord, Boilerplate } from '@/types';

/**
 * The same data from CSV files, but technologies are splitted to be string array
 */
export const boilerplates = data.map(({ technologies, ...rest }) => ({
  ...rest,
  technologies: technologies.split(',').map(s => s.trim()).filter(Boolean),
} as Boilerplate));
