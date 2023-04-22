declare module '@/data/technologies.csv' {
  const src: Array<{
    name: string;
    label: string?
  }>;
  export default src
}

declare module '@/data/boilerplates.csv' {
  const src: Array<{
    name: string;
    technologies: string;
    website?: string;
    git?: string;
    version?: string;
    description: string;
    usage: string;
  }>;
  export default src;
}