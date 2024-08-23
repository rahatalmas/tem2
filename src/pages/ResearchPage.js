import ConferenceCard from '../components/ConferenceCard';
import DataCollectionCard from '../components/DataCollectionCard';
import IndexHeader from '../components/IndexHeader';
import PublicationCard from '../components/PublicationCard';
import ThesisCard from '../components/ThesisCard';
import './ResearchPage.css';

const ResearchPage = () =>{

    const dataCollection = [
      {
         title: "Climate Change and Maternal Health Research Project",
         organization: "Faculty of Graduate Studies (FGS), DIU",
         stakeholders: "UKAID, ARA",
         date: "10/08/2023 – 20/08/2023",
         location: "Shatkhira (Koyra, Gabura, Uttar Bedkashi, Dokkhin Bedkashi), Ashuliya, Dhaka, Bangladesh",
         email: "khalid.fgs@diu.edu.bd",
         description: "Contributed to a research project funded by UKAID and ARA, led by the Faculty of Graduate Studies at DIU. Collected crucial health data (height, weight, blood pressure) from expectant mothers to assess the impact of climate change on maternal health. Engaged with local NGOs to gather additional insights.",
         achievements: "Collected vital health data, essential for evaluating climate change impacts on maternal health. Enhanced understanding of climate change implications for vulnerable populations through community engagement.",
         Skills:"Data collection, health metrics recording, community engagement, research ethics, teamwork."
      }
    ]

    const thesisDetails = {
        thesisTitle: "Salinity-Resilient Crop Health Monitoring: Automated Disease Detection in Luffa Aegyptiaca Leaves using Vision Transformer & CNN",
        abstract: "Leveraged advanced deep learning techniques to automate disease detection in Luffa Aegyptiaca leaves. Collected and categorized images of leaves infected with Cucumber Mosaic Virus, Downey Mildew, and Leaf Spot. Achieved high accuracy with both CNN and Vision Transformer models.",
        keyContributions: {
          visionTransformerAccuracy: "99.85%",
          cnnAccuracy: "98.32%",
          impact: "Demonstrated the potential of deep learning models in automating disease detection in agricultural crops, particularly in saline-affected coastal regions."
        },
        skillsGained: {
          technicalSkills: ["Vision Transformer", "Convolutional Neural Network (CNN)", "Google Colab"],
          researchSkills: ["Image collection and categorization", "Model training and evaluation"],
          projectManagement: ["Data management", "Cloud computing", "Collaborative research"]
        }
      };
    
    const publication = {
      title:"Luffa Aegyptiaca (Sponge Gourd) Leaf Diseases Dataset",
      platform: "Mendeley Data",
      date: "July 17, 2024",
      DOI: "10.17632/nym8bw5hr6.4",
      contributor:"Md Tariqul Islam",
      description: "This dataset offers an extensive collection of hi"
    }  

    const conference = [
      {
        name:"Regional Conference on Climae Action & Foods System Transformation in South Asia",
        date:"16/04/2024-18/4/2024",
        location:"Intercontinental Dhaka"
      },
      {
        name:"1st South Asian Conference | Unfold Emerging Issues in the context of Changing Climatic Scenario",
        date:"24/11/23-26/11/23",
        location:"Dhaka University"
      },
      {
        name:"15th Association of Universities of Asia and the Pacific General Conference 2022",
        date:"01/10/22-20/11/22",
        location:"DIU Smart City & Raddison Blu"
      }
    ]

    return(
        <div className='page-container'>
           <IndexHeader title1="Thesis"/>
           <div className='thesis-container'>
              <ThesisCard 
               thesis={thesisDetails}
              />
           </div>

           <IndexHeader title1="Data" title2="Collection"/>
           <div className='dataCollection-container'>
               <DataCollectionCard
                 title={dataCollection[0].title}
                 organization={dataCollection[0].organization}
                 date={dataCollection[0].date}
                 stakeholders={dataCollection[0].stakeholders}
                 email={dataCollection[0].email}
                 location={dataCollection[0].location}
               />
                <DataCollectionCard
                 title={dataCollection[0].title}
                 organization={dataCollection[0].organization}
                 date={dataCollection[0].date}
                 stakeholders={dataCollection[0].stakeholders}
                 email={dataCollection[0].email}
                 location={dataCollection[0].location}
               />
           </div>

           <IndexHeader title1="Conference"/>
           <div className='conference-container'>
               <ul>
               {
                conference.map(con=>(
                  <li>
                    <ConferenceCard
                     name={con.name}
                     date={con.date}
                     location={con.location}
                  />
                  </li>
                ))
               }
               </ul>
           </div>

           <IndexHeader title1="Publication"/>
           <div className='publication-container'>
               <PublicationCard
                 title={publication.title}
                 platform={publication.platform}
                 date={publication.date}
                 doi={publication.DOI}
                 contributor={publication.contributor}
                 description={publication.description}
               />
           </div>
        </div>
    );
}

export default ResearchPage;