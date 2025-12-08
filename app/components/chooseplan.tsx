import Image from "next/image";
import Subscription from "./subscription";

export default function Chooseplan() {
    return(
        <>
        <header className="w-[492px] h-[146px] mx-auto text-center">
            {/* choose plan header */}
            <p className="font-bold text-5xl text-productivity">
                Choose Plan<br /> That’s Right For You
            </p>
        </header>
        <div className="w-[519px] h-[22px] mx-auto text-center">
            <p className="font-bold text-lg text-links">
                Choose plan that works best for you, feel free to contact us
            </p>
        </div>
        {/* billing types (monthly / yearly) */}
        <div className="w-[340px] h-[70px] rounded-[10px] flex flex-row justify-between
        items-center mx-auto my-10">
            {/* billing monthly */}
            <div>
                <button type="button" className="text-lg font-medium
                text-productivity text-center">
                    Bill Monthly
                </button>
            </div>
            {/* billing yearly */}
            <div>
                <button type="button" className="text-lg font-medium text-center
                text-white w-40 h-14 rounded-[10px] bg-biccas">
                    Bill Yearly
                </button>
            </div>
        </div>
        {/* Subscription plans */}
        <Subscription />
        </>
    )
}