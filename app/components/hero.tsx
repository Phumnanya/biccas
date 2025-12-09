import Image from "next/image";

export default function Hero_img() {
    return(
        <div className="flex md:flex-row items-center md:justify-center md:w-[1291.68px] 
        md:h-[578px] mx-auto relative md:top-[210px] w-full top-20 flex-col justify-evenly">
            {/*  Increase Productivity container */}
            <div className="flex flex-col justify-between md:w-[555px] md:h-[578px] w-full">
                <div className="md:w-[555px] md:h-[270px]">
                    <h1 className="font-bold md:text-[80px] text-productivity 
                    md:leading-[90px] text-5xl">
                        We're here to Increase your Productivity
                    </h1>
                </div>
                <div className="relative md:w-[479px] md:h-[26px] w-[70%] h-12">
                    <Image src="/Vector 32.png" alt="green line" fill />
                </div>
                <div className="md:w-[461px] md:h-[90px]">
                    <p className="md:font-medium md:text-lg text-black">
                    Let's make your work more organize and easily using the Taskio
                    Dashboard with many of the latest features in managing work every day.
                </p>
                </div>
                {/*  buttons flex container */}
                <div className="flex flex-row justify-between items-center md:w-[350px] 
                mt-5 w-full">
                    <div>
                        <button type="button" className="md:text-lg font-medium text-sm
                        text-white rounded-[40px] bg-biccas md:px-7 md:py-5 gap-2.5
                        px-4 py-3">
                            Try free trial
                        </button>
                    </div>
                    <div>
                        <button type="button" className="md:text-lg font-medium text-sm
                        text-productivity">
                            <div className="flex flex-row justify-between gap-3.5">
                                <Image src="/play.png" alt="play" width={30} height={30} />
                                <p>View Demo</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/*  hero image container */}
            <div className="md:w-[701.68px] md:h-[558.99px] w-full h-fit mt-2 md:mt-0">
                <div className="relative w-full md:h-[500px] h-[300px]">
                    <Image src="/Group 138.png" alt="Group 138" fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}
