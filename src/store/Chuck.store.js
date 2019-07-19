import { chuckService } from './../services/Chuch.service'

export const ChuckModule = {
  state: {
    randomJoke: null
  },

  getters: {
    getRandomJoke(state) {
      return state.randomJoke
    }
  },

  mutations: {
    setRandomJoke(state, joke) {
      state.randomJoke = joke
    }
  },

  actions: {
    fetchRandomJoke(store, next = () => {} ) {
      chuckService.getRandomJoke()
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