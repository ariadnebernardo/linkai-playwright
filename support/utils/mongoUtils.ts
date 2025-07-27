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
