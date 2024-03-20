import { Grid, Typography, Paper } from '@mui/material';

// ----------------------------------------------------------------------
const CitySummaryResult = ({ selectedCity, citySummary }) => {

    return (
        <Grid item xs={12}>
            <Paper elevation={3} sx={{p:2}}>
            <Grid container alignItems={'center'}>
                <Grid item xs={12}>
                <Typography sx={{ fontSize: 18, margin:'0px', marginBottom:'-8px' }} color="text.secondary">
                    {selectedCity}
                </Typography>
                </Grid>
                <Grid item sx={{mt:2}} xs={12}>
                <Typography>
                    {citySummary}
                </Typography>
                </Grid>
            </Grid>
            </Paper>
        </Grid>
    );
};

export default CitySummaryResult