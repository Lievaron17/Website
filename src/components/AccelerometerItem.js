import accelerometerDatabase from '../data/accelerometer.json';
import {
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Grid
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function AccelerometerItem (props) {

  const {
    id, setId,
  } = props;

  const data = accelerometerDatabase.data.find(item => item.id === id);
  const open = data !== undefined;
  const handleClose = () => setId(undefined);

  return (
    <>
      {data ? (
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle >
            {data.id}
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                {`Id: ${data.id}`}
              </Grid>
    
              <Grid item xs={12}>
                {`Vehicle Id: ${data.vehicleId}`}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button color="primary" onClick={() => alert("implement email sending code...")}>
              Update
            </Button>
          </DialogActions>
        </Dialog>

      ) : null}
    </>
  )
};

const DialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};