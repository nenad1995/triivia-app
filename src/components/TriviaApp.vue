<template>
  <div class="container">
    <select
      class="custom-select"
      size="10"
      @change="onCategoryChanged"
    >
      <option
        v-for="triviaCategory in triviaCategories"
        :key="triviaCategory.id"
        :value="triviaCategory.id">
          {{ triviaCategory.title }}
      </option>
    </select>
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Filter Trivias"
      v-model="filterTriviaTerm"
    />
    <div
      class="card"
      v-for="trivia in currentlyVisibleTrivias"
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
    <paginator
      class="mb-3 mt-3"
      :number-of-pages="numberOfPages"
      :current-page="currentPage"
      @selected-page="setCurrentPage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Paginator from './Paginator.vue'

export default {
  name: 'TriviaApp',

  data() {
    return {
      selectedTriviasIds: [],
      filterTriviaTerm: '',
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      trivias: 'getTrivias',
      triviaCategories: 'getTriviaCategories'
    }),

    filteredTrivias() {
      return this.trivias.filter((trivia) => {
        return trivia.question.toLowerCase()
          .indexOf(this.filterTriviaTerm.toLowerCase()) > -1;
      })
    },

    currentlyVisibleTrivias() {
      let bottomLimit = (this.currentPage - 1) * 5;
      let topLimit = bottomLimit + 5;
      return this.filteredTrivias.filter((trivia, index) => {
        return index >= bottomLimit && index < topLimit;
      })
    },

    numberOfPages() {
      return Math.ceil(this.filteredTrivias.length / 5);
    }
  },

  methods: {
    ...mapActions([
      'fetchTrivias',
      'fetchTriviaCategories'
    ]),

    toggleTrivia(triviaId) {
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId)
      let isSelectedTriviaId = triviaIdIndex > -1
      if (isSelectedTriviaId) {
        return this.selectedTriviasIds.splice(triviaIdIndex, 1)
      }
      this.selectedTriviasIds.push(triviaId)
    },

    isVisibleTriviaAnswer(triviaId) {
      return this.selectedTriviasIds.indexOf(triviaId) > -1
    },

    onCategoryChanged(event) {
      this.fetchTrivias(event.target.value)
    },
    
    setCurrentPage(page) {
      this.currentPage = page;
    }
  },

  created() {
    this.fetchTrivias()
    this.fetchTriviaCategories()
  }
}
</script>