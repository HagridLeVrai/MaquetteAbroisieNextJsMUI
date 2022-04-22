import * as React from 'react';

// MUI
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Router
import Link from 'next/link'

// Icons
import CloseIcon from '@mui/icons-material/Close';

export default function Favorite() {
    return (

        <div>
            <Paper sx={{ m: 5, height: 75, display: 'flex' }}>
                <Typography variant='h4' mt={2} ml={3}>Mes favoris</Typography>

            </Paper>

            <Paper sx={{ m: 5, height: 250, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box component="img" sx={{ height: 200, width: 300, borderRadius: '16px', marginLeft: 5 }} src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1" ></Box>
                <Link href="/mcdo">
                    <Typography variant='h4' mt={1} ml={3}>McDonalds</Typography>
                </Link>
                <Typography variant='h4' color={"#5B5B5B"} mt={2} ml={120}>12 Km</Typography>
                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 10, marginTop: 2 }} />
            </Paper>

            <Paper sx={{ m: 5, height: 250, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box component="img" sx={{ height: 200, width: 300, borderRadius: '16px', marginLeft: 5 }} src="https://www.nrn.com/sites/nrn.com/files/raising%20canes.jpg" ></Box>
                <Typography variant='h4' mt={1} ml={3}>Raising Canes</Typography>
                <Typography variant='h4' color={"#5B5B5B"} mt={2} ml={115}> 0 Km</Typography>
                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 10, marginTop: 2 }} />
            </Paper>

            <Paper sx={{ m: 5, height: 250, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box component="img" sx={{ height: 200, width: 300, borderRadius: '16px', marginLeft: 5 }} src="https://www.thedailymeal.com/sites/default/files/story/2018/dreamstime_m_48386336.jpg" ></Box>
                <Typography variant='h4' mt={1} ml={3}>Five Guys</Typography>
                <Typography variant='h4' color={"#5B5B5B"} mt={2} ml={121}>12 Km</Typography>
                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 10, marginTop: 2 }} />
            </Paper>
        </div>
    );
}
