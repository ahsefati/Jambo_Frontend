import { Line } from 'react-chartjs-2';

// ----------------------------------------------------------------------
const TemperatureChart = ({ degreeValues }) => {
  const chartData = {
      labels: Array.from(Array(24).keys()),
      datasets: [
          {
            label: '',
            data: degreeValues,
            fill: true,
            tension: 0.1,
            pointBackgroundColor: Array(24).fill('rgb(75, 192, 192)')
          }
      ]
  }

  const chartOptions = {
    scales: {
        x: {
          title: {
            display: true,
            text: 'Hour of the Day'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Temperature (°C)'
          }
        }
    },
    plugins: {
      legend: {
          display: false
      }
    }
  }

  return (
      <div>
          <Line data={chartData} options={chartOptions}/>
      </div>
  );
};

export default TemperatureChart