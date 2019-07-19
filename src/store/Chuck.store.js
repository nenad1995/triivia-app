import { chuckService } from './../services/Chuch.service'

export const ChuckModule = {
  state: {
    randomJoke: null,
    jokeCategory: ''
  },

  getters: {
    getRandomJoke(state) {
      return state.randomJoke
    }
  },

  mutations: {
    setRandomJoke(state, joke) {
      state.randomJoke = joke
    },

    setJokeCategory(state, jokeCategory) {
      state.jokeCategory = jokeCategory;
    }
  },

  actions: {
    fetchRandomJoke(store, next = () => {} ) {
      chuckService.getRandomJoke(store.state.jokeCategory)
        .then( response => {
          store.commit('setRandomJoke', response)
          next()
        })
        .catch(e => {
          alert(e)
        })
    }
  }
}