import { getMovies } from './movieDB'

const resolvers = {
  Query: {
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  }
}

export default resolvers