



export default function WeatherInfo({ weather }) {
  return (
   <div className="card-info">
    <div className="card-name">
      <h3>{weather?.location.name}</h3>
    </div>
    <div className="card-country">
      <h4>{weather?.location.country}</h4>
    </div>
    <div className="card-boxs">
      <div className="icon">
        <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} />
      </div>
      <div className="card-temp">
        <h5>Temperature(C°)</h5>
        <p>{weather?.current.condition.text}</p>
        <span>{weather?.current.temp_c}°C</span>
      </div>
    </div>
    <div className="card-map">
    <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60646188934!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2smg!4v1759480835835!5m2!1sen!2smg`}
     width="400" 
     height="450"
      
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
    </div>
   </div>
  );
}
