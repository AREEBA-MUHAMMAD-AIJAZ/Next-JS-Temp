
  const StuffSec = () => {
    return (
      <div className="flex flex-col lg:px-10 lg:py-20 sm:px-5 sm:py-10  ">
        <div className="flex justify-between py-5">
             <h4 className="text-sm md:text-base font-bold">△ HOT STUFF</h4>
             <h4 className="text-sm md:text-base underline font-bold">VIEW MORE</h4>
        </div>


        <div className="flex flex-col items-center justify-evenly md:gap-1 lg:flex-row md:flex-row lg:py-5 lg:px-5 sm:py-1 sm:px-1">

          <div className="flex flex-col  ">
            <img src="/men.png" className="w-[250px] h-[230px] object-cover mb-2" alt="Image 1"/>
            <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center my-2">Source</h6>
            <h4 className="w-48">The House Is Open To You Now</h4>
            <hr className="w-40 border-t-2 border-black" />
          </div>
  
          <div className="flex flex-col lg:flex lg:flex-col md:hidden sm:hidden ">
            <img src="/image3.png" className="w-[250px] h-[150px] object-cover mb-2" alt="Image 2" />
            <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">Source</h6>
            <h4 className="w-48">Old Shirts To Get Used To</h4>
            <hr className="w-40 border-t-2 border-black" />
          </div>
          
          <div className="flex flex-col ">
            <img src="/booklady.png" className="w-[250px] h-[230px] object-cover mb-2" alt="Image 3" />
            <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">Source</h6>
            <h4 className="w-48">Red Dress Will Be Here For You</h4>
            <hr className="w-40 border-t-2 border-black" />
          </div>
  
          <div className="flex flex-col">
            <img src="/2men.png" className="w-[250px] h-[150px] object-cover mb-2" alt="Image 4" />
            <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">Source</h6>
            <h4 className="w-48">New Boxes To Get Back To</h4>
            <hr className="w-40 border-t-2 border-black" />
          </div>
  
          <div className="flex flex-col">
            <img src="/flowers.png" className="w-[250px] h-[230px] object-cover mb-2" alt="Image 5" />
            <h6 className="text-xs font-normal border rounded-2xl w-16 border-black text-center mb-1 mt-2">Source</h6>
            <h4 className="w-48">For Time Is Here Move It Now</h4>
            <hr className="w-40 border-t-2 border-black" />
          </div>
        </div>
  
        <hr className="w-full border-t-2 border-black my-10" />
  
        <h1 className="text-2xl md:text-4xl text-center mb-5">HENRIK IS A DESIGN MAGAZINE HENRIK IS A DESIGN MAGAZINE</h1>
  
        <hr className="w-full border-t-2 border-black my-10" />
  
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-7">
          <h3 className="text-lg md:text-xl">ABOUT</h3>
          <h3 className="text-lg md:text-xl">CONTACT</h3>
          <h3 className="text-lg md:text-xl">SHOP</h3>
          <h3 className="text-lg md:text-xl">LATEST</h3>
          <h3 className="text-lg md:text-xl">TRENDING</h3>
        </div>
  
        <hr />
  
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 py-7">
          <img src="/in.png" alt="LinkedIn" className="w-4 h-4" />
          <img src="/Be.png" alt="Behance" className="w-4 h-4" />
          <img src="/F.png" alt="Facebook" className="w-4 h-4" />
          <img src="/twitter.png" alt="Twitter" className="w-4 h-4" />
          <img src="/insta.png" alt="Instagram" className="w-4 h-4" />
        </div>
      </div>
    );
  }
  
  export default StuffSec;
  
  