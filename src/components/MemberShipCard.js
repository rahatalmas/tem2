import './MemberShipCard.css';

const MemberShipCard = ({name,date,position}) =>{
    return(
        <div className='membership-card'>
          <h1 className='mem-title'>{name}</h1>
          <p className='mem-location'>{position}</p>
          <p className='mem-para'>{date}</p>
        </div>
    );
}

export default MemberShipCard;