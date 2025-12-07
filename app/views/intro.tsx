import Heading from "../components/heading";
import Hero_img from "../components/hero";
import Company from "../components/company";

export default function Intro() {
    return(
       <div className="relative h-fit w-full bg-white overflow-hidden py-6 mx-auto">
      
      {/* Blob 1 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-100"
        style={{
          background: "#52BDAA",
          top: "-280px",
          left: "-317px",
        }}
      />

      {/* Blob 2 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-60"
        style={{
          background: "#FFD6D6",
          top: "-364x",
          left: "581px",
        }}
      />

      {/* Blob 3 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-60"
        style={{
          background: "#FFFFFF",
          top: "219px",
          left: "376px",
        }}
      />

      {/* Blob 4 */}
      <div
        className="absolute w-[634px] h-[634px] rounded-full blur-[1000px] opacity-60"
        style={{
          background: "#54BE96",
          top: "270px",
          right: "1123px",
        }}
      />

      {/* Content */}
      <div className="relative p-10 z-10">
        <Heading />
        <Hero_img />
        <Company />
      </div>
    </div>
    )
}