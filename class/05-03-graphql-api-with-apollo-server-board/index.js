import { ApolloServer, gql } from "apollo-server";

// graphql type이다. schema 이름은 바뀌어도 상관없다.
const typeDefs = gql`
  input CreateBoard2Input {
    writer: String
    title: String
    contents: String
  }
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: BoardReturn => 객체 1개 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoard2Input: CreateBoard2Input): String
  }
`;

// api들을 resolvers 라고 부름 이름은 다른걸로 바꿔도 상관없다.
const resolvers = {
  Query: {
    fetchBoards: () => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목",
          contents: "내용",
        },
        {
          number: 2,
          writer: "영희",
          title: "영희제목이야",
          contents: "영희내용",
        },
        {
          number: 3,
          writer: "고등어",
          title: "고등어제목",
          contents: "고등어내용",
        },
      ];
      // 2. 꺼내온 결과 응답 주기
      return result;
    },
  },

  // parent는 api에서 api를 요청할때 사용
  Mutation: {
    createBoard: (_, args) => {
      // 1. 데이터를 등록하는 로직=> DB에 접속해서 데이터 저장하기
      console.log(args);
      // 2. 저장결과 알려주기
      return "등록에 성공하였습니다.";
    },
    createBoard2: (_, args) => {
      // 1. 데이터를 등록하는 로직=> DB에 접속해서 데이터 저장하기
      console.log(args);
      // 2. 저장결과 알려주기
      return "등록에 성공하였습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
