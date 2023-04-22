
export type BoilerplateCsvRecord = {
  name: string;
  technologies: string;
  website?: string;
  git?: string;
  version?: string;
  description: string;
  usage: string;
};

export type Boilerplate = {
  name: string;
  website?: string;
  git?: string;
  version?: string;
  description: string;
  usage: string;
  technologies: string[];
};

export type TechnologyOption = {
  name: string;
  label: string;
};
