import { Button, Grid, Typography } from '@mui/material';
import { DataGrid, GridCsvExportOptions } from '@mui/x-data-grid';
import { columnDefs } from './columnDefs';
import { useCallback, useRef } from 'react';
import { GridApiCommunity } from '@mui/x-data-grid/internals';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { boilerplatesTableState, changesState, editableBoilerplate, isEditDialogOpen, technologiesEditorState } from '@/services/state';
import { BoilerplateCsvRecord } from '@/types';
import { getTechnologyOptions } from '@/components/TechnologiesInput';
import { toast } from 'react-toastify';
import { useChangesListener } from '@/services/changesListener';

const gridCsvOptions: GridCsvExportOptions = {
  delimiter: ';',
  fileName: 'boilerplates',
  // for the sake of keeping the same columns order:
  fields: ['name', 'website', 'git', 'technologies', 'version', 'description', 'usage'], 
  getRowsToExport: ({ apiRef }) => apiRef.current.getAllRowIds(),
};

const LS_PAGESIZE_KEY = 'edit_table_initial_page_size';

const initialPageSize = Number(localStorage.getItem(LS_PAGESIZE_KEY)) || 10;

export const BoilerplatesTable = () => {
  const [rows] = useRecoilState(boilerplatesTableState);
  const setIsDialogOpen = useSetRecoilState(isEditDialogOpen);
  const resetEditorBoilerplate = useResetRecoilState(editableBoilerplate);
  const setEditorBoilerplate = useSetRecoilState(editableBoilerplate);
  const resetEditorTechs = useResetRecoilState(technologiesEditorState);
  const setEditorTechs = useSetRecoilState(technologiesEditorState);
  const isTableChanged = useRecoilValue(changesState);
  useChangesListener();

  

  const tableRef = useRef<GridApiCommunity>({} as GridApiCommunity);

  const copyDataHandler = useCallback(async () => {
    const data = tableRef.current.getDataAsCsv(gridCsvOptions);

    await navigator.clipboard.writeText(
      // it seems that 
      data.replaceAll('""', '"')
    );
    toast.success('Copied to clipboard');
  }, []);

  const addRowHandler = () => {
    resetEditorBoilerplate();
    resetEditorTechs();
    setIsDialogOpen(true);
  };

  const editRow = ({ description, name, technologies, git, version, website, usage }: BoilerplateCsvRecord) => {
    setEditorBoilerplate({
      description,
      isNew: false,
      name,
      git,
      version,
      website,
      usage,
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
        <Button
          sx={{ ml: 'auto' }}
          variant={isTableChanged ? 'contained' : 'outlined'}
          disabled={!isTableChanged}
          onClick={copyDataHandler}
        >
          Copy CSV
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
              paginationModel: { pageSize: initialPageSize }
            }
          }}
          onPaginationModelChange={({ pageSize }) => {
            localStorage.setItem(LS_PAGESIZE_KEY, String(pageSize))
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
