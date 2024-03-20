import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Autocomplete, TextField, FormControlLabel, Checkbox } from '@mui/material';
import dayjs from 'dayjs';
import { LoadingButton } from '@mui/lab'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { getCitySummary } from '../../../api/actions/wiki';
import { getCityCurrentWeather } from '../../../api/actions/weather';
// ----------------------------------------------------------------------
const WeatherRequestForm = (props) => {
  const { countriesWithCities, citiesToChooseFrom, selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, weatherPrediction, setWeatherPrediction, selectedDate, handleDateChange, setResultsReady, setCitySummary, setCurrentWeatherData, setDegreeValuesByHour, setWeekWeatherData } = props
  const minDate = dayjs()
  const maxDate = minDate.add(5, 'day')
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    const citySummaryData = await getCitySummary({cityName:selectedCity})
    setCitySummary(citySummaryData)

    const cityCurrentWeather = await getCityCurrentWeather({cityName: selectedCity})
    console.log(cityCurrentWeather)
    if (weatherPrediction){
      const numberOfDaysAhead = selectedDate.date() - minDate.date()
      setCurrentWeatherData(cityCurrentWeather?.forecast?.forecastday[numberOfDaysAhead].day)
      const todayWeather = cityCurrentWeather.forecast.forecastday[numberOfDaysAhead]
      setDegreeValuesByHour(todayWeather.hour.map(h=>h.temp_c))
    }else{
      setCurrentWeatherData(cityCurrentWeather?.current)
      setWeekWeatherData(cityCurrentWeather?.forecast?.forecastday)
      const todayWeather = cityCurrentWeather.forecast.forecastday[0]
      setDegreeValuesByHour(todayWeather.hour.map(h=>h.temp_c))
    }
    setResultsReady(true)
    setLoading(false)
  }

  return (
      <>
        <Grid item>
          <Autocomplete
            disablePortal
            id="selectedCountry"
            options={countriesWithCities.map(data=>data.country)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Country"/>}
            value={selectedCountry}
            onChange={(event, country)=>setSelectedCountry(country)}
          />
        </Grid>
        {selectedCountry && 
          <Grid item sx={{ml:2}}>
            <Autocomplete
              disablePortal
              id="selectedCity"
              options={citiesToChooseFrom}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="City"/>}
              value={selectedCity}
              onChange={(event, city)=>setSelectedCity(city)}
            />
          </Grid>
        }
        {selectedCity && 
          <>
            <Grid item xs={12} sx={{mt:1}}>
              <FormControlLabel
                control= {
                  <Checkbox checked={weatherPrediction} onChange={(e)=>setWeatherPrediction(e.target.checked)}/>
                }
                label="I want to see weather predictions for a specific date"
              />
            </Grid>
            {weatherPrediction && 
              <Grid item xs={12} sx={{mt:2}}>
                <LocalizationProvider dateAdapter={AdapterDayjs} locale="en-US">
                  <DatePicker
                    label="Select Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    minDate={minDate}
                    maxDate={maxDate}
                  />
                </LocalizationProvider>
              </Grid>
            }
            <Grid item xs={12} sx={{mt:2}}>
              <LoadingButton loading={loading} onClick={handleSearch} variant='contained' size='large'>
                Search
              </LoadingButton>
            </Grid>
            <hr/>
            
          </>
        }
      </>
  )
}

WeatherRequestForm.propTypes = {
  countriesWithCities: PropTypes.array.isRequired,
  citiesToChooseFrom: PropTypes.array.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  setSelectedCountry: PropTypes.func.isRequired,
  selectedCity: PropTypes.string.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  weatherPrediction: PropTypes.bool.isRequired,
  setWeatherPrediction: PropTypes.func.isRequired,
  selectedDate: PropTypes.object.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  setResultsReady: PropTypes.func.isRequired,
  setCitySummary: PropTypes.func.isRequired,
  setCurrentWeatherData: PropTypes.func.isRequired,
  setDegreeValuesByHour: PropTypes.func.isRequired,
  setWeekWeatherData: PropTypes.func.isRequired,
  currentWeatherData: PropTypes.object.isRequired // Add this line
};

export default WeatherRequestForm