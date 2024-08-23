import './ConferecenCard.css';

const ConferenceCard = ({name,date,location}) =>{
    return (
        <div className='conference-card'>
          <h1 className='con-title'>{name}</h1>
          <p className='con-location'>{location}</p>
          <p className='con-para'>{date}</p>
        </div>
    );
}

export default ConferenceCard;