<template>
  <div>
    <h1>Test {{msg}}</h1>
    <hr>
    {{detail}}
    <hr>
    <ListProvince/>
    <list-province/>
  </div>
</template>
<script>
import ListProvince from '@/components/ListProvince'
import axios from 'axios'
export default{
  data(){
    return {
      msg:'test data',
      detail:''
    }
  },
  components:{
    ListProvince
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (
        this.detail=response.data
        ))
  },

}
</script>
