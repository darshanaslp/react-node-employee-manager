const request = require('request');
const server = require('./index.js');


describe('User Post Testing', () => {
  const testPort = 5000;
  process.env.PORT = testPort;

  let testServerAddress;

  beforeAll(async done => {
    testServerAddress = `http://localhost:${testPort}/users`;
    server.listen(testPort, () => {
      console.log('Server up and running...');
      done();
    });
  });

  afterAll(() => {
    server.close();
  });

  it('it should create a user', done => {
    const data = {
      fname: "Frist Name",
      lname: "Last Name",
      email: "example@gmail.com",
      phone: "07179797979",
      gender: "M",
      picture: "https://randomuser.me/test.jpg"
    };

    request.post({ url: testServerAddress, json: data }, (error, response) => {
      expect(response.headers['content-type']).toBe('application/json');
      expect(response.statusCode).toBe(201);

      const result = response.body;
      expect(result.success).toBe('User created with success!!');
      done();
    });
  });

  it('it should get all users', done => {
    request.get({ url: testServerAddress, json: true }, (error, response) => {
      expect(response.headers['content-type']).toBe('application/json');
      expect(response.statusCode).toBe(200);

      const result = response.body;
      done();
    });
  });
});