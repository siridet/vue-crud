<template>
  <div>

   <input type="text" v-model="form.first_name"/>
<input type="text" v-model="form.last_name"/>
  </div>
</template>
<script>

import axios from 'axios'
export default{
  data(){
    return {

      msg:'Edit Member',
       form:{
        first_name: '',
        last_name: '',
          avatar: ''}

    }
  }
  ,mounted () {
    let uri ='https://reqres.in/api/users/2';
    axios
      .get(uri)
      .then(response => (
       // console.log(response.data.data.first_name)
         this.form=response.data.data
        ))
  },

}
</script>
