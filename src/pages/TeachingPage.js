import IndexHeader from '../components/IndexHeader';
import TeachingCard from '../components/TeachingCard';
import './TeachingPage.css';
import { teaching } from '../data/teaching/teaching';
const TeachingPage = () =>{
    return(
        <div className='page-container'>
           <IndexHeader title1="Teaching" title2={"Experience"}/>
           <ul>
            {
              teaching.map(t=>(
                <li>
                <TeachingCard
                    courseName={"Software Project"}
                    position={t.position}
                    organization={t.institution}
                    date={t.duration}
                />
                </li>
              ))
            }
           </ul>
        </div>
    );
}

export default TeachingPage;