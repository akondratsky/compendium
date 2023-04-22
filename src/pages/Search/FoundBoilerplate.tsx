import { PropsWithChildren } from 'react';
import { Box, Card, CardContent, Typography, Link, Chip } from '@mui/material';
import { Boilerplate } from '@/types';

const Section = ({ label, children }: PropsWithChildren<{ label: string }>) => {
  return (
    <Box marginY={2}>
        <Typography variant="body1" component="span" fontWeight={700}>
          {label}: &nbsp;
        </Typography>
        <Typography variant="body1" component="span">
          {children}
        </Typography>
    </Box>
  )
};

export const FoundBoilerplate = ({ boilerplate }: { boilerplate: Boilerplate }) => {
  const { name, description, technologies, git, version, website, usage } = boilerplate;

  return (
    <Card sx={{ mt: 2 }} variant="outlined">
      <CardContent>
        <Typography marginBottom={3} variant="h5">
          {name}
        </Typography>
        <Section label="Description">
          {description}
        </Section>
        <Section label="Usage">
          {usage}
        </Section>
        {website && (
          <Section label="Website">
            <Link href={website}>{website}</Link>
          </Section>
        )}
        {git && (
          <Section label="Source">
            <Link href={git}>{git}</Link>
          </Section>
        )}
        {technologies.length > 0 && (
          <Section label="Technologies">
            {technologies.map(tech => <Chip key={tech} label={tech} sx={{ mr: 1 }} />)}
          </Section>
        )}
        {version && (
          <Section label="Version">
            {version}
          </Section>
        )}
      </CardContent>
    </Card>
  )
};
