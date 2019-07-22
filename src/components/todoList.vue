<template>
  <div class="todoDiv">
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status</p>
    <addItem></addItem>
    <div>
      <Items></Items>
    </div>
    <filterItem></filterItem>
  </div>
</template>

<script>
import Items from './Items.vue'
import addItem from './addItem.vue'
import filterItem from './filterItem.vue'
export default {
  name: 'HelloWorld',
  components:{
    Items,
    addItem,
    filterItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
