import Link from "next/link";

export default function Heading() {
    return(
        <>
        {/* main flex container */}
        <header className="w-full h-fit md:w-[1180px] md:h-10 relative top-5 
        md:left[130px] rounded-[10px]
        flex flex-row justify-between items-center mx-auto">
            <div className="text-biccas md:w-40 md:h-[30px]">
                <h1 className="font-semibold md:text-[50px] text-3xl md:leading-[30px] 
                md:tracking-normal"
                >Biccas</h1>
            </div>
            {/* navigation links */}
            <nav className="flex flex-row md:justify-evenly md:w-[408px] md:h-[22px] 
            relative md:left[629px] justify-between">
                <Link href="#" className="md:font-medium md:text-lg text-black">Home</Link>
                <Link href="#" className="md:font-medium md:text-base text-links">Product</Link>
                <Link href="#" className="md:font-medium md:text-base text-links">FAQ</Link>
                <Link href="#" className="md:font-medium md:text-base text-links">Blog</Link>
                <Link href="#" className="md:font-medium md:text-base text-links">About Us</Link>
            </nav>
            {/*login and signup */}
            <div className="md:w-[143px] md:h-10 relative md:flex hidden flex-row justify-center 
            items-center md:left[1167px] rounded-[10px] w-1/3">
                <div>
                    <button type="button" className="md:text-base md:font-medium md:p-2
                    text-links">
                        Login
                    </button>
                </div>
                <div>
                    <button type="button" className="md:text-base md:font-medium md:p-2
                    text-white bg-biccas rounded-[10px]">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
        </>
    )
}
