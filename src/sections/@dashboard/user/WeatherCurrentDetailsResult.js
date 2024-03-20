import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import TemperatureChart from './TemperatureChart';
// ----------------------------------------------------------------------
const WeatherCurrentDetailsResult = ({ selectedCity, degreeValuesByHour, currentWeatherData }) => {
  return (
    <Grid container sx={{mt:3}}>
      <Grid item xs={12}>
        <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
          More Information on {selectedCity}'s Weather:
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4} sx={{mt:1}}>
        <TemperatureChart degreeValues={degreeValuesByHour}/>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Typography color={'text.secondary'}>
            Visibility:
          </Typography>
          <Typography color={'text.secondary'}>
            Humidity:
          </Typography>
          {currentWeatherData.cloud &&
            <Typography color={'text.secondary'}>
              Cloudy:
            </Typography>
          }
          <Typography color={'text.secondary'}>
            Wind Speed:
          </Typography>
          <Typography color={'text.secondary'}>
            Air Quality:
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
            {currentWeatherData.vis_km || currentWeatherData.avgvis_km} km
          </Typography>
          <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
            {currentWeatherData.humidity || currentWeatherData.avghumidity}%
          </Typography>
          {currentWeatherData.cloud &&
            <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
              {currentWeatherData.cloud}%
            </Typography>
          }
          <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
            {currentWeatherData.wind_kph || currentWeatherData.maxwind_kph} (km/h)
          </Typography>
          <Typography sx={{fontWeight:'bold'}} color={'text.primary'}>
            {currentWeatherData?.air_quality?.["us-epa-index"]}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

WeatherCurrentDetailsResult.propTypes = {
  currentWeatherData: PropTypes.object.isRequired,
  selectedCity: PropTypes.string.isRequired,
  degreeValuesByHour: PropTypes.array.isRequired
}

export default WeatherCurrentDetailsResult