import { useState } from 'react';
import '../components/CourseCard.css';
import '../pages/PopUpDetails'
import PopUpDetails from '../pages/PopUpDetails';
import CoursePopUp from '../popups/coursePopup';

const CourseCard = ({courseImage,courseTitle,courseGrade,institution,data}) =>{
  const [pop,setPop] = useState(false);
  const popUp = () =>{
     if(pop){
        document.body.style.overflow="scroll"
        setPop(!pop)
     }else{
        document.body.style.overflow="hidden"
        setPop(!pop)
     }
  }  
  
  return(
               <div className='course-card'>
                  <CoursePopUp popState={pop} off={popUp} data={data}/>
                  <div className='course-card-img-con'>
                     <img src={courseImage} className='course-card-img'/>
                  </div>
                   <div className='course-card-desc'>
                     <h1 className='course-sec-title'>{courseTitle}</h1>
                     <p className='course-sec-short'>{institution}</p>
                     <p className='course-sec-grade'>{courseGrade}</p>
                     <button className='course-btn' onClick={popUp} >Details</button>
                   </div>
               </div>
    );
}

export default CourseCard;