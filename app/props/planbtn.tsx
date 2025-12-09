type props = {
    prop: string;
}

export default function Planbutton({prop : prop}: props) {
    return(
        <button type="button" className="w-[260px] h-16 rounded-[20px] text-biccas
        shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] font-semibold md:text-lg text-center">
            {prop}
        </button>
    )
}
