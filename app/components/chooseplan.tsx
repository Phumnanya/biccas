import Image from "next/image";
import Subscription from "./subscription";

export default function Chooseplan() {
    return(
        <>
        <header className="md:w-[492px] md:h-[146px] mx-auto text-center">
            {/* choose plan header */}
            <p className="font-bold md:text-5xl text-2xl text-productivity">
                Choose Plan<br /> That’s Right For You
            </p>
        </header>
        <div className="md:w-[519px] md:h-[22px] mx-auto text-center">
            <p className="font-bold md:text-lg text-links">
                Choose plan that works best for you, feel free to contact us
            </p>
        </div>
        {/* billing types (monthly / yearly) */}
        <div className="md:w-[340px] md:h-[70px] rounded-[10px] flex flex-row 
        md:justify-between justify-evenly items-center mx-auto my-10">
            {/* billing monthly */}
            <div>
                <button type="button" className="md:text-lg font-medium
                text-productivity text-center">
                    Bill Monthly
                </button>
            </div>
            {/* billing yearly */}
            <div>
                <button type="button" className="md:text-lg font-medium text-center
                text-white md:w-40 w-28 md:h-14 h-10 rounded-[10px] bg-biccas">
                    Bill Yearly
                </button>
            </div>
        </div>
        {/* Subscription plans */}
        <Subscription />
        </>
    )
}
