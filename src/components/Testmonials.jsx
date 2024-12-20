import React from "react";
import Bramerz from '../assets/bramerz.webp'
import Cheetay from '../assets/cheetay.png'
import Nrtc from '../assets/nrtc.png'
import nestle from '../assets/nestle.png'
import commerce from '../assets/commerce.jpg'
import star from '../assets/star.png'

const Testmonials = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black w-full h-[79vh] py-2 gap-4">
      <p className="text-3xl font-extrabold">Our Clients</p>
      <p className="w-[50%] text-lg italic text-center">
        Our rich history with our client go back to 2021. We started collecting
        data in a traditional way but later on as our portfolio became diverse
        new and improved data collection was implemented. From sources such as
        digital marketing, lead generation, PPC records and interviews.
        <br />
         We collect and inform data for industries stretching from FMCG,
        Agencies, B2B, B2C to Government authorities such as Ministry of
        Commerce. We strictly follow the privacy and compliance guidelines and
        protect the data
      </p>
      <div className="flex flex-row justify-between w-full items-center px-10 mt-6">
        <img src={Bramerz} alt="Bramerz" className="h-28 w-auto" />
        <img src={star} alt="Starcom" className="h-28 w-auto" />
        <img src={nestle} alt="Nestle" className="h-28 w-auto" />
        <img src={Cheetay} alt="Cheetay" className="h-16 w-auto" />
        <img src={Nrtc} alt="NRTC" className="h-36 w-auto" />
        <img src={commerce} alt="Commerce" className="h-28 w-auto" />
      </div>
    </div>
  );
};

export default Testmonials;
