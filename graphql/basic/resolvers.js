import { getMovies, getById, addMovie, deleteMovie } from './db'

//? resolver는 Schema에 정의된 query만 사용한다

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => {
      console.log(args.id);
      return getById(args.id)
    }
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score),
    deleteMovie: (_, {id}) => deleteMovie(id)
  }
}

export default resolvers