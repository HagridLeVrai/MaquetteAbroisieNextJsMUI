import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
//import Image from 'mui-image';

// Calendar
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import * as startOfDay from "date-fns";

// Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




export default function Index() {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      { }
      <Grid item xs={8}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 800, }}>
          <Typography variant='h4' mt={1} ml={3}>Reserver un repas</Typography>
          <Box component="img" sx={{mt: 15, ml: 15, width:800}} src="calendar.png"/>
        </Paper>
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        { }
        <Grid container spacing={3} direction="column">

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 388, }}>
              <Typography variant='h4' mt={1} align="center">Mes finances</Typography>
              <Typography variant='h6' color={"#747474"} ml={1} mt={3}>Solde restant:</Typography>
              <Typography variant='h4' color={"#0078E8"} ml={1}>23 €</Typography>
              <Typography variant='h6' color={"#747474"} ml={1} mt={3}>Dépensé ce mois ci:</Typography>
              <Typography variant='h4' color={"#0078E8"} ml={1}>458 €</Typography>
              <Typography variant='h6' color={"#747474"} ml={1} mt={3}>Gaspillage évité</Typography>
              <Typography variant='h4' color={"#0078E8"} ml={1}>32 Kg</Typography>
            </Paper>
          </Grid>
          { }

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 388,}}>
              <Typography variant='h4' mt={1} align="center">Les plats du jour</Typography>

              <Grid container spacing={1} sx={{ padding: 3 }}>
                <Grid item xs={1}>
                  <ArrowBackIosIcon sx={{ marginTop: 15}} />
                </Grid>

                <Grid item xs={10}>
                  <Box component="img" sx={{ height: 250, width: 420, borderRadius: '16px' }} src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"/>
                </Grid>

                <Grid item xs={1}>
                  <ArrowForwardIosIcon sx={{ marginTop: 15, marginLeft: 3}}/>
                </Grid>

              </Grid>

            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Calendar:
// value={value}
// onChange={(newValue) => {
//   setValue(newValue);
// }}