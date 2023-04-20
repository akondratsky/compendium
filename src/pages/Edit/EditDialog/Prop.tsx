import { EditableBoilerplate, editableBoilerplate } from '@/services/state';
import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

type DialogFieldProps = TextFieldProps & {
  field: keyof EditableBoilerplate,
};

export const Prop = ({ field, ...props }: DialogFieldProps) => {
  const [value, setValue] = useRecoilState(editableBoilerplate);

  const createChangeHandler = (field: keyof typeof value) => {
    return (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(current => ({ ...current, [field]: e.target.value }))
    };
  };

  return (
    <TextField
      margin="dense"
      label={field}
      value={value[field]}
      onChange={createChangeHandler(field)}
      {...props}
    />
  )
};