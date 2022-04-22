import * as React from 'react';

// MUI
import { Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CloseIcon from '@mui/icons-material/Close';

export default function Panier() {
    return (

        <div>
            <Paper sx={{ m: 5, height: 75, display: 'flex' }}>
                <Typography variant='h4' mt={2} ml={3}>Mon panier</Typography>
            </Paper>

            <Grid container spacing={3} sx={{ padding: 5 }}>
                { }
                <Grid item xs={10}>
                    <Grid container spacing={3} >
                        <Grid item xs={5}>
                            <Divider sx={{ mt: 2 }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' align='center' color={"#747474"} >15/04/22</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Divider sx={{ mt: 2 }} />
                        </Grid>
                    </Grid>

                    <Paper sx={{ m: 5, height: 170, width: 300 }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Typography variant='h4' mt={2} ml={3}>McDonalds</Typography>
                            <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 7, marginTop: 2 }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div>
                                <Typography variant='subtitle2' color={"#737373"} mt={1} ml={5}>Happy Meal</Typography>
                                <Typography variant='subtitle2' color={"#737373"} ml={5}>Mc Fish</Typography>
                                <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande frite</Typography>
                                <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande boisson</Typography>
                            </div>
                            <Typography variant='h4' color={"#0078E8"} mt={5} ml={10}>5 €</Typography>

                        </div>

                    </Paper>

                    <Grid container spacing={3} >
                        <Grid item xs={5}>
                            <Divider sx={{ mt: 2 }} />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' align='center' color={"#747474"} >17/04/22</Typography>
                        </Grid>
                        <Grid item xs={5}>
                            <Divider sx={{ mt: 2 }} />
                        </Grid>
                    </Grid>

                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Paper sx={{ m: 5, height: 170, width: 300 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Typography variant='h4' mt={2} ml={3}>McDonalds</Typography>
                                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 7, marginTop: 2 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div>
                                    <Typography variant='subtitle2' color={"#737373"} mt={1} ml={5}>Happy Meal</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Mc Fish</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande frite</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande boisson</Typography>
                                </div>
                                <Typography variant='h4' color={"#0078E8"} mt={5} ml={10}>2 €</Typography>

                            </div>

                        </Paper>
                        <Paper sx={{ m: 5, height: 170, width: 300 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Typography variant='h4' mt={2} ml={3}>Canes</Typography>
                                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 16, marginTop: 2 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div>
                                    <Typography variant='subtitle2' color={"#737373"} mt={1} ml={5}>Happy Meal</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Mc Fish</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande frite</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande boisson</Typography>
                                </div>
                                <Typography variant='h4' color={"#0078E8"} mt={5} ml={10}>3 €</Typography>

                            </div>

                        </Paper>
                        <Paper sx={{ m: 5, height: 170, width: 300 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Typography variant='h4' mt={2} ml={3}>Five Guys</Typography>
                                <CloseIcon fontSize="large" sx={{ color: "#5B5B5B", marginLeft: 9, marginTop: 2 }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                <div>
                                    <Typography variant='subtitle2' color={"#737373"} mt={1} ml={5}>Happy Meal</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Mc Fish</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande frite</Typography>
                                    <Typography variant='subtitle2' color={"#737373"} ml={5}>Grande boisson</Typography>
                                </div>
                                <Typography variant='h4' color={"#0078E8"} mt={5} ml={10}>2 €</Typography>

                            </div>

                        </Paper>
                    </div>


                </Grid>

                <Grid item xs={2}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500, }}>
                        <Typography variant='h5' color={"#747474"} mt={1} ml={3}>Solde restant:</Typography>
                        <Typography variant='h4' color={"#0078E8"} ml={3}>23 €</Typography>

                        <Divider sx={{ mt: 2 }} />

                        <Typography color={"#747474"} mt={3} ml={3}>McDonalds - 15/04</Typography>
                        <Typography color={"#747474"} ml={5}> - 5€</Typography>
                        <Typography color={"#747474"} mt={1} ml={3}>Canes - 17/04</Typography>
                        <Typography color={"#747474"} ml={5}> - 2€</Typography>
                        <Typography color={"#747474"} mt={1} ml={3}>Five Guys - 17/04</Typography>
                        <Typography color={"#747474"} ml={5}> - 3€</Typography>
                        <Typography color={"#747474"} mt={1} ml={3}>McDonalds - 17/04</Typography>
                        <Typography color={"#747474"} ml={5}> - 2€</Typography>

                        <Divider sx={{ mt: 5 }} />

                        <Grid container spacing={3} >
                            <Grid item xs={6}>
                                <Typography variant='h5' color={"#747474"} mt={2} ml={3}>Total:</Typography>
                                <Typography variant='h4' color={"#0078E8"} ml={3}>12 €</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ height: 50, width: 70, borderRadius: '16px', ml: 3, mt: 3, backgroundColor: '#5BE41A', boxShadow: 3 }}>
                                    <LocalGroceryStoreIcon fontSize='large' sx={{ color: "#2A690C", ml: 2, mt: 1 }} />
                                </Box>
                            </Grid>
                        </Grid>


                    </Paper>
                </Grid>
            </Grid>

        </div >
    );
}
