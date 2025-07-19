export interface User {
  username: string;
  password: string;
}

export const Users = {
  validUser: {
    username: "papito",
    password: "pwd123",
  },
  wrongPassword: {
    username: "papito",
    password: "123456",
  },
  userNotFound: {
    username: "not-found",
    password: "123456",
  },
  emptyFields: {
    username: "",
    password: "",
  },
  missingUsername: {
    username: "",
    password: "pwd123",
  },
  missingPassword: {
    username: "papito",
    password: "",
  },
};
