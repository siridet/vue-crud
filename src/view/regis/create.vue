<template>
  <div class="hello">
      <h1>{{pgname}}</h1>
      <h2>{{succ}}</h2>

      <hr>

      firstname : <input type="text" v-model="form.firstname"/><br>
      surname : <input type="text" v-model="form.surname"/><br>
<input type="button" value="Submit" v-on:click="addPost"/>




  </div>
</template>

<script>
//import FormMemberEdit from '@/components/FormMemberEdit'
import axios from 'axios'
export default {
  name: 'MemberEditxx',
  data(){
    return {
      pgname:'Regis Create',
      form :{},
      succ:''
  }
  },methods: {
      addPost(){
        let uri = 'http://localhost/regis/public/api/regis/create';
        axios.post(uri,this.form).then((response) => {
               (response.data=='success')?this.$router.push('list') :this.succ='error !' //<-ถ้าตรงนี้ =success ให้ redirect ไปที่ regis/list
            });
          //this.$router.push('list');
      },


    },
  //components:{
    //FormMemberEdit
  //}

}
</script>

