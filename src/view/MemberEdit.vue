<template>
  <div class="hello">
      <h1>{{msg}}</h1>

      <hr>
 <FormMemberEdit/>




  </div>
</template>

<script>
import FormMemberEdit from '@/components/FormMemberEdit'
import axios from 'axios'
export default {
  name: 'MemberEdit',
  data(){
    return {

      msg:'Edit Member',

  }},
  components:{
    FormMemberEdit
  }

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
