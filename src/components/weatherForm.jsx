import React, { useState } from 'react';




export default function WeatherForm({ onchangeCity }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        onchangeCity(city);
    };
 
    const onChange = (e) => {
      const value = e.target.value;
      setCity(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Entrez le nom de la ville" value={city} onChange={onChange} />
            <button type="submit" onClick={handleSubmit}>Rechercher</button>
            <button type="button" onClick={() => setCity('')}>Effacer</button>
        </form>
    );
  }
  