import React from 'react';
import { Link } from 'react-router-dom';

export default function Film({ ghibliFilm }) {
  return (
  <Link to={`/film/${ghibliFilm.id}`}>
    <div className='film'>
    {/* links to detail page....holds img/title, dir, date, run, description */}
      <img src={ghibliFilm.image}/>
      <h1>{ghibliFilm.title}</h1>
      <p className='film-info'>{ghibliFilm.director} -- {ghibliFilm.release_date}, {ghibliFilm.run_time}</p>
      <p className='description'>{ghibliFilm.description}</p>
    </div>;
  </Link>
  );
}
