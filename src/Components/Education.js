import React from 'react'
import {useEffect,useState} from "react";
import TextField from "@mui/material/TextField";
import { fieldCd } from "../constants/typeCodes";
import {connect} from "react-redux"
import SamplePreview from "./SamplePreview"
import Preview from "./Preview"


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
<div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
  

            <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "70vh",
          width:"43vw"
        }}
        className="EducationHtmlForm"
      >
          <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 0 0 1rem",
            alignItems: "flex-start",
            width:"41vw"
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
              width: "92%",
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
            margin: "3% 0 3% 3%",
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
                width: "19vw",
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
                width: "17vw",
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
            margin: "3% 0 3% 3%",
            alignItems: "flex-start",
          }}
          className="graduationYearAndDate"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.GraduationYear)}
              sx={{
                width: "19vw",
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
                width: "17vw",
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
            margin: "3% 0 3% 3%",
            alignItems: "flex-start",
          }}
          className="CollegeCityAndCollegeBoard"
        >

          <div style={{display:"flex",flexDirection:"row",flexWrap:"nowrap"}} className="fnameAndLname">
            <TextField
              size="small"
              id="outlined-basic"
              value={getValue(fieldCd.CollegeCity)}
              sx={{
                width: "19vw",
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
                width: "17vw",
                // margin:"0 1rem 0 0"
              }}
              label="CollegeBoard"
              variant="outlined"
            />
          </div>
        </div>

          </div>
          {/* <SamplePreview ContactSection={props.ContactSection} EducationSection={props.EducationSection}></SamplePreview> */}
          <Preview ContactSection={props.ContactSection} EducationSection={props.EducationSection}></Preview>

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
