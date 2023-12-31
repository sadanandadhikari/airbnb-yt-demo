import React from "react";
import Image from "next/image";
const Banner = (): JSX.Element => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2x:h-[700px]">
      <Image src="https://links.papareact.com/0fm" alt="banner" layout="fill" />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm text-black sm:text-lg">
          {" "}
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
