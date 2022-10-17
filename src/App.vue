<template>
  <div id="App">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">LogRes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li v-if="loggedIn !== null" class="nav-item">
              <a class="nav-link" href="/link">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a v-if="userRole === 'admin'" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Kendaraan
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/mobil">Mobil</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <a href="/login" v-if="loggedIn === null" class="btn btn-outline-success my-2 my-sm-0">
              Log In
            </a>
            <a href="/" v-if="loggedIn !== null" @click="logout" class="btn btn-outline-success my-2 my-sm-0">
              Log Out
            </a>
          </form>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    loggedIn() {
      return JSON.parse(localStorage.getItem("USER_DATA"));
    },
    userRole() {
      return localStorage.getItem("role");
    },
  },
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>