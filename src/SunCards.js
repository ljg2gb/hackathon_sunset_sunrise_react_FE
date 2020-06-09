import React from 'react';

export default function SunCards({sunset, sunset_image, sunrise, sunrise_image}) {
  return (
    <div className="sun-cards">
        <h3>Sunrise is at {sunrise}</h3>
        <img src={sunrise_image} alt='sunrise' />
        <h3>Sunset is at {sunset}</h3>
        <img src={sunset_image} alt='sunset' />
    </div>
  );
}