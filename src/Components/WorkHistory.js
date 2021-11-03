import React from "react";



import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import SamplePreview from "./SamplePreview";

function WorkHistory(props) {
  let history = useHistory();
  const [WorkHistory, setWorkHistory] = useState(props.WorkSection);
console.log(props);
  const onChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;
    setWorkHistory({ ...WorkHistory, [key]: val });
    props.updateKey(key, val);
  };
  const getValue = (key) => {
    return WorkHistory[key];
  };




  let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };


const  addjob=()=>{
console.log("button");
props.addwork();
}

  return (
    <div>
        <h1>work Section</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "50%",
          }}
          className="WorkHistoryHtmlForm"
        >
          <div className="JobTitleAndCompanyName">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobTitle)}
              name={fieldCd.JobTitle}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobTitle"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.CompanyName)}
              name={fieldCd.CompanyName}
              onChange={(e) => onChange(e)}
              label="CompanyName"
              variant="outlined"
            />
          </div>
          <div className="CompanyCityAndState">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobState)}
              name={fieldCd.JobState}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobState"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobCity)}
              name={fieldCd.JobCity}
              onChange={(e) => onChange(e)}
              label="JobCity"
              variant="outlined"
            />
          </div>

          <div className="JobStartAndEndTime">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.JobEndDate)}
              name={fieldCd.JobEndDate}
              sx={{
                width: "15rem",
                marginBottom: "2px",

                margin: "3px 1rem 0 0",
              }}
              onChange={(e) => onChange(e)}
              label="JobEndDate"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              sx={{
                width: "14rem",
                marginBottom: "2px",

                margin: "3px 0rem 0 0",
              }}
              value={getValue(fieldCd.JobStartDate)}
              name={fieldCd.JobStartDate}
              onChange={(e) => onChange(e)}
              label="JobStartDate"
              variant="outlined"
            />
          </div>


          {/* for(let i=1;i<props.WorkSection.workHistories.length;i++){    
          } */}
          <button onClick={()=>{
              console.log("add clicked")
              return addjob() }}>addJob</button>


        </div>
      </div>
    </div>
  );
}
let mapStateToProps = (store) => {
  return store;
};
let mapDispatchToProps = (dispatch) => {
    return {
        update:()=>dispatch({type:"abc"}),
        addwork:()=>dispatch({type:"addwork"}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistory);
