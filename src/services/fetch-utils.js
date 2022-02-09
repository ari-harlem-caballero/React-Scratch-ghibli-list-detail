// all films, single film(id), single character(film_id)
import { client } from './client';

export async function getGhibliFilms(from = 1, to = 6, filterQuery) {
  
  if (!filterQuery) {
    const response = await client
      .from('films')
      .select()
      .order('id', { ascending: true })
      .range(from, to);

    return response.data;
  } else {
    const response = await client
      .from('films')
      .select()
      .range(from, to)
      .ilike('title', `%${filterQuery}%`);

    return response.data;
  }
}

export async function getSingleFilm(id) {
  const response = await client
    .from('films')
    .select(`*, characters (*)`)
    .match({ id })
    .single();

  return response.data;
}
