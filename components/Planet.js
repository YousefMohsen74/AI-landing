function Planet() {
  return (
    <div className="relative w-full h-[500px] flex items-center overflow-hidden bg-[radial-gradient(60%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] ">
      <div className="absolute top-[54%] left-1/2  w-1/3 max-[720px]:w-5/6  text-center  -translate-x-1/2 -translate-y-1/2  z-[40] flex flex-col space-y-3 items-center">
        <p className="text-8xl font-bold text-white/70">AI SEO</p>
        <p className="text-lg text-white/70 text-center">Elevate your site&apos;s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools</p>
        <button className="w-40 h-10 relative py-2 px-3 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-pointer hover:shadow-[0px_0px_20px_#8c45ff]">
          <div className="absolute inset-0 ">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
          </div>
          <span>Join waitlist</span>
        </button>
      </div>
      <div className="w-64 h-64 bg-radial-[50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66)] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] border z-10 border-white opacity-20 rounded-full top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 orbit-animation ">
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500 top-1/2 left-0  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500 top-0 left-1/2  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-4 h-4 rounded-full bg-transparent top-1/2 left-full z-30 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-500 p-0.5">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
      <div className="absolute h-[444px] w-[444px] md:w-[780px] md:h-[780px] border border-dashed z-10 border-white opacity-10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  orbit-animation">
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500 top-1/2 left-full  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500  top-1/2 left-0  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-4 h-4 rounded-full bg-transparent top-0 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-500 p-0.5">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
      <div className="absolute h-[544px] w-[544px] md:w-[980px] md:h-[980px] border z-10 border-white opacity-10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  orbit-animation">
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500 top-1/2 left-full  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full  bg-gray-500 top-0 left-1/2  z-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-4 h-4 rounded-full bg-transparent top-1/2 left-0 z-30 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-500 p-0.5">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
