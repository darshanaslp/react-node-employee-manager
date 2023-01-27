import test from 'node:test';
import assert from 'node:assert'
import { promisify } from 'node:util'
test('User Post Testing', async (t) => {
  const testPort = 5000
  process.env.PORT = testPort
  const { server } = await import('../../src/index.js')
  
  const testServerAddress = `http://localhost:${testPort}/users`

  await t.test('it should create a user', async (t) => {
    const data = {
      fname: "Frist Name",
      lname: "Last Name",
      email: "example@gmail.com",
      phone: "07179797979",
      gender: "M",
      picture: "https://randomuser.me/test.jpg",
    }

    const request = await fetch(testServerAddress, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    )

    assert.strictEqual(request.status, 201)

    const result = await request.json()
    assert.deepStrictEqual(
      result.success,
      'User created with success!!',
      'it should return a valid text message'
    )


  })


  await t.test('get all users', async (t) => {

    const request = await fetch(testServerAddress, {
      method: 'GET'
    })

    assert.deepStrictEqual(
      request.headers.get('content-type'),
      'application/json'
    )

    assert.strictEqual(request.status, 200)
    const result = await request.json()

  })

  await promisify(server.close.bind(server))()

})