import React from 'react';
import { assets } from '../../assets/assets';

const EOMStoryComponent = () => {
  return (
    <div className="max-w-full overflow-hidden mx-auto p-4 font-sans mt-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">The Story Of EOM</h2>
      <div className='hidden md:block absolute w-44 h-44 -left-16 bottom-28  '>
            <img src={assets.book} alt=''/>
        </div>
        <div className='hidden md:block absolute w-52 h-52 -right-16 top-0'>
            <img src={assets.group148} alt=''/>
        </div>
      {/* Responsive layout for placeholder and paragraph */}
      <div className="w-[90%] md:w-3/4 mx-auto mb-8 flex flex-col lg:flex-row items-center justify-center gap-8">
      
      {/* Image Section */}
<div className="bg-gray-200 rounded-2xl w-full lg:w-1/2 h-80 flex items-center justify-center overflow-hidden">
  <img 
    src={assets.about2} 
    alt="Description of the image" 
    className="w-full h-full object-cover"
  />
</div>


        {/* Paragraph section */}
        <p className="text-base text-black w-full lg:w-1/2">
          Every day, 80 startups launch in India—about 29,200 a year. But the tough reality: fewer than 10% make it past the five-year mark with any meaningful revenue.
          <br />
          <br />
          We observed the same in our Underdogs of Madras community. Passionate entrepreneurs who started strong reached a stalemate—not struggling to survive but struggling to grow. The excitement of starting up wore off, and suddenly, we found them questioning everything: their direction, their ability, their potential.
          <br />
          <br />
          “Even startups that reach Series A funding—around 35% of them—don’t make it to Series B,” says reports.
        </p>
      </div>

      {/* Full-width paragraph section */}
      <div className=" space-y-4 w-[90%] md:w-3/4 mx-auto">
        <p className="text-base text-black">
        So, it became clear that these growth-stage founders needed a different kind of support—mentorship, guidance, and real, honest conversations about the challenges of scaling. Not the fluffy motivational stuff, but actual, candid help to go from 10 to 100 from the messy middle. 
          <br />
          <br />
         <span className='font-bold'> That’s why we started Entrepreneurs of Madras Club</span>
          <br />
          <br />
          —to give those entrepreneurs a space to find the answers they need, ask the tough questions, and connect with others who understand exactly what they’re going through. Be it finance to hiring, marketing to operations, pitching to fundraising – all in one place.
          <br />
          <br />
          Built on the belief that together, we can push through the hardest part of entrepreneurship and build something truly lasting. 
        </p>
      </div>
    </div>
  );
};

export default EOMStoryComponent;
