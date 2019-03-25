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
