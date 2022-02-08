import React from 'react';
import { Link } from 'react-router-dom';

export default function Film({ ghibliFilm }) {
  return (
    <Link to={`/film/${ghibliFilm.id}`}>
      <div className='film'>
        {/* links to detail page....holds img/title for filmList */}
        <img src={ghibliFilm.image}/>
        <h2>{ghibliFilm.title}</h2>
      </div>
    </Link>
  );
}
