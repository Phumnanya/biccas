import Image from "next/image";

export default function Company() {
    return(
        <>
        {/* Company */}
        <div className="flex flex-col justify-center mx-auto md:w-[1076px] md:h-[146px] relative
        md:mt-72 w-full mt-24">
            <div className="my-10 mx-auto w-fit">
                <p className="font-bold text-productivity md:text-[40px] text-2xl
                text-center md:text-justify">
                    More than 25,000 teams use Collabs
                </p>
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center 
            text-links md:flex-nowrap">
                {/* Unsplash */}
                <div className="flex flex-row justify-center items-baseline md:gap-3.5">
                    <Image src="/Group 140.png" alt="unsplash" width={30} height={30} />
                    <p>Unsplash</p>
                </div>
                {/* Notion */}
                <div className="flex flex-row justify-center items-baseline md:gap-3.5">
                    <Image src="/icons8-notion-24.png" alt="notion" width={30} height={30} />
                    <p>Notion</p>
                </div>
                {/* Intercom */}
                <div className="flex flex-row justify-center items-baseline md:gap-3.5">
                    <Image src="/Group 143.svg" alt="Intercom" width={30} height={30} />
                    <p>INTERCOM</p>
                </div>
                {/* Descript */}
                <div className="flex flex-row justify-center items-baseline md:gap-3.5">
                    <Image src="/Union.png" alt="descript" width={30} height={30} />
                    <p>descript</p>
                </div>
                {/* Grammarly */}
                <div className="flex flex-row justify-center items-baseline md:gap-3.5">
                    <Image src="/Group 320.png" alt="grammarly" width={30} height={30} 
                    className="bg-links rounded-full p-2" />
                    <p>grammarly</p>
                </div>
            </div>
        </div>
        </>
    )
}
