
export type BoilerplateCsvRecord = {
  name: string;
  technologies: string;
  website?: string;
  git?: string;
  version?: string;
  description: string;
};

export type Boilerplate = {
  name: string;
  website?: string;
  git?: string;
  version?: string;
  description: string;
  technologies: string[];
};

export type TechnologyOption = {
  name: string;
  label: string;
};
