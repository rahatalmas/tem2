import './PublicationCard.css';

const PublicationCard = ({title,platform,date,doi,contributor,description,impact}) =>{
    return(
        <div className='publication-card'>
           <div className='p-image-n-info'>
              <div className='p-img-container'>
                  <img src='./assets/python.png' alt='Publication Image' className='p-img'/>
              </div>
              <div className='p-short-info'>
                  <h1 className='p-title'>{title}</h1>
                  <p className='p-para'><span className='p-atr'>Platform: </span>{platform}</p>
                  <p className='p-para'><span className='p-atr'>Publication Date: </span>{date}</p>
                  <p className='p-para'><span className='p-atr'>Doi: </span>{doi}</p>
                  <p className='p-para'><span className='p-atr'>Contributor: </span>{contributor}</p>
              </div>
           </div> 
           {/*<div className='p-c-details'>
           </div>*/}
        </div>
    );
}

export default PublicationCard;