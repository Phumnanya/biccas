import Image from "next/image";
import Bullets from "../props/bullets";
import Planbutton from "../props/planbtn";

export default function Subscription() {
    return(
        <div className="flex flex-row w-full justify-between">
            {/*  free plan container */}
            <div className="w-[374px] h-[644px] text-center bg-white rounded-[20px]
            shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] flex flex-col items-center 
            justify-center">
                <p className="font-semibold text-3xl">Free</p>
                <div className="w-[210px] h-[54px] mx-auto flex items-center">
                    <p className="font-medium text-lg text-links">
                        Have a go  and test your  superpowers
                    </p>
                </div>
                <div className="relative w-[50px] h-14 mx-auto my-2">
                    <Image src="/Group 194.svg" alt="price" fill className="object-contain" />
                </div>
                <div className="mx-auto w-[334px] h-[380px] rounded-[10px] bg-plans flex 
                items-center justify-center">
                    <div className="w-[260px] min-h-[238px] m-auto">
                        <Bullets 
                        one="2 Users"
                        two="2 files"
                        three="Public Share & Comments"
                        four="Chat Support"
                        five="New income apps"
                        />
                        <Planbutton prop="Signup for free" />
                    </div>
                </div>
            </div>
        </div>
    )
}