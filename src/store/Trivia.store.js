import { triviaService } from './../services/Trivia.service'

export const TriviaModule = {
  state: {
    trivias: []
  },

  getters: {
    getTrivias(state) {
      return state.trivias;
    }
  },

  mutations: {
    setTrivias(state, trivias) {
      state.trivias = trivias;
    }
  },

  actions: {
    fetchTrivias(store) {
      triviaService.getRandomTrivias()
        .then(({ data }) => {
          store.commit('setTrivias', data);
        })
    }
  }
} 