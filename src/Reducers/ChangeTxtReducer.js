const changeTextReducers=(state='ff',action)=>{
    if(action.type==="CHANGE_TXT"){
        return action.value
    }
return state
}
export default changeTextReducers