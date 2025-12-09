import Image from "next/image";

export default function Analytics() {
    return(
        <div className=" flex flex-col justify-between md:w-2/5 w-full mt-10 md:mt-0">
            {/* publishing  */}
            <div className="flex flex-row gap-4">
                <div className="relative w-8 h-8 bg-white md:p-4 p-6">
                    <Image src="/activity 1.png" alt="publishing" fill />
                </div>
                <div>
                    <p className="font-bold md:text-2xl text-lg text-productivity"
                    >Publishing</p>
                    <p className="text-links font-medium md:text-lg">
                        Plan, collaborate, and publishing your contetn that drivees 
                        meaningful engagement and growth for your barnd
                    </p>
                </div>
            </div>
            {/* Analytics  */}
            <div className="flex flex-row gap-3.5">
                <div className="relative w-8 h-8 bg-white md:p-4 p-6">
                    <Image src="/pie-chart 1.png" alt="analytics" fill />
                </div>
                <div>
                    <p className="font-bold md:text-2xl text-lg text-productivity"
                    >Analytics</p>
                    <p className="text-links font-medium md:text-lg">
                        Analyze your performance and create goegeous report
                    </p>
                </div>
            </div>
            {/* Engagement  */}
            <div className="flex flex-row gap-3.5">
                <div className="relative w-8 h-8 bg-white md:p-4 p-6">
                    <Image src="/command 1.png" alt="engagement" fill />
                </div>
                <div>
                    <p className="font-bold md:text-2xl text-lg text-productivity"
                    >Engagement</p>
                    <p className="text-links font-medium md:text-lg">
                        Quiuckly navigate you anda engage with your adience
                    </p>
                </div>
            </div>
        </div>
    )
}
