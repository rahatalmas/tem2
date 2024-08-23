import './DataCollectionCard.css';

const DataCollectionCard = ({title,organization,date,stakeholders,email,location}) =>{
    return (
        <div className='data-collection-card'>
            <div className='d-c-image-container'>
                <img className='d-c-img' alt='Data Collection Image' src='./assets/python.png'/>
            </div>
            <div className='d-c-info'>
               <h1 className='d-c-title'>{title}</h1>
               <p className='d-c-organization'>{organization} <span className='d-c-date'>{date} </span></p>
               <p className='d-c-para'><span className='d-c-location'>{location}</span></p>
               <p className='d-c-para'>{stakeholders}</p>
               <p className='d-c-email'>{email}</p>
            </div>
        </div>
    );
}

export default DataCollectionCard;