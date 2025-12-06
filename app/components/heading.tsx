import Link from "next/link";

export default function Heading() {
    return(
        <>
        {/* main flex container */}
        <header className="w-full h-10 relative top-5 left[130px] rounded-[10px]
        flex flex-row justify-between items-center">
            <div className="text-biccas w-1/4">
                <h1 className="font-semibold text-[50px] leading-[30px] tracking-normal"
                >Biccas</h1>
            </div>
            {/* flex container for nav and login */}
            <div className="flex flex-row justify-between items-center w-2/3">
                {/* navigation links */}
                <nav className="w-2/3 flex flex-row justify-evenly">
                    <Link href="#" className="font-medium text-[18px] text-black">Home</Link>
                    <Link href="#" className="font-medium text-base text-links">Product</Link>
                    <Link href="#" className="font-medium text-base text-links">FAQ</Link>
                    <Link href="#" className="font-medium text-base text-links">Blog</Link>
                    <Link href="#" className="font-medium text-base text-links">About Us</Link>
                </nav>
                {/*login and signup */}
                <div className="w-1/3 h-10 flex flex-row justify-center items-center">
                    <div>
                        <button type="button" className="text-base font-medium p-2
                        text-links">
                            Login
                        </button>
                    </div>
                    <div>
                        <button type="button" className="text-base font-medium p-2
                        text-white bg-biccas rounded-[10px]">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}