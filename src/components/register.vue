<template>
  <div class="kotak_login">
    <h4 class="tulisan_login">Register</h4>
    <form>
      <label>Username</label>
      <input type="text" v-model="username" class="form_login" placeholder="Username"
        autocomplete="off" />
      <label>Password</label>
      <input type="password" v-model="password" class="form_login" placeholder="Password.." />
      <button type="submit" class="btn btn-primary poll" @click="register">Register</button>
    </form>
    <p class="f00ter">
      <a href="/login" class="registerdonk">Login</a>
      <span class="notReg">Jika Telah Memiliki Akun</span>
    </p>
  </div>
</template>
<script >
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async register() {
      const payload = {
        username: this.username,
        password: this.password,
        role: "user",
      };
        const registrasi = await axios.post(
          "http://localhost:3000/users",
          payload
        );
        var convertToString = JSON.stringify(registrasi.data);
        localStorage.setItem("USER_DATA", convertToString);
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}
.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}
label {
  font-size: 11pt;
}
.kotak_login {
  border: 1px solid #232323;
  border-radius: 10%;
  width: 350px;
  background-color: white;
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
}
.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}
.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
.aa {
  border: 1px solid black;
  border-radius: 10px;
  background-color: aliceblue;
  margin-left: 50px;
  margin-right: 50px;
  padding: 5px;
  text-align: center;
}
.f00ter {
  text-align: end;
  margin-top: 20px;
  margin-bottom: -20px;
}
.f00ter a {
  text-decoration: none;
}
.registerdonk:hover {
  text-decoration: underline;
}
.poll {
  width: 100%;
}
.notReg {
  padding-left: 2px;
}
</style>