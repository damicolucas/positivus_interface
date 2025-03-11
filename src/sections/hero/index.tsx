export function Hero() {
    const getCompanies = () => Array.from(Array(6).keys()).map(item => <img draggable="false" className="object-contain grayscale" src={`./companies/company_${item}.png`} key={item}/>)
    const companies = getCompanies()
    
    return (
        <section className="my-[70px]">
            <div className="mb-[70px] flex flex-col justify-between md:flex-row">
                <div className="flex flex-col gap-9 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl text-black font-medium">Navigating the<br/>digital landscape<br/>for success</h1>
                    <p className="text-xl">Our digital marketing agency helps businesses<br/>grow and succeed online through a range of<br/>services including SEO, PPC, social media marketing,<br/>and content creation.</p>
                    <img draggable="false" src="/Illustration.png" alt="home illustration" className="object-contain md:hidden flex" />
                    <button className="bg-dark self-stretch md:self-start rounded-[14px] py-[20px] px-[35px] text-white text-xl underline-offset-5 hover:underline hover:cursor-pointer">Book a consultation</button>
                </div>
                <img draggable="false" src="/Illustration.png" alt="home illustration" className="object-contain hidden md:flex" />
            </div>
            <div className="flex-wrap flex justify-between items-center">
                {companies}
            </div>
        </section>
    )
}