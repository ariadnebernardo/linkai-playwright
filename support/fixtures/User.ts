export interface User {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export const Users = {
  validUser: {
    name: "papito",
    username: "papito",
    password: "pwd123",
    confirmPassword: "pwd123",
    email: "papito@gmail.com.br",
  },
  invalidEmail: {
    name: "papito",
    username: "papito",
    password: "pwd123",
    confirmPassword: "pwd123",
    email: "papito@",
  },
  wrongPassword: {
    name: "papito",
    username: "papito",
    password: "123456",
    confirmPassword: "pwd123",
    email: "papito@gmail.com.br",
  },
  userNotFound: {
    name: "papito",
    username: "not-found",
    password: "123456",
    confirmPassword: "123456",
    email: "papito@gmail.com.br",
  },
  emptyFields: {
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  },
  missingUsername: {
    name: "papito",
    username: "",
    password: "pwd123",
    confirmPassword: "pwd123",
    email: "papito@gmail.com.br",
  },
  missingPassword: {
    name: "papito",
    username: "papito",
    password: "",
    confirmPassword: "",
    email: "papito@gmail.com.br",
  },
};
