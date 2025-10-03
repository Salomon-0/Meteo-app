// WeatherApp_corrected.jsx
import React, { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherInfo from './weatherInfo';
import Loader from './loader';

// IMPORTANT (Vite) : les variables d'environnement côté client doivent commencer par VITE_
// Exemple (.env à la racine du projet) :
// VITE_WEATHER_API_URL=https://api.weatherapi.com/v1/current.json
// VITE_WEATHER_API_KEY=ta_clef_api
const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInfo(); // charge "London" par défaut
  }, []);

  async function loadInfo(city = 'Madagascar') {
    // garde-fou si les variables d'env manquent
    if (!API_URL || !API_KEY) {
      const msg = 'Variables d\'environnement API manquantes (VITE_WEATHER_API_URL / VITE_WEATHER_API_KEY).';
      console.error(msg);
      setError(msg + ' Vérifie ton .env et redémarre le serveur de dev.');
      return;
    }

    setError(null);
    setWeather(null); // affiche Loader

    try {
      // construit l'URL proprement (évite les erreurs de concaténation)
      const url = new URL(API_URL);
      url.searchParams.set('key', API_KEY);
      url.searchParams.set('q', city);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      // si tu veux simuler un délai de chargement, remets setTimeout ici
      setWeather(json);
      console.log(json);
    } catch (err) {
      console.error('Erreur lors de la récupération des données :', err);
      setError(err.message || 'Erreur inconnue');
    }
  }

  function handleChange(city) {
    loadInfo(city);
  }

  return (
    <div className="container">
      {/* J'utilise "onchangeCity" pour rester compatible avec ton code existant */}
      <WeatherForm onchangeCity={handleChange} />

      {error ? (
        <div className="error">{error}</div>
      ) : weather ? (
        <WeatherInfo weather={weather} />
      ) : (
        <Loader />
      )}
    </div>
  );
}
