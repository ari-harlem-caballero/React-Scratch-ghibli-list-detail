// all films, single film(id), single character(film_id)
import { client } from './client';

export async function getGhibliFilms(from = 1, to = 6) {
  const response = await client
    .from('films')
    .select()
    .order('id', { ascending: true })
    .range(from, to);

  return response.data;
}

export async function getSingleFilm(id) {
  const response = await client
    .from('films')
    .select(`*, characters (*)`)
    .match({ id })
    .single();

  return response.data;
}

// export async function getCharacters(film_id) {
//   const response = await client
//     .from('characters')
//     .select(`*, films (*)`)
//     .match({ film_id });

//   return response.data;
// }