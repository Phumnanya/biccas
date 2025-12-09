type props = {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
}

export default function Bullets({one : one, two, three, four, five}: props) {
    return(
        <div className="font-medium md:text-lg text-productivity">
            <ul className="space-y-3">
                <li className="flex items-center gap-3">
                    <img src="/Subtract.svg" className="w-5 h-5" />
                    <span>{one}</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/Subtract.svg" className="w-5 h-5" />
                    <span>{two}</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/Subtract.svg" className="w-5 h-5" />
                    <span>{three}</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/Subtract.svg" className="w-5 h-5" />
                    <span>{four}</span>
                </li>
                <li className="flex items-center gap-3">
                    <img src="/Subtract.svg" className="w-5 h-5" />
                    <span>{five}</span>
                </li>
            </ul>
        </div>
    )
}
