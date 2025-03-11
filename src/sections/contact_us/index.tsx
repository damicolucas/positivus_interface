'use client'
import { SectionTitle } from "@/components/section_title";

export function ContactUs() {
    return (
        <section className="flex flex-col pb-[70px] pt-[100px]">
            <SectionTitle title="Contact Us" descrition="Connect with Us: Let's Discuss Your<br/>Digital Marketing Needs" />
            <div className="bg-gray rounded-[45px] flex flex-col md:flex-row items-start justify-between py-5 md:py-[60px] px-10 md:px-[100px] md:space-x-[210px] overflow-hidden">
                <form action="" className="flex flex-1 flex-col items-start justify-stretch ">
                    <fieldset className="flex flex-col items-start md:flex-row md:items-center md:justify-center md:gap-9 mt-2 md:mt-0 md:mb-[40px]">
                        <div className="flex items-center justify-center gap-3.5 text-lg">
                            <input type="radio" id="say_hi" name="say_hi" value="say_hi" defaultChecked onChange={() => console.log('')} className="accent-main "/>
                            <label htmlFor="say_hi">Say Hi</label>
                        </div>

                        <div className="flex items-center justify-center gap-3.5 text-lg">
                            <input type="radio" id="get_a_quote" name="get_a_quote" value="get_a_quote" onChange={() => console.log('')} className="accent-main "/>
                            <label htmlFor="get_a_quote">Get a Quote</label>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-[5px] my-[25px] w-full ">
                        <label htmlFor="get_a_quote">Name*</label>
                        <input type="text" id="name" name="name" className="bg-white border-1 border-dark py-[18px] px-[30px] rounded-[14px] w-full" required placeholder="name"/>
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-[5px] my-[25px] w-full ">
                        <label htmlFor="get_a_quote">Email*</label>
                        <input type="text" id="email" name="email" className="bg-white border-1 border-dark py-[18px] px-[30px] rounded-[14px] w-full" required placeholder="email"/>
                    </fieldset>
                    <fieldset className="flex flex-col items-start gap-[5px] my-[25px] w-full ">
                        <label htmlFor="get_a_quote">Message*</label>
                        <textarea id="message" rows={5} name="message" className="bg-white border-1 border-dark py-[18px] px-[30px] rounded-[14px] w-full" required placeholder="message"/>
                    </fieldset>
                    <button type="submit" className="rounded-[14px] bg-dark p-5 text-white w-full">Send Message</button>
                </form>
                <img draggable="false" src="./Illustration_3.png" alt="illustration" className="-mr-[110px] object-contain hidden md:flex"/>
            </div>
        </section>
    )
}