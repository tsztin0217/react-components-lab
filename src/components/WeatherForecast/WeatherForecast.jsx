import './WeatherForecast.css';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherData from '../WeatherData/WeatherData';

function WeatherForecast({forecast}) {
    const { day, img, imgAlt, conditions, time } = forecast;
    return (
        <div className="weather">
            <WeatherData day={day} conditions={conditions} time={time}/> 
            <WeatherIcon img={img} imgAlt={imgAlt} />
        </div>
    );
}

export default WeatherForecast;