import Image from "next/image";
import Link from "next/link";

export default function Footer_links() {
    return(
        <div className="md:w-[587px] md:h-[200px] flex flex-row justify-between 
        flex-wrap md:flex-nowrap">
            {/*  Support links */}
            <div className="md:w-[175px] md:h-[200px]">
                <header className="font-medium md:text-lg text-white">
                    Support
                </header>
                <br />
                <nav className="flex flex-col justify-evenly items-start">
                    <Link href="#" className="font-medium md:text-lg text-links">Help centre</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Account information</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">About</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Contact us</Link>
                </nav>
            </div>
            {/*  Help and solution links */}
            <div className="md:w-[175px] md:h-[200px]">
                <header className="font-medium md:text-lg text-white">
                    Help and Solution
                </header>
                <br />
                <nav className="flex flex-col justify-evenly items-start">
                    <Link href="#" className="font-medium md:text-lg text-links">Talk to support</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Support docs</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">System status</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Covid responde</Link>
                </nav>
            </div>
            {/*  Product links */}
            <div className="md:w-[175px] md:h-[200px] mt-3 md:mt-0">
                <header className="font-medium md:text-lg text-white">
                    Product
                </header>
                <br />
                <nav className="flex flex-col justify-evenly items-start">
                    <Link href="#" className="font-medium md:text-lg text-links">Update</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Security</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Beta test</Link>
                    <Link href="#" className="font-medium md:text-lg text-links">Pricing product</Link>
                </nav>
            </div>
        </div>
    )
}