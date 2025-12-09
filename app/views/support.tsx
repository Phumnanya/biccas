import Ratings from "../components/star-ratings"
import Analytics from "../components/analytics"

export default function Support() {
    return(
        <div className="bg-support w-full h-fit flex md:flex-row justify-between px-10
        md:py-20 py-10 flex-col">
            <Ratings />
            <Analytics />
        </div>
    )
}
