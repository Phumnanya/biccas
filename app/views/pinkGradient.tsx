import Features from "../components/features"
import Features2 from "../components/listed-features"

export default function Gradient() {
    return(
        <div className="relative h-fit w-full bg-white overflow-hidden py-6 mx-auto">
              
            {/* Blob 1 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-100"
        style={{
          background: "#FFD6D6",
          top: "-2176px",
          left: "-194px",
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-60"
        style={{
          background: "#54BE96",
          top: "3278x",
          left: "1123px",
        }}
      />
        
            {/* Content */}
            <div className="relative p-10 z-10">
                <Features />
                <Features2 />
            </div>
        </div>
    )
}