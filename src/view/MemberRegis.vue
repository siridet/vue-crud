<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <input type="button" @click="callapi" value="ok"/>
      <hr>
      <form>
<input type="text" v-model="form.name"/>
<input type="text" v-model="form.job"/>
      </form>
      <ul id="example-1">
        <li  v-for="item in detail.data">
          {{ item.id }} ||  {{ item.first_name }}

        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MemberRegis',
  data () {
    return {
      msg: 'Regis Member',
      detail:'',
      form:{
        name:'aa',job:''
      }
    }
  }
  ,methods: {
    callapi: function () {
      let uri ='https://reqres.in/api/users';
        axios.post(uri,this.form).then((response) => {
               console.log(response);
            });
    }
  }
  ,mounted () {
    let uri ='https://reqres.in/api/users?page=2';
    axios
      .get(uri)
      .then(response => (
        this.detail=response.data
        ))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
