import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM_CHECK = 'CHANGE_ITEM_CHECK'
export const MODITY_ITEM = 'MODITY_ITEM'
export const ENTER_CLICK = 'ENTER_CLICK'
export const FILTER_ITEM = 'FILTER_ITEM'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    todoList:[
      {id:0,check:false,text:123,inputShow:false},
      {id:1,check:false,text:456,inputShow:false},
      {id:2,check:false,text:789,inputShow:false}
      ],
    activeKind: 'All' 
  },
  mutations:{
    [ADD_ITEM](state,text){
      const length =state.todoList.length;
      const item ={
        id:length,
        check:false,
        text: text,
        inputShow:false
      }
      state.todoList.push(item);
    },
    CHANGE_ITEM_CHECK(state,index){
      state.todoList[index].check = !state.todoList[index].check;
    },
    MODITY_ITEM(state,index){
      if(!state.todoList[index].check){
      state.todoList[index].inputShow = !state.todoList[index].inputShow;
      }
    },
    ENTER_CLICK(state,updateItem){
      console.log(updateItem);
      state.todoList.filter(item => item.id === updateItem.id)[0].text = updateItem.content;
    },
    FILTER_ITEM(state,activeKind){
      state.activeKind = activeKind;
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
