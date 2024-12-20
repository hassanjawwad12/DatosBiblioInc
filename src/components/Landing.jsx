import React from "react";
import Logo from "../assets/datologo.png";
import City from "../assets/cityB.jpg";
import City2 from "../assets/new.jpg";
import City3 from "../assets/new2.jpg";

const Landing = () => {
  const description = `DBI is a leading provider of data-driven solutions,
specializing in data collection, reselling, and
research services. Founded in Year 2021, we
operate at the intersection of technology,
analytics, and innovation, delivering actionable
insights to empower businesses, B2B and B2C
clients, and organizations.
Our mission is to transform raw data into
strategic assets, enabling smarter decisionmaking, enhanced efficiency, and market
leadership.`;

  const description2 = `Our vision is to become the most reliable company in data-driven innovation, transforming the world of data. We aim to create a future where data is seamlessly integrated into every decision, empowering businesses, governments, and communities to thrive through smarter, more sustainable solutions.`;
  
  const description3 = `At Datos Biblio Inc, our mission is to harness the power of data to deliver actionable insights and innovative solutions that drive growth, efficiency, and informed decision-making. We are determined to collect reliable data with integrity and precision, while upholding the standards of privacy and compliance. `;

  return (
    <div className="bg-white text-zinc-700 flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row items-center justify-center bg-gray-200 w-full">
        <img src={Logo} alt="Logo" className="h-32 w-auto" />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full bg-black px-6 py-4 gap-4">
        <p className="text-gray-50 italic text-lg font-bold mt-2">
          Empowering Decisions with data driven insights
        </p>
 
        <div className="flex flex-row items-start justify-between w-full mt-6 px-8">
        
          <div className="flex flex-col items-center p-4 gap-4 justify-center shadow-md bg-white text-gray-600 rounded-md w-[35%] h-[400px]">
            <p className="text-3xl font-bold">About Us</p>
            <p className="text-lg text-center">{description}</p>
          </div>
          <img src={City} alt="City" className="h-[400px] w-auto object-cover" />
          <img src={City2} alt="City" className="h-[400px] w-auto object-cover" />


        </div>

        <div className="flex flex-row items-start justify-between w-[80%] mt-6 px-8">

        <img src={City3} alt="City" className="h-[550px] w-auto object-cover" />

        <div className="flex flex-col gap-4 items-end justify-end w-[45%]">
          <div className="flex flex-col items-center p-4 justify-center shadow-md bg-white text-gray-600 rounded-md w-full h-[300px]">
            <p className="text-3xl font-bold">Vision</p>
            <p className="text-lg text-center">{description2}</p>
          </div>
          <div className="flex flex-col items-center p-4 justify-center shadow-md bg-white text-gray-600 rounded-md w-full h-[300px]">
            <p className="text-3xl font-bold">Mission</p>
            <p className="text-lg text-center">{description3}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
