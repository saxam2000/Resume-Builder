import React from 'react';
import {fieldCd} from '../constants/typeCodes'
function ResumePreview(props){
    // props.contact ??
    // {FNAM:"SUShant"}
    // console.log('Resume Preview');
    const ContactKeyToVal=(key, valToAppend)=>{
        // FNAM , " "
        if(props.ContactSection){
          return props.ContactSection[key] ? props.ContactSection[key] + (valToAppend ? valToAppend : '') : ''; //Sushant 
        }
        return '';
    }

    const EducationKeyToVal=(key, valToAppend)=>{
        if(props.EducationSection){
          return props.EducationSection[key]?props.EducationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }
    
    return (
        <div className={props.skinCd + " resume-preview "}style={{width:"45vw"}}>

                <div className={'name-section'}>
                <p className="heading bold">CONTACT DETAILS</p>
                    <p className={'center contact-name text-upper' }> {ContactKeyToVal(fieldCd.FirstName,' ')  + ContactKeyToVal(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{ContactKeyToVal(fieldCd.City,', ') + ContactKeyToVal(fieldCd.State,', ') +  ContactKeyToVal(fieldCd.Country,', ') + ContactKeyToVal(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{ContactKeyToVal(fieldCd.Email ) }</p>
                    <p className={'center'}>{ContactKeyToVal(fieldCd.Phone) } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{ContactKeyToVal(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'EducationSection text-upper'}>                   
                    <p className="heading bold">EDUCATIONAL DETAILS</p>
                     <div className={'divider'}></div>
                     {/* <p>{EducationKeyToVal(fieldCd.SchoolName)}</p> */}
                     <p>{EducationKeyToVal(fieldCd.CollegeName)}</p>
                     <p>{EducationKeyToVal(fieldCd.Degree)}</p>
                     <p>{EducationKeyToVal(fieldCd.City)}</p>
                     <p>{EducationKeyToVal(fieldCd.GraduationCGPA)}</p>
                     <p>{EducationKeyToVal(fieldCd.GraduationDate)}</p>
                     <p>{EducationKeyToVal(fieldCd.GraduationYear)}</p>
                </div>
            </div>
        )
    }
export default ResumePreview;