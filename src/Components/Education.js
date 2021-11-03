import React from 'react'
import {useEffect,useState} from "react";
import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import {connect} from "react-redux"


function Education(props) {
    const[Education,setEducation]=useState(props.EducationSection);
    console.log(props);
    const onChange=(e)=>{
        let key=e.target.name;
        let val=e.target.value;
        setEducation({...Education,[key]:val});
        props.updateKey(key,val);

    }
    const getValue=(key)=>{
        // if(Education && Education[key]){
        //     return Education[key]
        //   }
        //   return "";
        return Education[key];
    }
    let labelCss = { fontSize: "1rem", fontWeight: "bold", margin: "5px" };
    return (
        <div>
            <h1>this is Education Section </h1>

            <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "50%",
        }}
        className="EducationHtmlForm"
      >
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 0 1rem",
            alignItems: "flex-start",
          }}
          className="collegeName"
        >
          <label style={labelCss} htmlFor="College">
            College Name :
          </label>
          <TextField
            id="outlined-basic"
            name={fieldCd.CollegeName}
            value={getValue(fieldCd.CollegeName)}
            onChange={(e) => onChange(e)}
            sx={{
              height: "5ch",
              width: "30rem",
              size: "small",
            }}
            size="small"
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3px 0 3px 1rem",
            alignItems: "flex-start",
          }}
          className="DegreeAndCGPA"
        >
             <label style={labelCss} htmlFor="CollegeInfo">
            College Info :
          </label>
          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="DegreeAndCGPA">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.Degree)}
              sx={{
                width: "15rem",
                margin: "1px 1rem 0 0",
              }}
              name={fieldCd.Degree}
              onChange={(e) => onChange(e)}
              label="Degree"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationCGPA)}
              name={fieldCd.GraduationCGPA}
              onChange={(e) => onChange(e)}
              sx={{
                width: "14rem",
                // margin:"0 1rem 0 0"
              }}
              label="GraduationCGPA"
              variant="outlined"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3px 0 3px 1rem",
            alignItems: "flex-start",
          }}
          className="nameInput"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationYear)}
              sx={{
                width: "15rem",
                margin: "0 1rem 0 0",
              }}
              name={fieldCd.GraduationYear}
              onChange={(e) => onChange(e)}
              label="GraduationYear"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationDate)}
              name={fieldCd.GraduationDate}
              onChange={(e) => onChange(e)}
              sx={{
                width: "14rem",
                // margin:"0 1rem 0 0"
              }}
              label="GraduationDate"
              variant="outlined"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap:"",
            flexDirection: "column",
            margin: "3px 0 3px 1rem",
            alignItems: "flex-start",
          }}
          className="nameInput"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.CollegeCity)}
              sx={{
                width: "15rem",
                margin: "0 1rem 0 0",
              }}
              name={fieldCd.CollegeCity}
              onChange={(e) => onChange(e)}
              label="CollegeCity"
              variant="outlined"
            />
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.CollegeBoard)}
              name={fieldCd.CollegeBoard}
              onChange={(e) => onChange(e)}
              sx={{
                width: "14rem",
                // margin:"0 1rem 0 0"
              }}
              label="CollegeBoard"
              variant="outlined"
            />
          </div>
        </div>

          </div>

        </div>
    )
}
const mapStateToProps=(store)=>{
    return (store);
}
const mapDispatchToProps=(dispatch)=>{
    return {
        updateKey:(key,val)=>{
            console.log("dispatch",key,val);
            return dispatch({type:"UPDATEEDUCATIONKEY",payload:{key:key,val:val}})}
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( Education)
