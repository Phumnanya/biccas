export default function Features() {
    return(
        <div className="flex flex-row justify-between items-center w-full">
            {/* Our features intro */}
            <div className="w-1/4">
                <p className="font-semibold text-5xl text-productivity">
                    Our Features you can get
                </p>
            </div>
            {/* We offer */}
            <div className="w-1/3">
                <p className="font-medium text-lg text-links">
                    We offer a variety of interesting features that you can help 
                    increase yor productivity at work and manage your projrct esaly
                </p>
            </div>
            {/* Get started btn */}
            <div className="">
                <div>
                    <button type="button" className="text-lg font-medium
                    text-white rounded-[70px] bg-biccas px-7 py-5">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}