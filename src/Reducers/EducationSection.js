import React from "react";
let initialState = {
  CLG: "",
  DGRE: "",
  GRYR: "",
  GRDT: "",
  GRCG: "",
  CBOARD: "",
  CCITY: "",
};
function EducationSection(state = initialState, action) {
    console.log("education section")
    switch(action.type){
        case "UPDATEEDUCATIONKEY":
            // let {key,val}=action.payload
            let key=action.payload.key;
            let val=action.payload.val;
            console.log(key,val);
            return {...state,[key]:val};
        default:return state;
    }

}

export default EducationSection;
