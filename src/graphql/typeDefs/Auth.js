export const mutations = `
  scalar Upload 
  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, userName: String!, password: String!): User
    fileUpload(file: Upload!): LoginResult
  }

  type Query {
    isLoggedIn: LoginResult
  }
`;

export const types = `
  type LoginResult {
    success: Boolean
    msg: String
  }

  type User {
    firstName: String
    lastName: String
    email: String
    userName: String
    avatarName: String
    avatarTitle: String
    avatarPath: String
    emailVerified: String
  }
`;

export default types + mutations;
