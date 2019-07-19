<template>
  <div class="container">
    <div
      class="card"
      v-for="trivia in trivias"
      :key="trivia.id"
      @click="toggleTrivia(trivia.id)"
    >
      <div class="card-header">
        {{ trivia.question }}
      </div>
      <div
        class="collapse"
        :class="{ 'show': isVisibleTriviaAnswer(trivia.id) }"
      >
        <div class="card-body">
          {{ trivia.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TriviaApp',

  data() {
    return {
      selectedTriviasIds: []
    }
  },

  computed: {
    ...mapGetters({
      trivias: 'getTrivias'
    })
  },

  methods: {
    ...mapActions([
      'fetchTrivias'
    ]),

    toggleTrivia(triviaId) {
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId);
      let isSelectedTriviaId = triviaIdIndex > -1
      if (isSelectedTriviaId) {
        return this.selectedTriviasIds.splice(triviaIdIndex, 1);
      }
      this.selectedTriviasIds.push(triviaId);
    },

    isVisibleTriviaAnswer(triviaId) {
      return this.selectedTriviasIds.indexOf(triviaId) > -1;
    }
  },

  created() {
    this.fetchTrivias();
  }
}
</script>