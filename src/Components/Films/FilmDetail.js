import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getSingleFilm } from '../../services/fetch-utils';

export default function FilmDetail() {
  const [ghibliFilm, setGhibliFilm] = useState('');
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSingleFilm(params.id);

      setGhibliFilm(data);
    }

    onLoad();
  }, [params.id]);

  return (
  <>
  <Link to="/">Home</Link>
  <div className='film-detail'>
    {/* PAGE: holds single film's details/characters */}
    {/* intakes getSingleFilm & getSingleChar, useParams */}
    <img src={ghibliFilm.image}/>
    <h1>{ghibliFilm.title}</h1>
    <p className='film-info'>{ghibliFilm.director} -- {ghibliFilm.release_date}, {ghibliFilm.run_time}</p>
    <p className='description'>{ghibliFilm.description}</p>
  </div>
  </>
  );
}
