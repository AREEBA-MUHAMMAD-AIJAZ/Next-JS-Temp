import React from "react";

const PopularSec = () => {
  return (
    <div className="lg:px-10  lg:py-10 sm:px-5 sm:py-5">
      <div className="flex flex-col md:flex-row md:gap-2 justify-between  md:pr-10  md:pl-10 pb-5">
        <div className="flex gap-1 items-center px-8 py-4">
          <div className="bg-gray-900 w-4 h-4 rounded-full"></div>
          <h4 className="text-sm md:text-base">POPULAR</h4>
        </div>


        <div className="pr-4 sm:hidden md:hidden lg:block hidden ">
          <h4 className="text-sm md:text-base">TRENDING</h4>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-row justify-evenly text-lg md:text-xl px-1 md:px-6">
        <div className="lg:flex lg:flex-col md:hidden sm:hidden flex flex-col">
          <img src="/box.png" className="w-[350px] md:w-[400px] mb-2" />
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">
            Vision
          </h6>
          <h4 className="w-72 md:w-96 text-xl md:text-3xl ">
            A Box With a New Sheen Of Cool Top
          </h4>
          <hr className="border-black" />
        </div>
        <div className="flex flex-col ">
          <img src="/girls.png" className="w-[300px] md:w-[400px] mb-2" />
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">
            Source
          </h6>
          <h4 className="w-72 md:w-96 text-xl md:text-3xl ">
            The Greatest Book Read By Our Dads
          </h4>
          <hr className="border-black" />
        </div>
        <div className="flex flex-col">
          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            Old Shirts To Get Used To
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            The House Is Open To You Now
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            Red Dress Will Be Here For You
          </h4>
          <hr className="border-black" />

          <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mt-4">
            Source
          </h6>
          <h4 className="w-44 md:w-52 text-xl md:text-2xl ">
            For Time Is Here Move It Now
          </h4>
          <hr className="border-black" class="bg-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default PopularSec;
