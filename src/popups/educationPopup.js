import React from "react";


const EducationPopUp = ({popState,off,data}) => {
    const attr = []
    for (var key in data){
      attr.push(key)
    }
    return (
       <div className={popState?"DetailsdisplayOn":"DetailsdisplayOff"}>
          <div className="popUpContent">
            <div className="popUpHead">
                <h1 className="h1-px" onClick={off}>X</h1>
            </div>
            <div className="popUpMainContainer">
                <div className="popUpMain">
                      <div className="popUpImg">
                      <img src="./assets/Online Course- HTML.jpg" className="popUpContentImg" />
                      <div>
                        <div className="indicator-circle-container">
                            <div className="indicator-circle"></div>
                            <div className="indicator-circle"></div>
                            <div className="indicator-circle"></div>
                        </div>                 
                      </div>
                    </div>
                    <div className="popUpContentDetails">
                      <h1>{data.degree}</h1>
                      <p>{data.institution}</p>
                      <p>{data.duration}</p>
                      <p>Cgpa: {data.cgpa}</p>
                      <p>Total Credit: {data.totalCredit}</p>
                      <p>{data.merit}</p>
                      <p>{data.description}</p>

                    </div>
                </div>
               
                <div className="popUpLastRow">
                
                <div className="popUp-skills-container"> 
                          
                  </div>
                </div>
            </div>
          </div>

       </div>
    );
}

export default EducationPopUp;