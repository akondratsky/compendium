import { describe, expect, it } from 'vitest';
import technologiesCsv from '@/data/technologies.csv';
import boilerplatesCsv from '@/data/boilerplates.csv';
import { DESCRIPTION_MIN_LENGTH, urlRegex } from '@/data/validation';

describe('technologies.csv', () => {
  const technologiesEntries: Array<[string, string | null]> = technologiesCsv.map(t => [t.name, t.label]);

  it.each(technologiesEntries)('technology %s has non-empty name', (name, label) => {
    expect(name?.trim().length > 0).toBeTruthy();
  });
});

describe('boilerplates.csv', () => {
  const boilerplateEntries = boilerplatesCsv.map(b => [
    b.name,
    b.version,
    b.technologies,
    b.git,
    b.website,
    b.description,
  ] as const);

  describe.each(boilerplateEntries)('boilerplate %s %s', (name, version, technologies, git, website, description) => {
    const getNameVersion = (name: string, version = '') => `${name}${version}`;
    const nameVersionArray = boilerplatesCsv.map(b => getNameVersion(b.name, b.version));
  
    it('contains at least one technology', () => {
      const techs = technologies.split(',').filter(Boolean);
      expect(techs.length > 0).toBeTruthy()
    });

    it('does not contain technologies out of the technologies.csv file', () => {
      const techs = technologies.split(',');
      const actual = techs.every((tech) => {
        return technologiesCsv.some(t => t.name === tech);
      });
      expect(actual).toBeTruthy();
    });

    it('has unique description', () => {
      const boilerplates = boilerplatesCsv.filter(b => b.description === description);
      expect(boilerplates.length === 1).toBeTruthy()
    });

    it('has non-empty name', () => {
      expect(name.length).toBeTruthy();
    });

    it('has unique combination of name and version', () => {
      const nameVersion = getNameVersion(name, version);
      expect(nameVersionArray.filter(nv => nv === nameVersion).length).toBe(1);
    });

    it('does not have empty version if name is not unique', () => {
      const boilerplates = boilerplatesCsv.filter(b => b.name === name);
      expect(
        boilerplates.length === 1 || boilerplates.every(b => b.version?.length)
      ).toBeTruthy();
    });

    it(`contains description with at least ${DESCRIPTION_MIN_LENGTH} symbols length`, () => {
      expect(description.length >= DESCRIPTION_MIN_LENGTH).toBeTruthy();
    });

    it('contains valid URL or nothing in git field', () => {
      const url = git?.trim() || '';
      expect(!url || urlRegex.test(url)).toBeTruthy()
    });

    it('contains valid URL or nothing in website field', () => {
      const url = website?.trim() || '';
      expect(!url || urlRegex.test(url)).toBeTruthy()
    });
  });
});
