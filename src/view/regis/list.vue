<template>
  <div class="hello">
      <h1>{{msg}}</h1>
  <h2 v-for="item in detail">
    {{ item.id }}|| {{ item.firstname }}|| {{ item.surname }}
     ||   <router-link :to="{name: 'editRegis', params: {id: item.id}}" class="btn btn-xs btn-default">
                            Edit
                        </router-link>
     ||
    <button class="btn btn-danger" @click.prevent="deletePost(item.id)">Delete</button>
    <hr>
  </h2>
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

  ,mounted () {
    let uri ='http://localhost/regis/public/api/regis/list';
    axios
      .get(uri)
      .then(response => (
         this.detail=response.data
        ))
  },methods:{
      deletePost(id){
        alert(id);
        let uri = 'http://localhost/regis/public/api/regis/del/'+id;
        axios
         .delete(uri)
         .then(response => {
          this.msg=response.data
        });
      }
  }
}
</script>
