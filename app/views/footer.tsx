import Feedbacks from "../components/feedbacks"
import Demo from "../components/demo"
import Newsletter_Form from "../components/newsletter-form"
import Footer_links from "../components/footer-links"

export default function Foot() {
    return(
        <footer className="w-full md:h-[1217px] h-fit bg-footer p-10 flex
        flex-col justify-evenly items-center z-10">
            <section className="w-full flex md:flex-row flex-col justify-between items-center">
                <Feedbacks />
                <Demo />
            </section>
            <section className="w-full flex md:flex-row flex-col justify-between 
            items-center mt-3 md:mt-0">
                <Newsletter_Form />
                <Footer_links />
            </section>
            <section className="w-full flex flex-row justify-between items-center mt-4
            md:mt-0">
                <div className="md:w-[425px] md:h-[30px]">
                    <p className="md:font-medium text-white text-sm">
                        © 2022 Biccas Inc. Copyright and rights reserved
                    </p>
                </div>
                <div className="md:w-[331px] md:h-[30px]">
                    <p className="md:font-medium text-white text-sm">
                        Terms and Condtions * Privacy Policy
                    </p>
                </div>
            </section>
        </footer>
    )
}
