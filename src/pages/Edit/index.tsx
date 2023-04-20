import { Grid } from '@mui/material';
import { BoilerplatesTable } from './BoilerplatesTable';
import { EditDialog } from './EditDialog';

const Edit = () => {
  return (
    <Grid container direction="column">
      <BoilerplatesTable />
      <EditDialog />
    </Grid>
  );
};

export default Edit;
