import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getGhibliFilms } from '../../services/fetch-utils';
import FilmList from './FilmList';

function FilmPage() {
  const [ghibliFilms, setGhibliFilms] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  // const [filteredFilms, setFilteredFilms] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    async function fetchPage() {
      // const magicNumber = page !== 1 && 1;
      const from = page * perPage - perPage;
      const to = page * perPage - 1;
      const films = await getGhibliFilms(from, to, filterQuery);

      setGhibliFilms(films);
    }

    fetchPage();
  }, [page, filterQuery]);

  // useEffect(() => {
  //   const filteredGhibliFilms = ghibliFilms.filter()
  // }, []);

  return (
    <>
      {/* <Link to="/">Home</Link> */}
      <h4>Current Page: {page}</h4>
      <div className='buttons'>
        {/* setPage, buttons, holds FilmList */}
        <button 
          disabled={page === 1} 
          onClick={() => setPage(page - 1)}
        >Previous Page</button>
        <button 
          disabled={ghibliFilms.length < perPage}
          onClick={() => setPage(page + 1)}
        >Next Page</button>
      </div>
      <input 
        onChange={(e) => setFilterQuery(e.target.value)}/>
      <FilmList ghibliFilms={ghibliFilms} />
    </>
  );
}

export default FilmPage;