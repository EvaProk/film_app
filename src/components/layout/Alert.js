import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';





export default function AlertMessage(props) {
  const [open, setOpen] = useState(false);

  const handleClose =()=>{
    setOpen(true)
  }
  

  return (
    <Stack sx={{ width: '60%', margin: "auto" }} spacing={2}>

      <Alert severity="error" action={
            <IconButton
            open={open}
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          } >{props.message}</Alert>
    </Stack>
  );
}