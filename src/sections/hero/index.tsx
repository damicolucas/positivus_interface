export function Hero() {
    const getCompanies = () => Array.from(Array(6).keys()).map(item => <img className="object-contain grayscale" src={`./companies/company_${item}.png`} key={item}/>)
    const companies = getCompanies()
    
    return (
        <section className="my-[70px]">
            <div className="mb-[70px] flex justify-between">
                <div className="flex flex-col gap-9">
                    <h1 className="text-6xl text-black font-medium">Navigating the<br/>digital landscape<br/>for success</h1>
                    <p className="text-xl">Our digital marketing agency helps businesses<br/>grow and succeed online through a range of<br/>services including SEO, PPC, social media marketing,<br/>and content creation.</p>
                    <button className="bg-dark self-start rounded-[14px] py-[20px] px-[35px] text-white text-xl underline-offset-5 hover:underline hover:cursor-pointer">Book a consultation</button>
                </div>
                <img src="/Illustration.png" alt="home illustration" />
            </div>
            <div className="flex justify-between items-center">
                {companies}
            </div>
        </section>
    )
}