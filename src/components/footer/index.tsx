export function Footer() {
    return (
        <div className="bg-dark text-white rounded-t-[45px] px-[60px] py-[65px] space-y-[50px]">
            <nav className="flex justify-between items-center" >
                <div className="flex justify-center items-center gap-[12px] invert">
                    <img alt="logo-positivus" src="/logo_vector.png" className="invert-0 max-w-[29px] object-contain" />
                    <img alt="logo-positivus" src="/positivus.png" className="invert-0 max-w-[140px] object-contain" />
                </div>
                <ul className="flex gap-[40px] text-xl justify-center items-center underline cursor-pointer">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
                <div className="flex items-center justify-center gap-5 grayscale-0">
                    <img src="./social/linkedin.png" alt="linkedin" />
                    <img src="./social/facebook.png" alt="facebook" />
                    <img src="./social/twitter.png" alt="twitter" />
                </div>
            </nav >
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-center space-y-5">
                    <h4 className="bg-main p-[2px] text-xl text-dark rounded-[4px] mb-7" >Contact us:</h4>
                    <p className="text-lg">Email: info@positivus.com</p>
                    <p className="text-lg">Phone: 555-567-8901</p>
                    <p className="text-lg leading-5">Address: 1234 Main St<br/>Moonstone City, Stardust State 12345</p>
                </div>
                <div className="rounded-[14px] py-[58px] px-[40px] bg-[#292A32] space-x-5">
                    <input className="border-1 border-white py-[22px] px-[35px] rounded-[14px] placeholder:text-white text-lg" placeholder="Email" type="email"/>
                    <button className="border-1 bg-main border-main py-[22px] px-[35px] rounded-[14px] text-dark text-lg">Subscribe to news</button>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-start gap-10">
                <span className="text-lg">© 2023 Positivus. All Rights Reserved.</span>
                <a href="/" className="text-lg underline">Privacy Policy</a>
            </div>
        </div>
    )
} 