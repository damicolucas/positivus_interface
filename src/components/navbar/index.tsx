export function Navbar() {
    return (
        <nav className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
            <div className="flex justify-center items-center gap-[12px] cursor-pointer">
                <img draggable="false" alt="logo-positivus" src="/logo_vector.png" />
                <img draggable="false" alt="logo-positivus" src="/positivus.png" />
            </div>
            <ul className="flex flex-wrap leading-5 gap-[10px] md:gap-[40px] text-md md:text-xl justify-center items-center">
                <li className="cursor-pointer hover:underline">About us</li>
                <li className="cursor-pointer hover:underline">Services</li>
                <li className="cursor-pointer hover:underline">Use Cases</li>
                <li className="cursor-pointer hover:underline">Pricing</li>
                <li className="cursor-pointer hover:underline">Blog</li>
                <li className="cursor-pointer hover:underline">
                    <button className="py-[20px] px-[35px] border-1 border-dark rounded-[14px] underline-offset-5 hover:underline hover:cursor-pointer">Request a quote</button>
                </li>
            </ul>
        </nav>
    )
}