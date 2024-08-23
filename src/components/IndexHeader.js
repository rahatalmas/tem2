import '../components/IndexHeader.css';

const IndexHeader = ({icon,title1,title2})=>{
    return(
        <div className='index-header-container'>
           <div className='icon-n-header'>
              <h1 className='header-title'>{title1}</h1><h1 className='header-title-p2'>{title2}</h1>
           </div>
        </div>
    );
}

export default IndexHeader;