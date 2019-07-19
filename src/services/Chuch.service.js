import ChuckClient from 'chucknorris-io'

class ChuckService {
  constructor() {
    this.client = new ChuckClient()
  }

  getRandomJoke(category = '') {
    return this.client.getRandomJoke(category)
  }
}

export const chuckService = new ChuckService()