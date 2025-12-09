import Image from "next/image";

export default function Demo() {
    return(
        <section className="md:w-[612px] md:h-[588px] flex flex-col justify-evenly 
        items-center rounded-[20px] bg-form w-full h-fit mt-5 md:mt-0 p-4 md:p-0">
            {/* container 1 */}
            <div className="md:w-[168px] md:h-[132px] flex flex-col items-center 
            justify-evenly w-full">
                <div className="relative w-[72.06px] h-[86px] mx-auto">
                    <Image src="/Vector.svg" alt="database" fill className="md:object-cover
                    object-contain" />
                </div>
                <div>
                    <p className="font-medium md:text-3xl text-white">Get Started</p>
                </div>
            </div>
            {/* container 2 */}
            <div className="md:w-[440px] md:h-[340px] rounded-[10px] flex flex-col 
            justify-evenly w-full">
                <div className="md:w-[440px] md:h-[92px] rounded-[10px] w-full">
                    <label className="font-medium md:text-lg text-white">Email</label>
                    <br /><br />
                    <input className="md:w-[440px] md:h-[50px] rounded-[10px] bg-white
                    placeholder-links placeholder:font-medium placeholder:text-sm w-full"
                    placeholder="   Enter your email" />
                </div><br />
                <div className="md:w-[440px] md:h-[122px] rounded-[10px] w-full">
                    <label className="font-medium md:text-lg text-white">Message</label>
                    <br /><br />
                    <input className="md:w-[440px] md:h-20 rounded-[10px] bg-white
                    placeholder-links placeholder:font-medium placeholder:text-sm w-full"
                    placeholder="   What are you say ?" />
                </div><br />
                <div className="md:w-[440px] md:h-[60px] rounded-[10px] w-full">
                    <button type="button" className="bg-biccas md:w-[440px] md:h-[60px] 
                    w-full h-[30px] rounded-[10px] text-center font-semibold 
                    md:text-[16px] text-white">
                        Request Demo
                    </button>
                    <br />
                    <span className="text-right font-medium text-sm text-white flex justify-end">
                        or Start Free Trial
                    </span>
                </div>
            </div>
        </section>
    )
}