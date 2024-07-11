// components/ErrorAlert.tsx
import { Snackbar, Alert } from '@mui/material';

interface ErrorAlertProps {
  error: string | null;
  open: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

const ErrorAlert = ({ error, open, handleClose }: ErrorAlertProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};

export default ErrorAlert;
