import { useState, useEffect } from 'react';
import { getGhibliFilms } from '../../services/fetch-utils';
import FilmList from './FilmList';

function FilmPage() {
  const [ghibliFilms, setGhibliFilms] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    async function fetchPage() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const films = await getGhibliFilms(from, to);

      setGhibliFilms(films);
    }

    fetchPage();
  }, [page]);

  return (
    <>
      <h3>Current Page: {page}</h3>
      <div className='buttons'>
        {/* setPage, buttons, holds FilmList */}
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Next Page</button>
        <button onClick={() => setPage(page + 1)}>Previous Page</button>
      </div>
      <FilmList ghibliFilms={ghibliFilms} />
    </>
  );
}

export default FilmPage;