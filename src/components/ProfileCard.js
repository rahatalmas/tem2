import '../components/ProfileCard.css';

const ProfileCard = () =>{
    return (
      <div className="profile-card-container">
         <div className='profile-card'>
            <div className='p-c-header'>
                <h1 className='p-h-1'>Tariqul Islam</h1> <button className='cv-btn'>Cv</button>
            </div>
            <div className='p-c-image-container'>
                <img className='p-c-image' src='./assets/Donuts.gif' alt='Profile Image'/>
            </div>
            <div className='p-c-details'>
                <h3>Research Interest</h3>
                <p><span>Machine Learning</span><span> | </span><span>Deep Learning</span></p>
            </div>
            <div className='main-btn-container'>
                <button className='mail-btn'>Send Email</button>
            </div>
         </div>
      </div>
    );
}

export default ProfileCard;