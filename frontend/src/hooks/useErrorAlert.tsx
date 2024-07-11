import { useState } from 'react';

const useErrorAlert = () => {
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const showError = (message: string) => {
    setError(message);
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return { error, open, showError, handleClose };
};

export default useErrorAlert;
