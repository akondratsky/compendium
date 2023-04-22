import { Button, ButtonGroup } from '@mui/material';
import { useRef, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

export type ExportButtonProps = {
  onExport: () => void;
  onCopy: () => void;
  isAvailable: boolean;
}

enum Option {
  Export = 'Export',
  Copy = 'Copy CSV'
}

const options = [Option.Export, Option.Copy];

const lsKey = 'preferableExportAction';

export const ExportButton = ({ onExport, onCopy, isAvailable }: ExportButtonProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const saved = localStorage.getItem(lsKey);
    return saved ? Number(saved) : 1;
  });

  const handleClick = () => {
    switch (options[selectedIndex]) {
      case Option.Export:
        onExport();
        break;
      case Option.Copy:
      default:
        onCopy();
        break;
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    localStorage.setItem(lsKey, String(index));
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (!anchorRef.current?.contains(event.target as HTMLElement)) {
      setOpen(false);
    }
  };

  return (
    <>
      <ButtonGroup
        disabled={!isAvailable}
        variant={isAvailable ? 'contained' : 'outlined'}
        ref={anchorRef}
        sx={{ ml: 'auto' }}
      >
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );

  // return (
  //   <ButtonGroup disabled={!isAvailable}  sx={{ ml: 'auto' }}>
  //     <Button
  //       onClick={onExport}
  //       color="success"
  //       variant={isAvailable ? 'contained' : 'outlined'}

  //     >
  //       Export
  //   </Button>
  //   </ButtonGroup>

  // )
};
