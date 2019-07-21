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
          <p><input type="checkbox">
          <span>{{item.text}}</span>
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
        {id:0,check:false,text:123},
        {id:1,check:false,text:456},
        {id:2,check:false,text:789}
        ],
        activeKind:'All',
        inputItem:''
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
        id:this.toDoList.length+1,
        check:false,
        text:this.inputItem
      }
      this.toDoList.push(item);
      this.inputItem=''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding:0;
}
.todoDiv{
  border: 1px solid #ccc;
  width: 35%;
  margin: 0 auto;
  box-shadow: 5px 5px 5px #cccccc,
              5px -5px 5px #ccc,
              -5px 5px 5px #ccc,
              -5px -5px 5px #ccc;
  border-radius: 15px;
  text-align: left;
  padding: 10px 30px;
}
input[type='text']{
    width: 70%;
    height: 30px;
    margin-right: 5px;
    border: 1px solid #b6aeae;
}
.todoDiv form >button{
    background-color: rgb(252,153,154);
    border-radius: 7px;
    font-size: 1.2rem;
    padding: 5px;
    color: #fff;
    width: 20%;
    border: 1px solid rgb(252,153,154);
}
ul{
  list-style: none;
}
.listKind{
  cursor: pointer;
  margin-left:150px;
}
.taskList li{
  height: 35px;
  font-size: 20px;
}
.taskList li p{
  margin:0;
  height: 30px;
 display:inline-block;
  width:80%;
}
.taskList li p span{
  vertical-align: middle;
}
input[type='checkbox']{
  vertical-align: middle;
  margin-right: 5px;
  width: 16px;
  height: 16px;
}
.taskList li:nth-child(even) p:first-child{
  background-color: #ffe9e9;
}
.listKind li{
  color: rgb(252,153,154);
  float: left;
  margin-right: 30px;
}
.listKind:after{
  content: '.';
  display: block;
  visibility: hidden;
  height: 0;
}
</style>
