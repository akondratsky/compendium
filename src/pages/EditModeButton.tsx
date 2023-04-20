import { useLocation, useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

export const EditModeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isEditMode = location.pathname.startsWith('/edit');

  return (
    <IconButton
      color="inherit"
      onClick={() => navigate(isEditMode ? '/' : '/edit')}
    >
      {isEditMode ? <SearchIcon /> : <EditNoteIcon />}
    </IconButton>
  );
};
