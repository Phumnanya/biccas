import Image from "next/image";

export default function Hero_img() {
    return(
        <div className="flex flex-row items-center justify-center w-full mt-52">
            {/*  Increase Productivity container */}
            <div className="flex flex-col justify-center w-1/2">
                <p className="font-bold text-7xl text-productivity">
                    We're here to Increase your Productivity
                </p>
                <div className="relative w-[440px] h-10 top-5 mb-10">
                    <Image src="/Vector 32.png" alt="green line" fill />
                </div>
                <div className="w-[400px]">
                    <p className="font-medium text-base text-black">
                    Let's make your work more organize and easily using the Taskio
                    Dashboard with many of the latest features in managing work every day.
                </p>
                </div>
                {/*  buttons flex container */}
                <div className="flex flex-row justify-between items-center w-[350px] mt-5">
                    <div>
                        <button type="button" className="text-lg font-medium
                        text-white rounded-[40px] bg-biccas px-7 py-5 gap-2.5">
                            Try free trial
                        </button>
                    </div>
                    <div>
                        <button type="button" className="text-lg font-medium
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
            <div className="w-1/2">
                <div className="relative w-full h-[500px]">
                    <Image src="/Group 138.png" alt="Group 138" fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}