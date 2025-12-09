import Intro from "./views/intro";
import Support from "./views/support";
import Foot from "./views/footer";
import Features from "./components/features";
import Features2 from "./components/listed-features";
import Benefits from "./components/benefit";
import Chooseplan from "./components/chooseplan";

export default function Home() {
  return (
    <div className="mx-auto">
      <Intro />
      <Support />
      <div className="bg-linear-to-r from-[#FFD6D6FF] to-[#FFD6D600] p-10 z-10
      w-full h-fit relative">
        <Features />
        <Features2 />
      </div>
      <div className="bg-linear-to-r from-[#fddcdcFF] to-[#8fb4a7FF] p-10 z-10
      w-full h-fit relative">
        <Benefits />
      </div>
      <div className="bg-linear-to-r from-[#FFD6D600] to-[#54BE96FF] p-10 z-10
      w-full h-fit relative">
        <Chooseplan />
      </div>
      <Foot />
    </div>
  );
}
/*
      
      */
