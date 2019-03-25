<template>
  <div class="hello">
      <h1>{{pgname}}</h1>
      <h2>{{succ}}</h2>

      <hr>
 <input type="hidden" v-model="form.id"/>
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
  }
  ,mounted() {

    let app = this;
            let id = app.$route.params.id;
            app.form.id = id;
             let uri = 'http://localhost/regis/public/api/regis/edit/'+id;
            axios.get(uri)
                .then(function (resp) {
                    app.form = resp.data;
                })
                .catch(function () {
                    alert("Could not load your company")
                });
        },
    methods: {
      addPost(){
        let uri = 'http://localhost/regis/public/api/regis/update';
        axios.post(uri,this.form).then((response) => {
              this.$router.push({name: 'regis_list'});
        });
      },


    },
  //components:{
    //FormMemberEdit
  //}

}
</script>

