<template>
  <div class="container">
    <div class="card" style="width: 15rem;">
      <img class="card-img-top"
           :src="randomJoke.iconUrl"
      >
      <div class="card-body">
        <p class="card-text"
           v-text="randomJoke.value">
      </p>
      </div>
      <input class="form-control mb-2"
              type="text"
              placeholder="Enter joke category"
              @input="setCategory"
      />
      <button class="btn btn-primary" @click="getNewJoke">
        Get new joke
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { store } from './../store'

export default {
  name: 'Chuck',
  
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },

  methods: {
    // ...mapActions([
    //   'fetchRandomJoke'
    // ]),

    ...mapMutations([
      'setJokeCategory'
    ]),

    setCategory(event) {
      this.setJokeCategory(event.target.value)
    },

    getNewJoke() {
      store.dispatch('fetchRandomJoke')
    }
  },

  // created() {
  //   this.fetchRandomJoke()
  // },

  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchRandomJoke', next)
  }
}
</script> 