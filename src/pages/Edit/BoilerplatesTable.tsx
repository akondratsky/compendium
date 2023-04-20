import { Button, Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columnDefs } from './columnDefs';
import { useCallback, useRef } from 'react';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { boilerplatesTableState, editableBoilerplate, isEditDialogOpen, technologiesEditorState } from '@/services/state';
import { BoilerplateCsvRecord } from '@/types';
import { getTechnologyOptions } from '@/components/TechnologiesInput';
import { toast } from 'react-toastify';

export const BoilerplatesTable = () => {
  const [rows] = useRecoilState(boilerplatesTableState);
  const setIsDialogOpen = useSetRecoilState(isEditDialogOpen);
  const resetEditorBoilerplate = useResetRecoilState(editableBoilerplate);
  const setEditorBoilerplate = useSetRecoilState(editableBoilerplate);
  const resetEditorTechs = useResetRecoilState(technologiesEditorState);
  const setEditorTechs = useSetRecoilState(technologiesEditorState);

  const tableRef = useRef<GridApiCommunity>({} as GridApiCommunity);

  const exportHandler = useCallback(() => {
    tableRef.current.exportDataAsCsv({
      delimiter: ';',
      fileName: 'boilerplates',
      // for the sake of keeping the same columns order:
      fields: ['name', 'website', 'git', 'technologies', 'version', 'description'],
    });
    toast.success('Successfully saved!');
  }, []);

  const addRowHandler = () => {
    resetEditorBoilerplate();
    resetEditorTechs();
    setIsDialogOpen(true);
  };

  const editRow = ({ description, name, technologies, git, version, website }: BoilerplateCsvRecord) => {
    setEditorBoilerplate({
      description,
      isNew: false,
      name,
      git,
      version,
      website,
    });
    setEditorTechs(getTechnologyOptions(technologies.split(',')));
    setIsDialogOpen(true);
  };

  return (
    <>
      <Grid item container direction="row" alignItems="self-end">
        <Typography sx={{ mt: 4 }}>
          Edit this and export table to CSV.
        </Typography>
        <Button onClick={exportHandler} variant="contained" sx={{ ml: 'auto' }}>
          Export
        </Button>
        <Button onClick={addRowHandler} variant="outlined" sx={{ ml: 2 }}>
          Add Boilerplate
        </Button>
      </Grid>

      <Grid item flexGrow={1}>
        <DataGrid
          apiRef={tableRef}
          sx={{ my: 2 }}
          autoHeight
          onRowDoubleClick={({ row }) => {
            editRow(row);
          }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 }
            }
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          columns={columnDefs}
          getRowId={row => row.name}
          rows={rows}
        />
      </Grid>
    </>
  );
};
