
const intiState=[
    { "id": 0, "text": "item1" },

        { "id": 1, "text": "item2","undo":"text-undo" },
        { "id": 2, "text": "item3" }
]

const listtodoreducers=(state=intiState,action)=>{
    if (action.type==="add-todo")
{    
    return [...state,{"id":Math.random,"text":action.text,"undo":action.undo}]
}

return state
}


export default listtodoreducers