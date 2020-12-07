 export const reducer = (state,action) => {
  if (action.type === 'ADD'){
    const newPeople = [...state.people,{id:new Date().getTime().toString(),name:action.payload}];
    return {...state,people:newPeople,isOpenModal:true,modalContent:'Item Added !'}
  }
  if(action.type==="NOT_VALUE"){
    return {...state,isOpenModal:true,modalContent:'Please Enter Input !'}
  }
  if (action.type==="DELETE") {
    const newPeople = state.people.filter(person=>person.id!==action.payload)
    return {...state,people:newPeople,isOpenModal:true,modalContent:"Delete success"}
  }
  if(action.type ==='CLOSE_MODAL'){
    return {...state,isOpenModal:false}
  }
  return state;
}
