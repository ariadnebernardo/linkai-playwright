import { Collection, MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/linkai'
const client = new MongoClient(url)

export async function removeUserByEmail(email: string) {
  await client.connect()
  const result = await client
    .db()
    .collection('users')
    .deleteOne({ email: email })

  return result.deletedCount
}

export async function removeByUsername(username: string) {
  await client.connect()
  const result = await client
    .db()
    .collection('users')
    .deleteOne({ username: username })

  return result.deletedCount
}

export async function insertUser(user: any) {
  await client.connect()
  const result = await client.db().collection('users').insertOne(user)

  return result.insertedId
}
