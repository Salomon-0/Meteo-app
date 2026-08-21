// Le composant WeatherInfo reçoit une prop "weather"
// contenant les informations météo (location, current, etc.)
export default function WeatherInfo({ weather }) {

  return (
    <div className="card-info">

      {/* Affichage du nom de la ville */}
      <div className="card-name">
        {/* L'opérateur ?. évite une erreur si weather n'est pas encore chargé */}
        <h3>{weather?.location.name}</h3>
      </div>

      {/* Affichage du pays */}
      <div className="card-country">
        <h4>{weather?.location.country}</h4>
      </div>

      {/* Conteneur qui regroupe l’icône météo + la température */}
      <div className="card-boxs">

        {/* Icône météo (ex: soleil, nuages, pluie) */}
        <div className="icon">
          {/* On concatène "http:" car l’API renvoie une URL sans protocole */}
          <img
            src={`http:${weather?.current.condition.icon}`}
            alt={weather?.current.condition.text}
          />
        </div>

        {/* Bloc contenant les infos de température */}
        <div className="card-temp">
          <h5>Temperature(C°)</h5>

          {/* Texte décrivant la météo (Ex: "Partly cloudy") */}
          <p>{weather?.current.condition.text}</p>

          {/* Température actuelle en °C */}
          <span>{weather?.current.temp_c}°C</span>
        </div>
      </div>

      {/* Carte Google Maps centrée sur la latitude/longitude */}
      <div className="card-map">

        {/* 
          ⚠️ L’URL de Google Maps nécessite les coordonnées lat/lon.
          On injecte weather.location.lat et weather.location.lon.
        */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.60646188934!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sen!2smg!4v1759480835835!5m2!1sen!2smg`}
          width="400"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
