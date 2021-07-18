//? resolver는 Schema에 정의된 query만 사용한다

const hyeokjin = {
  name: "ShimHyeokJin",
  age: 28,
  gender: "man"
}


// export const resolvers = {
//   Query: {
//     name: () => "ShimHyeokJin"
//   }
// }

const resolvers = {
  Query: {
    person: () => hyeokjin
  }
}

export default resolvers