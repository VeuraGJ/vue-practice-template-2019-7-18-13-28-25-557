<template>
  <div class="todoDiv">
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status</p>
    <form action="">
      <input type="text" v-model="inputItem">
      <button type="button" @click="addItem">Add</button>
    </form>
    <div>
      <ul class="taskList">
        <li v-for="(item,index) in initTodoList" :key="index">
         {{index+1}}.
          <p><input type="checkbox" :checked="item.check" @change="checkBoxChange(index)">
          <span :class="{cboxActive:item.check}"  @dblclick="modifyItem(index)"
          v-if="!item.inputShow">{{item.text}}</span>
         <input type="text" v-else
                 class="newInput"
                 @keyup.enter="enterClick(index)"
                 v-model="newInput">
          </p>
        </li>
      </ul>
    </div>
    <ul class="listKind">
      <li @click="activeKind='All'">ALL</li>
      <li @click="activeKind='Active'">Active</li>
      <li @click="activeKind='Complete'">Complete</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      toDoList:[
        {check:false,text:123,inputShow:false},
        {check:false,text:456,inputShow:false},
        {check:false,text:789,inputShow:false}
        ],
        activeKind:'All',
        inputItem:'',
        cboxActive:false,
        newInput:''
    }
  },
 computed: {
    initTodoList() {
      switch (this.activeKind) {
        case 'All':
          return this.toDoList;
        case 'Active':
          return this.toDoList.filter(item => !item.check)
        case 'Complete':
          return this.toDoList.filter(item => item.check)
      }
    },
  },
  methods:{
    addItem(){
      const item ={
        check:false,
        text:this.inputItem,
        inputShow:false
      }
      this.toDoList.push(item);
      this.inputItem=''
    },
    checkBoxChange(index){
      this.toDoList[index].check = !this.toDoList[index].check
    },
    modifyItem(index){
      this.newInput= this.toDoList[index].text;
      this.toDoList[index].inputShow=true;
    },
    enterClick (index) {
      this.toDoList[index].text = this.newInput;
      this.toDoList[index].inputShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
