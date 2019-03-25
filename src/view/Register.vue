<template>
  <div class="hello">
      <h1>{{msg}}</h1>
<ul id="example-1">
  <li v-for="item in detail">
    {{ item.id }}
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
      form: {
        name:'aa',job:''
      }
    }
  }
  ,mounted () {
    let uri ='http://localhost/regis/public/api/test';
    axios
      .get(uri)
      .then(response => (
         this.detail = response.data
        ))
  }
}
</script>
