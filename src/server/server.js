const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const path = require('path');

const subjects = [
  {
    name: '古典2b',
    block: 'I_A',
    class: '国語',
    credit: 1
  },
  {
    name: '小論文',
    block: 'I_A',
    class: '国語',
    credit: 1
  },
  {
    name: '数学Iβ',
    block: 'I_A',
    class: '数学',
    credit: 1
  },
  {
    name: 'PE_SR',
    block: 'I_A',
    class: '体育',
    credit: 1
  },
  {
    name: 'Structure 2d',
    block: 'I_A',
    class: '英語',
    credit: 1
  },
  {
    name: '現代文2b',
    block: 'I_B',
    class: '国語',
    credit: 1
  },
  {
    name: '数学Iβ',
    block: 'I_B',
    class: '数学',
    credit: 1
  },
  {
    name: '数学Iγ',
    block: 'I_B',
    class: '数学',
    credit: 1
  },
  {
    name: 'ICT Skills',
    block: 'I_B',
    class: '情報',
    credit: 1
  },
  {
    name: 'リサーチとフィールドスタディ',
    block: 'I_B',
    class: '総合',
    credit: 1
  },
  {
    name: '現代文3a',
    block: 'II_A',
    class: '国語',
    credit: 1
  },
  {
    name: '数学Iβ',
    block: 'II_A',
    class: '数学',
    credit: 1
  },
  {
    name: '数学Bα',
    block: 'II_A',
    class: '数学',
    credit: 1
  },
  {
    name: 'Forcus on Form 2b',
    block: 'II_A',
    class: '英語',
    credit: 1
  },
  {
    name: 'Mastery Grammar i/h',
    block: 'II_A',
    class: '英語',
    credit: 1
  },
  {
    name: '古典3b',
    block: 'II_B',
    class: '国語',
    credit: 1
  },
  {
    name: '小論文',
    block: 'II_B',
    class: '国語',
    credit: 1
  },
  {
    name: '数学Iγ',
    block: 'II_B',
    class: '数学',
    credit: 1
  },
  {
    name: 'Basic Writing',
    block: 'II_B',
    class: '英語',
    credit: 1
  },
  {
    name: '書道',
    block: 'II_B',
    class: '美術',
    credit: 1
  },
  {
    name: '古典2c',
    block: 'III_A',
    class: '国語',
    credit: 1
  },
  {
    name: '日本史A(近世)',
    block: 'III_A',
    class: '社会',
    credit: 1
  },
  {
    name: 'HSコンサートバンド',
    block: 'III_A',
    class: '美術',
    credit: 1
  },
  {
    name: '科学と人間生活e',
    block: 'III_A',
    class: '理科',
    credit: 1
  },
  {
    name: '生活科学',
    block: 'III_A',
    class: '理科',
    credit: 1
  },
  {
    name: '現代文2c',
    block: 'III_B',
    class: '国語',
    credit: 1
  },
  {
    name: '科学と人間生活2c',
    block: 'III_B',
    class: '理科',
    credit: 1
  },
  {
    name: '古典演習2',
    block: 'III_B',
    class: '国語',
    credit: 1
  },
  {
    name: '書道',
    block: 'III_B',
    class: '美術',
    credit: 1
  },
  {
    name: 'PE HS',
    block: 'III_B',
    class: '体育',
    credit: 1
  },
  {
    name: '現代文1',
    block: 'IV_A',
    class: '国語',
    credit: 1
  },
  {
    name: '古典2b',
    block: 'IV_A',
    class: '国語',
    credit: 1
  },
  {
    name: '世界史(古代-中世)',
    block: 'IV_A',
    class: '社会',
    credit: 1
  },
  {
    name: '食物',
    block: 'IV_A',
    class: '保険',
    credit: 1
  },
  {
    name: '物理',
    block: 'IV_A',
    class: '理科',
    credit: 1
  },
  {
    name: '国語総合1(古)',
    block: 'V_A',
    class: '国語',
    credit: 1
  },
  {
    name: '国号総合2(現)',
    block: 'V_A',
    class: '国語',
    credit: 1
  },
  {
    name: '生物演習',
    block: 'V_A',
    class: '理科',
    credit: 1
  },
  {
    name: 'リサーチとフィールドスタディ',
    block: 'V_A',
    class: '総合',
    credit: 1
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  type Subject {
    name: String
    block: String
    class: String
    credit: Int
  }

  type Query {
    subjects: [Subject]!
    searchSubjectsByBlock(block: String): [Subject]
    searchSubjectsByName(name: String): [Subject]
    searchSubjectsByClass(class: String): [Subject]
    searchSubjectsByCredit(credit: String): [Subject]
    searchSubject(
      name: String
      block: String
      class: String
      credit: Int
    ): [Subject]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    subjects: () => subjects,
    searchSubjectsByBlock: (_, args) => {
      return subjects.filter(subject => {
        return subject.block === args.block;
      });
    },
    searchSubjectsByName: (_, args) => {
      return subjects.filter(subject => {
        return subject.name === args.name;
      });
    },
    searchSubjectsByClass: (_, args) => {
      return subjects.filter(subject => {
        return subject.class === args.class;
      });
    },
    searchSubjectsByCredit: (_, args) => {
      return subjects.filter(subject => {
        return subject.credit === args.credit;
      });
    },
    searchSubject: (_, args) => {
      let filteredSubjects = subjects;
      if (args.name) {
        console.log('args.name', args.name);
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.name === args.name;
        });
      }
      if (args.block) {
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.block === args.block;
        });
      }
      if (args.class) {
        filteredSubjects = filteredSubjects.filter(subject => {
          return subject.class === args.class;
        });
      }
      if (args.credit) {
        filteredSubjects.filter(subject => {
          return subject.credit === args.credit;
        });
      }
      return filteredSubjects;
    }
  }
};
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
  res.send('hoge');
});
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(
    `🚀 Server is runnning!!!`,
    ` process.env.PORT: ${process.env.PORT}`
  )
);
