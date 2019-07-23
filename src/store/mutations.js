export default{
    addItem(state,text){
        const length =state.todoList.length;
        const item ={
          id:length,
          check:false,
          content: text
        }
        state.todoList.push(item);
      },
     changeItem(state,newitem){
        console.log(newitem);
        const oldItem = state.todoList.find(item => item.id == newitem.id);
        oldItem.content = newitem.content;
        oldItem.check = newitem.check;
      },
      filterItem(state,activeKind){
        state.activeKind = activeKind;
      }
}