import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import 'chart.js/auto';
import 'moment';
import 'chartjs-adapter-moment';

// @mui
import { Grid, Container } from '@mui/material';
import dayjs from 'dayjs';

// components
import CitySummaryResult from '../sections/@dashboard/user/CitySummaryResult';
import WeatherCurrentResult from '../sections/@dashboard/user/WeatherCurrentResult';
import WeatherRequestForm from '../sections/@dashboard/user/WeatherRequestForm';
import WeatherCurrentDetailsResult from '../sections/@dashboard/user/WeatherCurrentDetailsResult';
import SignupMessage from '../sections/@dashboard/user/SignupMessage';

// data
import countriesWithCities from '../_mock/countrie_cities';


// ----------------------------------------------------------------------
function getCitiesByCountry(countryName) {
  const countryData = countriesWithCities.find(country => country.country === countryName)
  return countryData ? countryData.cities : []
}

export default function DashboardAppPage() {
  const [signupMessageIgnore, setSignupMessageIgnore] = useState(false)
  const user = JSON.parse(localStorage.getItem('profile'))
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [citiesToChooseFrom, setCitiesToChooseFrom] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  // For weather predictions
  const [weatherPrediction, setWeatherPrediction] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleDateChange = (date) => {
    setSelectedDate(date)
  };

  // for the results
  const [resultsReady, setResultsReady] = useState(false)
  const [citySummary, setCitySummary] = useState(null)
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [degreeValuesByHour, setDegreeValuesByHour] = useState([])
  const [weekWeatherData, setWeekWeatherData] = useState([])

  useEffect(()=>{
    setResultsReady(false)
    setSelectedCity('')
    setCurrentWeatherData({})
    setWeekWeatherData([])
    if (selectedCountry!==""){
      const citiesToChoose = getCitiesByCountry(selectedCountry)
      setCitiesToChooseFrom(citiesToChoose)
    }else{
      setCitiesToChooseFrom([])
    }
  }, [selectedCountry])


  return (
    <>
      <Helmet>
        <title>Jambo | Interview</title>
      </Helmet>

      <Container maxWidth="xl">
        {!user && !signupMessageIgnore && <SignupMessage setSignupMessageIgnore={setSignupMessageIgnore}/>}
        <Grid container alignItems={'center'}>
          <Grid item xs={12} sx={{mb:3}}>
            Welcome! To use the application, start by selecting a country.
          </Grid>
          <WeatherRequestForm 
            setCitySummary={setCitySummary} 
            setCurrentWeatherData={setCurrentWeatherData} 
            setDegreeValuesByHour={setDegreeValuesByHour} 
            setWeekWeatherData={setWeekWeatherData} 
            countriesWithCities={countriesWithCities} 
            citiesToChooseFrom={citiesToChooseFrom} 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
            selectedCity={selectedCity} 
            setSelectedCity={setSelectedCity} 
            weatherPrediction={weatherPrediction} 
            setWeatherPrediction={setWeatherPrediction} 
            selectedDate={selectedDate} 
            handleDateChange={handleDateChange} 
            setResultsReady={setResultsReady}/> 
        </Grid>
        {/* Results */}
        {resultsReady && 
          <Grid container>
            {/* Summary of the City */}
            <CitySummaryResult citySummary={citySummary} selectedCity={selectedCity}/>
            {/* Current Weather of the City */}
            <WeatherCurrentResult currentWeatherData={currentWeatherData} weekWeatherData={weekWeatherData} weatherPrediction={weatherPrediction}/>
            {/* More Info about the Current Weather of the City */}
            <WeatherCurrentDetailsResult selectedCity={selectedCity} currentWeatherData={currentWeatherData} degreeValuesByHour={degreeValuesByHour}/>
          </Grid>
        }
      </Container>
    </>
  );
}
