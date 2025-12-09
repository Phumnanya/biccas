import Image from "next/image"

export default function Ratings() {
    return(
        <div className="md:w-2/5 w-full">
            <header className="text-productivity font-semibold md:text-[50px]
            text-2xl">
                <p>How we support our partners all over the world</p>
            </header>
            <main className="font-medium text-base text-links">
                <p>SaaS become a common delivery model for many business application, 
                    including office software, messaging software, payroll processing 
                    software, DBMS software, management software</p>
            </main>
            {/*  ratings flex container */}
            <div className="flex flex-row gap-10 mt-5">
                {/*  databricks */}
                <div>
                    <Image src="/Group 151.svg" alt="play" width={100} height={80} />
                    <p className="font-bold md:text-lg text-productivity">
                        4.9 <span className="font-normal text-lg">/</span> 5 rating
                    </p>
                    <p className="font-bold md:text-lg text-links">databricks</p>
                </div>
                {/*  chain analysis */}
                <div>
                    <Image src="/Group 152.svg" alt="play" width={100} height={80} />
                    <p className="font-bold md:text-lg text-productivity">
                        4.8<span className="font-normal text-lg">/</span>5 rating
                    </p>
                    <p className="font-bold md:text-lg text-links">Chainanalysis</p>
                </div>
            </div>
        </div>
    )
}
