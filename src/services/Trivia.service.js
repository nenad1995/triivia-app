import Axios from 'axios';

class TriviaService {
  constructor() {
    this.client = new Axios.create({
      baseURL: 'http://jservice.io/api/'
    })
  }

  getRandomTrivias() {
    return this.client.get('random', {
      params: { count: 30 }
    })
  }
}

export const triviaService = new TriviaService() 