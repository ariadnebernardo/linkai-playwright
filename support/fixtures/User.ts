import { faker } from '@faker-js/faker'

export interface UserSignup {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserLogin {
  name: string
  username: string
  password: string
}

export function getFakeUser() {
  const defaultPassword = 'pwd123'

  return {
    name: faker.person.fullName(),
    username: faker.internet.username().replace('.', ''),
    email: faker.internet.email(),
    password: defaultPassword,
    confirmPassword: defaultPassword,
  }
}

export function getNewUser() {
  const defaultPassword = 'pwd123'

  return {
    name: 'Ariadne',
    username: 'ariadne_bernardo',
    email: 'ariadne@qa.com.br',
    password: defaultPassword,
    confirmPassword: defaultPassword,
  }
}

export const Users = {
  validUser: {
    name: 'papito',
    username: 'papito',
    password: 'pwd123',
  },
  wrongPassword: {
    name: 'papito',
    username: 'papito',
    password: '123456',
  },
  userNotFound: {
    name: 'papito',
    username: 'not-found',
    password: '123456',
  },
  emptyFields: {
    name: '',
    username: '',
    password: '',
  },
  missingUsername: {
    name: 'papito',
    username: '',
    password: 'pwd123',
  },
  missingPassword: {
    name: 'papito',
    username: 'papito',
    password: '',
  },
}
