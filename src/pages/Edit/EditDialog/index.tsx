import { boilerplatesTableState, changesState, editableBoilerplate, isEditDialogOpen } from '@/services/state';
import { Button, Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TechnologiesInput } from '@/components/TechnologiesInput'
import { technologiesEditorState } from '@/services/state'
import { Prop } from './Prop';

export const EditDialog = () => {
  const [isOpen, setIsOpen] = useRecoilState(isEditDialogOpen);
  const boilerplate = useRecoilValue(editableBoilerplate);
  const selectedTechs = useRecoilValue(technologiesEditorState);
  const [rows, setTableRows] = useRecoilState(boilerplatesTableState);
  const setIsChanged = useSetRecoilState(changesState);

  const saveHandler = () => {
    const getBoilerplate = () => ({
      name: boilerplate.name,
      description: boilerplate.description,
      git: boilerplate.git,
      version: boilerplate.version,
      website: boilerplate.website,
      technologies: selectedTechs.map(s => s.name).join(','),
      usage: boilerplate.usage,
    });
    let newRows: typeof rows;
    if (boilerplate.isNew) {
      newRows = [...rows, getBoilerplate()];
    } else {
      const index = rows.findIndex(row => row.name === boilerplate.name);
      newRows = [...rows];
      newRows.splice(index, 1);
      newRows.push(getBoilerplate());
    }
    setTableRows(newRows);
    setIsChanged(true);
    setIsOpen(false);
  };

  return (
    <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
      <DialogContent sx={{ minWidth: 500 }}>
        <Grid container direction="column" sx={{ width: 500 }}>
          <Prop field="name" disabled={!boilerplate.isNew} />
          <Prop field="description" multiline minRows={3} />
          <Prop field="usage" multiline minRows={2} />
          <Prop field="git" />
          <Prop field="website" />
          <Prop field="version" />
          <TechnologiesInput state={technologiesEditorState} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={saveHandler}>Save</Button>
        <Button variant="outlined" onClick={() => setIsOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
