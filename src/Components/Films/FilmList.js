import Film from './Film';

export default function FilmList({ ghibliFilms }) {
  return (
    <div className='film-list'>
      {/* maps over array of films */}
      {
        ghibliFilms.map((ghibliFilm, i) => 
          <Film key={ghibliFilm.title + i}
            ghibliFilm={ghibliFilm} />
        )}
    </div>
  );
}
