import Image from "next/image";

export default function Newsletter_Form() {
    return(
        <div className="md:w-[410px] md:h-[180px] flex flex-col justify-between">
            <div className="md:w-40 md:h-[30px]">
                <p className="font-semibold md:text-[50px] text-3xl text-biccas"
                >Biccas</p>
            </div>
            <div className="md:w-[286px] md:h-[30px]">
                <p className="font-medium md:text-lg text-links">
                    Get started noew try our product
                </p>
            </div>
            <div className="md:w-[410px] h-[60px] relative">
                <input
                    type="text"
                    placeholder="Enter your email here"
                    className="w-full border rounded-[70px] px-4 py-2 pr-10 bg-transparent 
                    placeholder-links placeholder:font-medium placeholder:text-lg"
                />
                <img
                    src="/arrow-right.svg"
                    alt="search icon"
                    className="absolute right-1 top-5 -translate-y-1/2 w-10 h-fit 
                    bg-biccas rounded-full"
                />
            </div>
        </div>
    )
}