import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

const MeuToast = ({abrir, handleClose, msg, severity}) =>{

    return(
        <Snackbar 
                open={abrir}
                onClose={handleClose}
                autoHideDuration={2000}
            >
                <Alert severity={severity} variant='filled' onClose={handleClose}>
                    {msg}
                </Alert>
            </Snackbar>
    )
}

export default MeuToast;