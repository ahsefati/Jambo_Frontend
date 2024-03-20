/* Current Weather Data */
import PropTypes from 'prop-types';

import { Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';
import weekdays from '../../../_mock/weekdays';

const WeatherCurrentResult = ({ currentWeatherData, weekWeatherData, weatherPrediction }) => {
    const today = dayjs()
  
    return (
        <Grid container alignItems={'center'}>
            <Grid item>
            <img style={{height:'125px', marginTop:'12px', marginRight:'12px'}} src={`https:${currentWeatherData?.condition?.icon}`} alt='weather status'/>
            </Grid>
            <Grid item alignItems={'center'} sx={{marginRight:'64px'}}>
            <Typography sx={{ fontSize: 52, fontWeight:'bolder', margin:'0px', marginTop:'12px' }} color="text.primary">
                {currentWeatherData?.temp_c || currentWeatherData?.avgtemp_c}°C
            </Typography>
            <Typography color={"text.primary"}>{currentWeatherData?.condition?.text}</Typography>
            {currentWeatherData.feelslike_c && 
                <Typography sx={{ fontSize: 16, fontWeight:'bold', margin:'0px' }} color="text.secondary">
                Feels Like: {currentWeatherData?.feelslike_c}°C
                </Typography>
            }
            </Grid>
            {/* Weekly Weather Data */}
            {!weatherPrediction &&
            weekWeatherData.map((futureday, index) => {
                if (index > 0) {
                return (
                    <Grid key={index} item sx={{textAlign:'center', marginTop:'32px', marginRight:'16px'}}>
                    <Typography sx={{ fontSize: 16, marginBottom:'-8px' }} color={'text.secondary'}>{weekdays[(today.day()+index-1)%7]}</Typography>
                    <img style={{width:'52px'}} src={`https:${futureday?.day?.condition?.icon}`} alt='weather status'/>
                    <Typography sx={{ fontSize: 16, marginTop:'-4px' }} color={'text.primary'}>{parseInt(futureday?.day?.avgtemp_c,10)}°C</Typography>
                    <Typography sx={{ fontSize: 12,  }} color={'text.primary'}>H:{parseInt(futureday?.day?.maxtemp_c,10)}° L:{parseInt(futureday?.day?.mintemp_c,10)}°</Typography>
                    </Grid>
                )
                }
                return null
            })
            }
        </Grid>
  );
};


WeatherCurrentResult.propTypes = {
    currentWeatherData: PropTypes.object.isRequired,
    weekWeatherData: PropTypes.array.isRequired,
    weatherPrediction: PropTypes.bool.isRequired
}

export default WeatherCurrentResult