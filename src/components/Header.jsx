import React from "react";
function Header() {
  return (
    <div className="bg-slate-600">
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 container mx-auto ">
        <div className="w-[100%] md:w-[50%] h-full">
          <div className="banner-custom-radius p-20 bg-green-900 h-full ">
            <h1 className=" text-2xl font-bold uppercase text-yellow-400">
              we will make Absolutely <br />
              Any place clean neat
            </h1>
            <button className="bg-yellow-400 mt-4 text-black px-8 py-3 rounded-full font-semibold">
              Report
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] ">
          <img
            className="w-[30rem]"
            src="assets/bannerImage.png"
            alt="banner Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
