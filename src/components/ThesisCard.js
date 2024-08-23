import { useState } from 'react';
import './ThesisCard.css';

const ThesisCard = ({thesis,link}) =>{
    const [expand,setExpand] = useState(false);
    return(
        <div className='thesisCard-container'>
           <h1 className='thesis-title'>{thesis.thesisTitle}</h1>
           <p className='abstract'><span className='thesis-span'>Abstract: </span>{thesis.abstract}</p>
              <h3 >Key Contributions</h3>
              <ul>
                <li>VisionTransformerAccuracy: {thesis.keyContributions.visionTransformerAccuracy}</li>
                <li>cnnAccuracy: {thesis.keyContributions.cnnAccuracy}</li>
                <li>{thesis.keyContributions.impact} <span className='thesis-span-btn' onClick={()=>{
                  setExpand(!expand)
                }}> {expand?"Less":"See More"}</span></li>
              </ul>
              
              <div className={expand?'details-section-show':'details-section'}>
              <h3>Skills Gained</h3>
              <p>Technical Skills: {thesis.skillsGained.technicalSkills.map(skill=>(
                <span>{skill}, </span>
              ))}</p>
              <p>Research Skills: {thesis.skillsGained.researchSkills.map(skill=>(
                <span>{skill}, </span>
              ))}</p>
              <p>Technical Skills: {thesis.skillsGained.projectManagement.map(skill=>(
                <span>{skill}, </span>
              ))}</p>
           </div>
        </div>
    );
}

export default ThesisCard;