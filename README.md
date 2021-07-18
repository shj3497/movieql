# MovieQL

## GraphQL로 서버 만들기

GraphQL 서버에 할 것은 어떤 Mutations, Query들을 우리가 가졌는지 알려주어야한다.

```javascript
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/basic/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/basic/schema.graphql",
  resolvers,
});
server.start(() => console.log("GraphQL Server Running on localhost:4000"));
```

### [Settings](./Setting.md)

<br/>

### `Schema`

내가 사용자에게 보내거나, 사용자로부터 받을 data에 대한 설명

#### Query

Query는 단순히 내가 정보를 받을 때만 쓴다. (Select)

#### Mutation

Mutation: DB에 있는 정보를 수정할 때 (Insert, Update, Delete)

<br/>

### `Resolver`

클라이언트로부터 요청된 Query, Mutation에 대해 반환할 결과를 생성하는 로직  
GraphQL 서버가 Resolver를 찾아 Query와 Mutation에 해당하는 함수를 실행한다.

<br/>

### `Playground`

localhost:4000  
PostMan같은 기능을 한다.

<br/>

## Basic Course

./graphql/basic 에서 코드 확인

<br/>

## Movie API (REST API)

./graphql/movieAPI 에서 코드 확인
