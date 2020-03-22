export const mutations = `
  scalar Upload 
  extend type Mutation {
    register(firstName: String!, lastName: String!, email: String!, userName: String!, password: String!): User
    login(key: String!, password: String!): User
    fileUpload(file: Upload!): Responce
  }
`;

export const types = `
  type Responce {
    success: Boolean
    msg: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    userName: String
    avatarName: String
    avatarTitle: String
    avatarPath: String
    emailVerified: String
    token: String
  }

  type UserView {
    id: ID
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
