import Features from "../components/features"
import Features2 from "../components/listed-features"
import Benefits from "../components/benefit"
import Chooseplan from "../components/chooseplan"

export default function Gradient() {
    return(
        <div className="w-full h-fit">
          {/*  ellipse 1 */}
          <div className="absolute w-[634px] h-[634px] top-[2176px] left-[-194px] 
            bg-[radial-gradient(circle,#FFD6D6,transparent)] overflow-hidden
            opacity-100 pointer-events-none">
          </div>
          {/* Content */}
          <div className="relative z-10 p-10">
              <Features />
              <Features2 />
              <Benefits />
              <Chooseplan />
          </div>
        </div>
    )
}

/*
/*  ellipse 2 *
          <div className="absolute w-[634px] h-[634px] top-[3278px] left-[1123px] 
            bg-[radial-gradient(circle,#54BE96,transparent)] overflow-hidden
            opacity-100 pointer-events-none">
          </div>
          width: 634;
height: 634;
angle: 0 deg;
opacity: 1;
top: 3278px;
left: 1123px;

          */