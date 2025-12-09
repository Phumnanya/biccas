import Image from "next/image";

export default function Features2() {
    return(
        <div className="flex md:flex-row justify-between md:mt-20 flex-col mt-10">
            {/* collaboration teams */}
            <div className="flex flex-col md:w-[28%] w-full">
                <div className="relative w-full md:h-[400px] h-[200px]">
                    <Image src="/Frame 247.png" alt="Frame 247" fill className="object-contain" />
                </div>
                <p className="font-semibold md:text-3xl text-2xl text-productivity pb-2"
                >Collaboration Teams</p>
                <p className="text-links font-medium md:text-lg">
                    Here you can handle projects together with team virtually
                </p>
            </div>
            {/* cloud storage */}
            <div className="flex flex-col md:w-[28%] w-full">
                <div className="relative w-full md:h-[400px] h-[200px]">
                    <Image src="/Frame 53.png" alt="Frame 53" fill className="object-contain" />
                </div>
                <p className="font-semibold md:text-3xl text-2xl text-productivity pb-2"
                >Cloud Storage</p>
                <p className="text-links font-medium md:text-lg">
                    No nedd to worry about storage because we provide storage up to 2 TB
                </p>
            </div>
            {/* daily analytics */}
            <div className="flex flex-col md:w-[28%] w-full">
                <div className="relative w-full md:h-[400px] h-[200px]">
                    <Image src="/Frame 54.png" alt="Frame 54" fill className="object-contain" />
                </div>
                <p className="font-semibold md:text-3xl text-2xl text-productivity pb-2"
                >Daily Analytics</p>
                <p className="text-links font-medium md:text-lg">
                    We always provide useful informatin to make it easier for you every day
                </p>
            </div>
        </div>
    )
}
