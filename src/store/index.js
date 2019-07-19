import Vue from 'vue'
import Vuex from 'vuex'

import { ChuckModule } from './Chuck.store'
import { TriviaModule } from './Trivia.store'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ChuckModule,
    TriviaModule
  }
})