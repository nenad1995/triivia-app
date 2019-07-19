<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'default' }" class="navbar-brand">
              TriviaApp
            </router-link>
          </li>
          <li class="nav-item active">
            <router-link :to="{ name: 'chuck' }" class="navbar-brand">
              Chuck
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>