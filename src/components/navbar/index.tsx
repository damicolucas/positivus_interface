export function Navbar() {
    return (
        <nav className="flex justify-between">
            <div className="flex justify-center items-center gap-[12px]">
                <img alt="logo-positivus" src="/logo_vector.png" />
                <img alt="logo-positivus" src="/positivus.png" />
            </div>
            <ul className="flex gap-[40px] text-xl justify-center items-center">
                <li>About us</li>
                <li>Services</li>
                <li>Use Cases</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>
                    <button className="py-[20px] px-[35px] border-1 border-dark rounded-[14px] underline-offset-5 hover:underline hover:cursor-pointer">Request a quote</button>
                </li>
            </ul>
        </nav>
    )
}