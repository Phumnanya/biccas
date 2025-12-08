import Image from "next/image";
import Bullets from "../props/bullets";
import Planbutton from "../props/planbtn";
import Go_to_pro from "../props/go-to-pro-btn";

export default function Subscription() {
    return(
        <div className="flex flex-row w-full justify-between items-center">
            {/*  free plan container */}
            <div className="w-[374px] h-[644px] text-center bg-white rounded-[20px]
            shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] flex flex-col items-center 
            justify-center">
                <div className="w-[210px] h-[169px]">
                    <p className="font-semibold text-3xl">Free</p>
                    <div className="w-[210px] h-[54px] mx-auto flex items-center">
                        <p className="font-medium text-lg text-links">
                            Have a go  and test your  superpowers
                        </p>
                    </div>
                    <div className="relative w-[50px] h-14 mx-auto my-2">
                        <Image src="/Group 194.svg" alt="price" fill className="object-contain" />
                    </div>
                </div>
                <div className="mx-auto w-[334px] h-[380px] rounded-[10px] bg-plans flex 
                items-center justify-center">
                    <div className="w-[260px] min-h-[329px] m-auto">
                        <div className="w-[260px] min-h-[238px] m-auto">
                            <Bullets 
                            one="2 Users"
                            two="2 files"
                            three="Public Share & Comments"
                            four="Chat Support"
                            five="New income apps"
                            />
                        </div>
                        <div className="w-[260px] min-h-16 m-auto rounded-[20px]">
                            <Planbutton prop="Signup for free" />
                        </div>
                    </div>
                </div>
            </div>
            {/*  Pro plan container */}
            <div className="w-[374px] h-[684px] text-center bg-biccas rounded-[20px]
            flex flex-col items-center justify-evenly relative">
            {/*  ellipse */}
            <div className="absolute w-[600px] h-[600px] top-[135px] left-[-113px] 
            bg-[radial-gradient(circle,#6BC2A1,transparent)]
            rounded-full opacity-100 pointer-events-none">
            </div>
                <div className="w-[210px] h-[169px] relative z-10">
                    <p className="font-semibold text-3xl text-white">Pro</p>
                    <div className="w-[210px] h-[54px] mx-auto flex items-center">
                        <p className="font-medium text-lg text-white">
                            Experiment the power of infinite possibilities
                        </p>
                    </div>
                    <div className="relative w-[49px] h-14 mx-auto my-2">
                        <Image src="/Group 1942.svg" alt="price" fill className="object-contain" />
                    </div>
                </div>
                <div className="w-[130px] h-10 rounded-[10px] mx-auto relative z-10">
                    <button type="button" className="w-[130px] h-10 rounded-[10px]
                    bg-save text-white font-semibold text-sm">
                        Save $50 a year
                    </button>
                </div>
                <div className="mx-auto w-[334px] h-[380px] rounded-[10px] bg-white flex 
                items-center justify-center relative z-10">
                    <div className="w-[266px] min-h-[329px] m-auto">
                        <div className="w-[266px] min-h-[238px] m-auto">
                            <Bullets 
                            one="4 Users"
                            two="All apps"
                            three="Unlimited editable exports"
                            four="Folders and collaboration"
                            five="All incoming apps"
                            />
                        </div>
                        <div className="w-[260px] min-h-16 rounded-[20px] m-auto">
                            <Go_to_pro prop="Go to pro" />
                        </div>
                    </div>
                </div>
            </div>
            {/*  Business plan container */}
            <div className="w-[374px] h-[644px] text-center bg-white rounded-[20px]
            shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)] flex flex-col items-center 
            justify-center">
                <div className="w-[251px] h-[169px]">
                    <p className="font-semibold text-3xl">Business</p>
                    <div className="w-[251px] h-[54px] mx-auto flex items-center">
                        <p className="font-medium text-lg text-links">
                            Unveil new superpowers and join the Design Leaque
                        </p>
                    </div>
                    <div className="relative w-[73px] h-14 mx-auto my-2">
                        <Image src="/Group 194d.svg" alt="price" fill className="object-contain" />
                    </div>
                </div>
                <div className="mx-auto w-[334px] h-[380px] rounded-[10px] bg-plans flex 
                items-center justify-center">
                    <div className="w-[266px] min-h-[329px] m-auto">
                        <div className="w-[266px] min-h-[238px] m-auto">
                            <Bullets 
                            one="All features of pro plan"
                            two="Account success Manager"
                            three="Single Sign-On (SSO)"
                            four="Co-conception program"
                            five="Collaboration-Soon"
                            />
                        </div>
                        <div className="w-[260px] min-h-16 rounded-[20px]">
                            <Planbutton prop="Go to Business" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}