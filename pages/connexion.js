import * as React from 'react';

// MUI
import Typography from '@mui/material/Typography';
import { Box, Grid, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Connexion() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>
        
            <Paper sx={{ p: 2, height: 500, width: 600 }}>

                <Typography variant='h4' mt={5} align="center">Ambroisie</Typography>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        sx={{mt: 7}}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{mt: 3, mb: 7}}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2 }}>
                        Se connecter
                    </Button>
                </Box>

            </Paper>
        </Grid>
    );
}

// Calendar:
// value={value}
// onChange={(newValue) => {
//   setValue(newValue);
// }}