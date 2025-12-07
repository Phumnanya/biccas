import Image from "next/image";

export default function Features2() {
    return(
        <div className="flex flex-row justify-between mt-20">
            {/* collaboration teams */}
            <div className="flex flex-col w-[28%]">
                <div className="relative w-full h-[400px]">
                    <Image src="/Frame 247.png" alt="Frame 247" fill className="object-contain" />
                </div>
                <p className="font-semibold text-3xl text-productivity">Collaboration Teams</p>
                <br />
                <p className="text-links font-medium text-lg">
                    Here you can handle projects together with team virtually
                </p>
            </div>
            {/* cloud storage */}
            <div className="flex flex-col w-[28%]">
                <div className="relative w-full h-[400px]">
                    <Image src="/Frame 53.png" alt="Frame 53" fill className="object-contain" />
                </div>
                <p className="font-semibold text-3xl text-productivity">Cloud Storage</p>
                <br />
                <p className="text-links font-medium text-lg">
                    No nedd to worry about storage because we provide storage up to 2 TB
                </p>
            </div>
            {/* daily analytics */}
            <div className="flex flex-col w-[28%]">
                <div className="relative w-full h-[400px]">
                    <Image src="/Frame 54.png" alt="Frame 54" fill className="object-contain" />
                </div>
                <p className="font-semibold text-3xl text-productivity">Daily Analytics</p>
                <br />
                <p className="text-links font-medium text-lg">
                    We always provide useful informatin to make it easier for you every day
                </p>
            </div>
        </div>
    )
}