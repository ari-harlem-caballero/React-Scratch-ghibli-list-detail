import React from 'react';

export default function Character({ characters }) {
  return (
    <div>
      {/* link based on film_id: name, gender, age, species */}
    Characters:
      <p>{characters.name}: {characters.age}, {characters.gender}, {characters.species}</p>
    </div>
  );
}
