import Image from "next/image";

export default function Feedbacks() {
    return(
        <section className="md:w-[466px] md:h-[588px] flex flex-col w-full h-fit
        justify-evenly items-center">
            {/*  testimony container */}
            <div className="md:w-[466px] md:h-[482px] flex flex-col justify-evenly 
            items-center w-full h-fit">
                {/*  testimony 1 */}
                <section className="md:w-[466px] md:h-[482px] flex flex-col justify-evenly">
                    <header className="md:w-[444px] md:h-[122px]">
                    <p className="font-semibold md:text-[50px] text-2xl text-white">
                        People are Saying About DoWhith
                    </p>
                    </header>
                    <div className="md:w-[461px] md:h-[60px]">
                        <p className="font-medium md:text-lg text-links">
                            Everything you need to accept to payment and grow your money 
                            of manage anywhere on planet
                        </p>
                    </div>
                
                {/*  testimony 2 */}
                    <div className="relative w-[45px] h-[38px]">
                        <Image src="/Group 212.svg" alt="price" fill className="object-contain" />
                    </div>
                    <div className="md:w-[461px] md:h-[90px]">
                        <p className="font-medium md:text-lg text-links">
                            I am very helped by this E-wallet application , my days 
                            are very easy to use this application and its very helpful 
                            in my life , even I can pay a short time 😍
                        </p>
                    </div>
                    <div className="md:w-32 md:h-[30px]">
                        <p className="font-medium text-lg text-links">
                            _ Aria Zinanrio
                        </p>
                    </div>
                </section>
            </div>
            {/*  Avatars container */}
            <section className="w-full h-fit flex flex-row md:justify-between 
            justify-self-start items-start">
                <div className="relative md:w-[66px] md:h-[66px] w-[33px] h-[33px]">
                    <Image src="/Ellipse 54.svg" alt="person" fill 
                    className="object-contain rounded-full" />
                </div>
                <div className="relative md:w-[66px] md:h-[66px] w-[33px] h-[33px]">
                    <Image src="/Ellipse 55.svg" alt="person" fill 
                    className="object-contain rounded-full" />
                </div>
                <div className="relative md:w-[66px] md:h-[66px] w-[33px] h-[33px]">
                    <Image src="/Ellipse 56.svg" alt="person" fill 
                    className="object-contain rounded-full" />
                </div>
                <div className="relative md:w-[66px] md:h-[66px] w-[33px] h-[33px]">
                    <Image src="/Ellipse 57.svg" alt="person" fill 
                    className="object-contain rounded-full" />
                </div>
                <div className="relative md:w-[66px] md:h-[66px] w-[33px] h-[33px]">
                    <Image src="/Group 215.svg" alt="play buttton" fill 
                    className="object-contain rounded-full" />
                </div>
            </section>
        </section>
    )
}