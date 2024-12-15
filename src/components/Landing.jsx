import React from "react";
import Logo from "../assets/datologo.png";

const Landing = () => {
  const description = `At Datos Biblio Inc, we specialize in collecting, analyzing, and providing valuable data to help businesses make informed, strategic decisions. Whether you're looking to optimize operations, understand customer behaviors, or unlock new growth opportunities, our comprehensive data solutions are tailored to meet your unique needs. We transform raw data into actionable insights that drive success.`;

  const description2 = `Founded in 2021, Datos Biblio Inc began with a simple mission: to bridge the gap between businesses and the vast potential of data. As the demand for intelligent, data-driven decisions grew, we recognized the need for reliable, high-quality data services. Our journey started with a small team of data enthusiasts who believed that the right insights could shape the future of any business. Today, we’ve grown into a trusted partner for companies across various industries, providing them with the data and tools they need to stay competitive in an evolving market.`;

  return (
    <div className="bg-white text-zinc-700 flex flex-col items-center justify-center w-full h-full ">
      <div className="flex flex-row items-center justify-center bg-gray-200 w-full">
        <img src={Logo} alt="Logo" className="h-32 w-auto" />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-500 px-6 py-4 gap-4">
        <p className="text-black italic text-lg font-bold mt-2">
          Empowering Decisions with data driven insights
        </p>

        <div className="flex flex-row items-start justify-start w-full">
          <div className="flex flex-col items-center p-4 justify-center shadow-md bg-white text-slate-700 rounded-md w-[40%] h-[250px]">
            <p className="text-2xl font-bold">About Us</p>
            <p className="text-md text-center">{description}</p>
          </div>
        </div>

        <div className="flex flex-row items-start justify-end w-full">
          <div className="flex flex-col items-center p-4 justify-center shadow-md bg-white text-slate-700 rounded-md w-[40%] h-[250px]">
            <p className="text-2xl font-bold">History</p>
            <p className="text-md text-center">{description2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
