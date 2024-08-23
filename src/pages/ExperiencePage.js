import IndexHeader from '../components/IndexHeader';
import '../pages/ExperiencePage.css';
import TrainCard from '../components/TrainingCard.js';
import InternshipCard from '../components/InternShipCard.js';
import { internships} from '../data/experience/intern.js';
import { trainings } from '../data/experience/training.js';
const ExperiencePage = () =>{

    return (
        <div className='page-container'>
          <IndexHeader title1={"Internships"}/>
          <div className='internship-container'>
             <ul>
              {
                internships.map(int=>(
                  <li>
                    <InternshipCard
                      name={int.title}
                      position={int.company}
                      date={int.duration}
                      location={int.location}
                      data={int}
                    />
                  </li>
                ))
              }
             </ul>
            
          </div>
          <IndexHeader title1={"Training"}/>
          <div className='train-sec'>
            {
              trainings.map(training=>(
                <TrainCard
                   TrainTitle={training.title}
                   TrainDate={training.duration}
                   data={training}
                />
              ))
            }
          </div>
        </div>
    );
}

export default ExperiencePage;