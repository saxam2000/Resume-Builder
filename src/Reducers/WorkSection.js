let jobState={
    JTIT:"",
    JSTA:"",
    JSTD:"",
    EDDT:"",
    JDES:"",
    JCIT:"",
    CPNAME:"",
}
let initialState={
    workHistories:[{id:0,...jobState}]
}
function WorkSection(state=initialState,action){
    console.log("workSection");
    switch(action.type){
        case "addwork":return {...state,workHistories:[...state.workHistories,{id:state.workHistories.length,...jobState}]};
        default:return state;
    }
}
export default WorkSection;