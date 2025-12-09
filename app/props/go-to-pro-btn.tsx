type props = {
    prop: string;
}

export default function Go_to_pro({prop : prop}: props) {
    return(
        <button type="button" className="w-[260px] h-16 rounded-[20px] text-white bg-biccas
        shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] font-semibold md:text-lg text-center">
            {prop}
        </button>
    )
}
