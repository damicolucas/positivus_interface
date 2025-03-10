interface TestimonialProps {
    name: string;
    position: string; 
    testimonial: string
}

export function Testimonial({name, position, testimonial} : TestimonialProps) {

    return (
        <div className="flex flex-col text-white">
            <div className="flex flex-col relative">
                <img src="./bubble.png" alt="" className="object-contain max-w-[600px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="-mt-10 px-[52px]">
                        {testimonial}
                    </p>
                </div>
            </div>
            <div className="flex flex-col pl-20 mt-5">
                <h4 className="text-main font-medium text-xl">{name}</h4>
                <p className="text-white text-lg">{position}</p>
            </div>
        </div>
    )
}