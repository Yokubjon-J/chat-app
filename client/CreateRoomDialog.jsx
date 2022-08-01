import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CreateRoomDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <IconButton onClick={handleClickOpen}>
                <ControlPointIcon fontSize="large" />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Room</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Room Name"
                        type="text"
                        // fullWidth
                        variant="standard"
                    />
                    <FormControlLabel control={<Checkbox />} label="Private?" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}