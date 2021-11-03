import React from 'react'
import "../html/css/templat1.css"
import {fieldCd} from '../constants/typeCodes'
import { connect } from 'react-redux';

function SamplePreview(props) {
    const ContactKeyToVal=(key, valToAppend)=>{

        if(props.ContactSection){
          return props.ContactSection[key] ? props.ContactSection[key] + (valToAppend ? valToAppend : '') : ''; 
        }
        return '';
    }

    const getWorkHistory=(key,id, valToAppend)=>{
        // console.log("came");
        // console.log(props.WorkSection);
        if(props.WorkSection){
            // console.log(props.WorkSection);
          return props.WorkSection.workHistories[id][key]?props.WorkSection.workHistories[id][key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    const EducationKeyToVal=(key,id, valToAppend)=>{
        if(props.EducationSection){
          return props.EducationSection.EducationHistories[id][key]?props.EducationSection.EducationHistories[id][key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    
    console.log(props);
    return (
        <div>
            <div className="outer-container">
            <div className="container">
        <div className="left_Side">
            <div className="profiletext">
                <div className="imgbx">
                    <img src="images/Pierre-Person.jpg" alt=""/>
                </div>
                <h2>{ContactKeyToVal(fieldCd.FirstName,' ')  + ContactKeyToVal(fieldCd.LastName)}<br/><span>Web Developer</span></h2>
            </div>

            <div className="contactinfo">
                <h3 className="title">Contact Info</h3>
                <ul>
                    <li>
                        <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                        <span className="text">+91{ContactKeyToVal(fieldCd.Phone) }</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                        <span className="text">{ContactKeyToVal(fieldCd.Email ) }</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i></span>
                        <span className="text">www.mywebsite.com</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-linkedin" aria-hidden="true"></i></span>
                        <span className="text">{ContactKeyToVal(fieldCd.linkedIn)}</span>
                    </li>
                    <li>
                        <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span className="text">{ContactKeyToVal(fieldCd.City,', ') + ContactKeyToVal(fieldCd.State,', ') +  ContactKeyToVal(fieldCd.Country,', ') + ContactKeyToVal(fieldCd.ZipCode,', ')}</span>
                    </li>
                </ul>
            </div>

            <div className="contactinfo education">
                <h3 className="title">Education</h3>
                <ul>
                    {props.EducationSection.EducationHistories.map(education=>{return(
                        <li key={education.id}>
                        <h5>{EducationKeyToVal(fieldCd.CollegeAdmission,education.id)}-{EducationKeyToVal(fieldCd.GraduationDate,education.id)}</h5>
                        <h4>{EducationKeyToVal(fieldCd.Degree,education.id)}</h4>
                        <h4>{EducationKeyToVal(fieldCd.CollegeName,education.id)}</h4>
                        <h4>{EducationKeyToVal(fieldCd.CollegeBoard,education.id)}</h4>
                    </li>
                    )})}
                    {/* <li>
                        <h5>2010-2013</h5>
                        <h4>Master Degree in Computer Science</h4>
                        <h4>University Name</h4>
                    </li>
                    <li>
                        <h5>2007-2010</h5>
                        <h4>Bachelor Degree in Computer Science</h4>
                        <h4>University Name</h4>
                    </li>
                    <li>
                        <h5>1997-2007</h5>
                        <h4>Matriculation</h4>
                        <h4>University Name</h4>
                    </li> */}
                </ul>
            </div>

            <div className="contactinfo languag">
                <h3 className="title">Languages</h3>
                <ul>
                    <li>
                        <span className="text">English</span>
                        <span className="percent">
                            <div style={{width:"90%"}}></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Spanish</span>
                        <span className="percent">
                            <div style={{width:"48%"}}></div>
                        </span>
                    </li>
                    <li>
                        <span className="text">Hindi</span>
                        <span className="percent">
                            <div style={{width:"95%"}}></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="right_Side">


            <div className="about">
                <h2 className="title2">Profile</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sed corrupti quia eveniet in odio
                    cupiditate recusandae ipsam esse, maiores repudiandae quisquam voluptatibus illum eligendi
                    molestiae, id voluptas illo laborum.</p>
            </div>
            <div className="about">
                <h2 className="title2">Experience</h2>
                {props?.WorkSection?.workHistories.map(work =>
                (
                    
<div className="box" key={work.id}>
                    <div className="year_company">
                        <h5>{getWorkHistory(fieldCd.JobStartDate,work.id)}-{getWorkHistory(fieldCd.JobEndDate,work.id)}</h5>
                        <h5>{getWorkHistory(fieldCd.CompanyName,work.id)}</h5>
                    </div>
                    <div className="text">
                        <h4>{getWorkHistory(fieldCd.JobTitle,work.id)}</h4>
                        <p>{getWorkHistory(fieldCd.JobDescription,work.id)}</p>     
                    </div>
                </div>
                )
            )}

                
            </div>

            <div className="about skills">
                <h2 className="title2">Professional Skills</h2>
                <div className="box">
                    <h4>Html</h4>
                    <div className="percent">
                        <div style={{width:"95%"}}></div>
                    </div>
                </div>
                <div className="box">
                    <h4>CSS</h4>
                    <div className="percent">
                        <div style={{width:"70%"}}></div>
                    </div>
                </div>
                <div className="box">
                    <h4>JavaScript</h4>
                    <div className="percent">
                        <div style={{width:"90%"}}></div>
                    </div>
                </div>
                <div className="box">
                    <h4>Photoshop</h4>
                    <div className="percent">
                        <div style={{width:"75%"}}></div>
                    </div>
                </div>
                <div className="box">
                    <h4>Adobe XD</h4>
                    <div className="percent">
                        <div style={{width:"98%"}}></div>
                    </div>
                </div>
            </div>

            <div className="about interest">
                <h2 className="title2">Interest</h2>
                <ul>
                    <li>Gaming</li>
                    <li>Singing</li>
                    <li>Reading</li>
                    <li>Cooking</li>
                </ul>   
            </div>
        </div>
    </div>
    </div>
        </div>
    )
}
const mapStateToProps=(store)=>{
    return store;
}

export default connect(mapStateToProps)(SamplePreview)
// export default SamplePreview
