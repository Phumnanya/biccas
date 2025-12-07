import Ratings from "../components/star-ratings"
import Analytics from "../components/analytics"

export default function Support() {
    return(
        <div className="bg-support w-full h-fit flex flex-row justify-between px-10
        py-20">
            <Ratings />
            <Analytics />
        </div>
    )
}