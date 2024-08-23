import './VolunterPage.css'
import IndexHeader from '../components/IndexHeader';
import { vdata } from '../data/volunteering/vdata.js';
import VolunterCard from '../components/VolunterCard.js';
const VolunterPage = () =>{
    return (
        <div className='page-container'>
          <IndexHeader title1={"Volunteer"}/>
          <div className='internship-container'>
             <ul>
              {
                vdata.map(v=>(
                  <li>
                    <VolunterCard
                    data={v}
                    />
                  </li>
                ))
              }
             </ul>
            
          </div>
        </div>
    );
}

export default VolunterPage;