import { Box, Grid } from '@mui/material';
import { BoilerplatesTable } from './BoilerplatesTable';
import { EditDialog } from './EditDialog';

const Edit = () => {
  return (
    <Grid sx={{ px: 4, py: 2 }}>
      <Grid container direction="column">
        <BoilerplatesTable />
        <EditDialog />
      </Grid>
    </Grid>
  );
};

export default Edit;
