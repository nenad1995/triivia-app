import { triviaService } from './../services/Trivia.service'

export const TriviaModule = {
  state: {
    trivias: [],
    triviaCategories: []
  },

  getters: {
    getTrivias(state) {
      return state.trivias
    },

    getTriviaCategories(state) {
      return state.triviaCategories
    }
  },

  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias
    },

    setTriviaCategories(state, triviaCategories) {
      state.triviaCategories = triviaCategories
    }
  },

  actions: {
    fetchTrivias(store, category) {
      triviaService.getRandomTrivias(category)
        .then(({ data }) => {
          store.commit('setTrivias', data)
        })
    },

    fetchTriviaCategories(store) {
      triviaService.getTriviaCategories()
        .then(({ data }) => {
          store.commit('setTriviaCategories', data)
        })
    }
  }
} 