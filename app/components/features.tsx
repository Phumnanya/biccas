export default function Features() {
    return(
        <div className="flex md:flex-row flex-col justify-between md:items-center 
        items-start w-full">
            {/* Our features intro */}
            <div className="md:w-1/4 w-full">
                <p className="font-semibold md:text-5xl text-2xl text-productivity
                pb-4 md:pb-0"
                >Our Features you can get</p>
            </div>
            {/* We offer */}
            <div className="md:w-1/3 w-full pb-4 md:pb-0">
                <p className="font-medium md:text-lg text-links">
                    We offer a variety of interesting features that you can help 
                    increase yor productivity at work and manage your projrct esaly
                </p>
            </div>
            {/* Get started btn */}
            <div className="">
                <div>
                    <button type="button" className="text-lg font-medium px-4 py-2
                    text-white rounded-[70px] bg-biccas md:px-7 md:py-5">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
