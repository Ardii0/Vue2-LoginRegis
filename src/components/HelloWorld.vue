<template>
  <div class="hello" style="text-align: center;">
    <h1>Belajar Membuat Login Register</h1>
    <div v-if="loggedIn !== null">
      <h1 v-if="userRole === 'admin'">Login Sebagai : Admin</h1>
      <h1 v-if="userRole === 'user'">Login Sebagai  : User</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    loggedIn() {
      return JSON.parse(localStorage.getItem("USER_DATA"));
    },
    userRole() {
      return JSON.parse(localStorage.getItem("USER_DATA")).role;
    },
  },
}
</script>