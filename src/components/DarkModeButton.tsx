import { isDarkModeState } from '@/services/state';
import { IconButton } from '@mui/material';
import { useRecoilState } from 'recoil';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const DarkModeButton = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkModeState);

  const toggleDarkMode = useCallback(() => {
    setIsDark((isOn) => {
      localStorage.setItem('isDarkMode', String(!isOn));
      return !isOn;
    });
    // react-toastify does not rerender all the  notifications when theme is changed
    toast.dismiss();
  }, []);

  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {isDark ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
};
