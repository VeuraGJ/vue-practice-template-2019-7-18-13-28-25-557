<template>
    <ul class="listKind">
      <li @click="filterItem('All')">ALL</li>
      <li @click="filterItem('Active')">Active</li>
      <li @click="filterItem('Complete')">Complete</li>
    </ul>
</template>

<script>
export default {
  name: 'HelloWorld',
 methods:{
    filterItem(activeKind){
      this.$store.commit('FILTER_ITEM',activeKind)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
