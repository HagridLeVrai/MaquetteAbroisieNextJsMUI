import * as React from 'react';

// MUI
import { Box, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { shadows } from '@mui/system';



// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function McDonalds() {
    return (
        <div>
            <Grid container spacing={3} sx={{ padding: 3 }}>
                { }
                <Grid item xs={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500, }}>
                        <Typography variant='h4' mt={1} align="center">McDonalds</Typography>
                        <Box component="img" sx={{ height: 290, width: 420, borderRadius: '16px', ml: 8, mt: 2, boxShadow: 3 }} src="https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1" />
                        <Typography variant='h6' mt={2} ml={8} color={"#5B5B5B"} >+33 6 54 84 15 15</Typography>
                        <Typography variant='h6' ml={8} color={"#5B5B5B"} >11 Rue due Jambon</Typography>
                        <Typography variant='h6' ml={8} color={"#5B5B5B"} >Paris</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={8}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500, }}>
                        <Typography variant='h4' mt={1} ml={3}>Reserver</Typography>
                        <Box component="img" sx={{mt: 2, ml: 30, width:600}} src="calendar.png"/>
                    </Paper>
                </Grid>

            </Grid>

            <Paper sx={{ m: 3, height: 250, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <ArrowBackIosIcon sx={{ marginTop: 3, marginLeft: 3, }} />
                <Box component="img" sx={{ height: 200, width: 350, borderRadius: '16px', ml: 8 }} src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" />
                <Box component="img" sx={{ height: 200, width: 350, borderRadius: '16px', ml: 8 }} src="https://www.bynder.com/images/customerstories/story-images/fiveguys-image-1.jpg" />
                <Box component="img" sx={{ height: 200, width: 350, borderRadius: '16px', ml: 8 }} src="https://10-raisons.fr/wp-content/uploads/2021/02/McDonalds-meilleur-fast-food-de-tous-les-temps.png" />
                <Box component="img" sx={{ height: 200, width: 350, borderRadius: '16px', ml: 8 }} src="https://www.wkrn.com/wp-content/uploads/sites/73/2021/06/raising-canes-food.jpg?strip=1" />
                <ArrowForwardIosIcon sx={{ marginTop: 3, marginLeft: 7 }} />


            </Paper>


        </div>
    );
}