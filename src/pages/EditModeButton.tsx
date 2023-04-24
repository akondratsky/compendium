import { useLocation, useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useEditMode } from '@/components/useEditMode';

export const EditModeButton = () => {
  const [isEditMode, setIsEditMode] = useEditMode();


  return (
    <IconButton
      color="inherit"
      onClick={() => setIsEditMode(!isEditMode)}
    >
      {isEditMode ? <SearchIcon /> : <EditNoteIcon />}
    </IconButton>
  );
};
