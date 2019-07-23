<template>
  <div class="addTodo">
    <form action="">
      <input type="text" v-model="inputItem">
      <button type="button" @click="addItem">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addTodo',
  data(){
      return{
           inputItem:'',
      }
  },
  methods:{
    addItem(){
      this.$store.commit('ADD_ITEM',this.inputItem);
      this.inputItem ='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
