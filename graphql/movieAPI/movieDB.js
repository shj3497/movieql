import fetch from 'node-fetch'

const API_URL = "https://yts.mx/api/v2/list_movies.json?"

// export const getMovies = async (limit, rating) => {
//   const response = await fetch(`${API_URL}`);
//   const data = await response.json();
//   console.log(data);
// }

export const getMovies = (limit, rating) => {
  //! REST API를 GraphQL API로 감싸줘서 사용 가능하다.
  // return fetch(`${API_URL}`)
  //   .then(res => res.json())
  //   .then(json => json.data.movies);

  let REQUEST_URL = API_URL;
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