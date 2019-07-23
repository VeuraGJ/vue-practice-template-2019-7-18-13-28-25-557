<template>
  <div class="todoItem">
        <li>
           {{item.id}}.
          <input type="checkbox" :checked="item.check" @change="checkBoxChange(item.id)">
          <span :class="{cboxActive:item.check}"  @dblclick="modifyItem()"
          v-if="!ediable">{{item.text}}</span>
         <input type="text" v-else
                 class="newInput"
                 @keyup.enter="enterClick(item.id)"
                 v-model="content">
        </li>
  </div>
</template>

<script>
export default {
  name: 'todoItem',
  props:{
    item:Object
  },
  data(){
    return {
        content:'',
        ediable:false,
    }
  },
  methods:{
     checkBoxChange(index){
      this.$store.commit('CHANGE_ITEM_CHECK',index)
    },
    modifyItem(){
      this.ediable = true;
      this.content = this.item.text;
    },
    enterClick(index){
      this.$store.commit('ENTER_CLICK',{id:index,content:this.content})
      this.ediable = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
