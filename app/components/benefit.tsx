import Image from "next/image";

export default function Benefits() {
    return(
        <section className="flex flex-row justify-between my-40">
            <div className="flex flex-col">
                {/* what Benifit header */}
                <header className="w-[429px] h-[122px]">
                    <p className="font-bold text-5xl text-productivity">
                        What Benifit Will You Get
                    </p>
                </header>
                {/* Benifit bullet points */}
                <div className="w-[471px] font-medium text-lg text-productivity">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <img src="/Subtract.svg" className="w-5 h-5" />
                            <span>Free Consulting With Experet Saving Money</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/Subtract.svg" className="w-5 h-5" />
                            <span>Online Banking</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/Subtract.svg" className="w-5 h-5" />
                            <span>Investment Report Every Month</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/Subtract.svg" className="w-5 h-5" />
                            <span>Saving Money For The Future</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src="/Subtract.svg" className="w-5 h-5" />
                            <span>Online Transection</span>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
            {/* Laptop image */}
            <div className="relative w-[450px]">
                <Image src="/What Benifit.png" alt="Laptop" fill className="object-cover" />
            </div>
        </section>
    )
}