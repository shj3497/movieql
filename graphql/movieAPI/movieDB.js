import fetch from 'node-fetch'
import axios from 'axios';

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = (limit, rating) => {
  //! REST API를 GraphQL API로 감싸줘서 사용 가능하다.
  // return fetch(`${API_URL}`)
  //   .then(res => res.json())
  //   .then(json => json.data.movies);

  let REQUEST_URL = LIST_MOVIES_URL;
  if(limit > 0){
    REQUEST_URL += `limit=${limit}&`;
  }
  if(rating > 0){
    REQUEST_URL += `minimum_rating=${rating}&`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie }
    }
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
}

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  })
  return movies;
}