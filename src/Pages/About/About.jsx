import React from 'react';
import FoundersBrandComponent from '../../Components/FoundersBrandComponent/FoundersBrandComponent';
import Networking101 from '../../Components/Networking101/Networking101';
import AIConnect from '../../Components/AI/Ai';
import EOMStoryComponent from '../../Components/EOMStoryComponent/EOMStoryComponent';
import PoweredByBestComponent from '../../Components/Investors/Investors';
import VentureEventsComponent from '../../Components/VentureEventsComponent/VentureEventsComponent';
import VenturePartnersComponent from '../../Components/VentureEventsComponent/VentureEventsComponent';
import MembershipPlans from '../../Components/MembershipPlans/MembershipPlans';
import EomRightForYou from '../../Components/EomRightForYou/EomRightForYou';
import { assets } from '../../assets/assets';

const About = () => {
  const imgsrc = assets.rob;
  
  return (
    <>
      <FoundersBrandComponent />
      <EOMStoryComponent/>
      <PoweredByBestComponent/>
      <VenturePartnersComponent/>
      <MembershipPlans/>
      <div className='  md:mt-52'>
        <AIConnect 
          heading={
            <>
              India's first AI-Driven Club <br /> For Entrepreneurs
            </>
          }
          imgsrc={imgsrc}
        />
      </div>
      <EomRightForYou/>
      <div className='-mt-32'>
      <Networking101 backgroundImage={assets.palace}/>
      </div>

     
    
    
    </>
  );
}

export default About;
