import IndexHeader from '../components/IndexHeader';
import '../pages/Home.css';
import CourseCard from '../components/CourseCard.js';
import EducationCard from '../components/EducationCard.js';
import { courses } from '../data/Home/onlinecourses.js';
import { education } from '../data/Home/education.js';
const Home = () => {

    return(
       <div className='home-container'>
          <IndexHeader title1="About" title2="Me"/>
          <p className='h-p'>
            <span className='h-s'>Aspiring Scientist Aspiring Scientist | AI & Data Enthusiast | Computer Science GraduateAspiring Scientist </span>
          </p>
          <p className='h-p'>
          I am Tariqul Islam, a passionate and driven individual from Narayanganj, Bangladesh, with a deep-rooted love for science and technology. My journey in the world of computer science began with a Bachelor’s degree in Computer Science and Engineering from Daffodil International University, where I immersed myself in the captivating field of machine learning. From a young age, I've been fascinated by how machines can learn and evolve, and this curiosity has shaped my academic and professional pursuits.
          Throughout my academic career, I've been fortunate to work on some truly exciting projects. One that stands out is my thesis on "Salinity-Resilient Crop Health Monitoring," where I explored the application of machine learning to agriculture, particularly focusing on disease detection in Luffa Aegyptiaca leaves. It was a project that combined my love for technology with a desire to make a tangible difference in people's lives, especially in regions like ours that are often hit hard by climate change. My work experience has been equally fulfilling. At HyperTag Solution Ltd., I had the opportunity to dive deep into practical machine learning applications, developing predictive models and handling real-world datasets. This hands-on experience has not only solidified my technical skills but also fueled my enthusiasm for applying machine learning to solve real-world problems. 
          </p>
          <p>
            <span className='research-interest'>Research Interest: </span>
            <span className='r-i-keys'>Casual Learning, </span>
            <span className='r-i-keys'>Deep Learning, </span>
            <span className='r-i-keys'>Health Learning in AI, </span>
            <span className='r-i-keys'>Supervised Learning</span>
          </p>
          { 
            /*
             education
           */
          }
          <IndexHeader title1={"Eduction"}/>
          {
            education.map(edu=>(
              <EducationCard
                 institute={edu.institution}
                 degree={edu.degree}
                 result={edu.cgpa}
                 totalcredit={edu.totalCredit}
                 position={edu.duration}
                 data={edu}      
              />
            ))
          }
          
          <IndexHeader title1={"Online"} title2={"Courses"}/>
          <div className='course-sec'>
              {
                courses.map(course=>(
                  <CourseCard
                    courseImage={course.images[0]}
                    courseTitle={course.title}
                    institution={course.institution}
                    courseGrade={course.finalGrade}
                    data={course}
                    />
                ))
              }
          </div>
       </div>
    );
} 

export default Home;