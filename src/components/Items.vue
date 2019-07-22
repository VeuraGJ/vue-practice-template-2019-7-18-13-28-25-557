<template>
  <div class="Items">
    <ul class="taskList">
        <li v-for="(item,index) in todoList" :key="item.id">
           {{index+1}}.
          <p><input type="checkbox" :checked="item.check" @change="checkBoxChange(item.id)">
          <span :class="{cboxActive:item.check}"  @dblclick="modifyItem(index)"
          v-if="!item.inputShow">{{item.text}}</span>
         <input type="text" v-else
                 class="newInput"
                 @keyup.enter="enterClick()"
                 v-model="newInput">
          </p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data(){
    return {
        newInput:''
    }
  },
  computed:{
     todoList(){
       switch(this.$store.state.activeKind){
        case 'Active':
           return this.$store.state.todoList.filter(item => !item.check);
        case 'Complete':
           return this.$store.state.todoList.filter(item => item.check);
        default:
           return this.$store.state.todoList;
       }
      }
  },
  methods:{
     checkBoxChange(index){
      this.$store.commit('CHANGE_ITEM_CHECK',index)
    },
    modifyItem(index){
      this.newInput = this.todoList[index].text;
      this.$store.commit('MODITY_ITEM',index)
    },
    enterClick(){
      this.$store.commit('ENTER_CLICK',this.newInput)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
