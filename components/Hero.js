import Stars from "@/public/assets/stars.png";
import Planet from "./Planet";

function Hero() {
  return (
    <div className="w-full h-[492px] bg-[url(/assets/stars.png)] bg-cover bg-no-repeat bg-black relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <Planet/>
    </div>
  );
}

export default Hero;
