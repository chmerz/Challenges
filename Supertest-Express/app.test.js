
const request = require('supertest')
const app = require('./App.js')

// Let Jest know to use the mock
jest.mock('./models/word')

describe('Test the root path', ()=>{
  it('Should respond to GET', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.statusCode).toBe(200)
    })
  })

  it('Should respond with a greeting of "Hello World"', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.body.greeting).toBe('Hello World')
    })
  })

  //Everything else works normally, using the mock
  it('Should respond with word of the day', ()=>{
    return request(app).get('/').then((response)=>{
      expect(response.body.wordOfTheDay.word).toBe('cyberpunk')
      expect(response.body.wordOfTheDay.type).toBe('noun')
      expect(response.body.wordOfTheDay.definition).toBe('computer hacker')
    })
  })
})
