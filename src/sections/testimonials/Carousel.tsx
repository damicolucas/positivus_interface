import { useCallback, useEffect, useState } from "react";
import { MobileTestimonial, Testimonial } from "./Testimonial";

const fakeEmployees = [
    {
        name: 'John Smith',
        position: 'Marketin Director at XYZ Corp',
        testimonial: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations at Positivus',
        testimonial: "Working at Positivus, I've seen how our team boosts website traffic and generates leads. We're committed to our clients' success, and I highly recommend us for anyone wanting to grow their online presence."
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator at Positivus',
        testimonial: "At Positivus, we create content that drives results. Our efforts have helped clients see increased traffic and leads. If you're looking to improve your online presence, I recommend Positivus."
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist at Positivus',
        testimonial: "Positivus has helped clients grow through innovative social media strategies. The results speak for themselves, and I highly recommend our team for anyone looking to boost their online visibility."
    },
    {
        name: 'Dylan White',
        position: 'Social Media Specialist at Positivus',
        testimonial: "Positivus has helped clients grow through innovative social media strategies. The results speak for themselves, and I highly recommend our team for anyone looking to boost their online visibility."
    }
]

export function Carousel() {
    const [cur, setCur] = useState(0);

    const len = fakeEmployees.length;

    const leftHandle = () => {
        setCur(cur - 1 < 0 ? len - 1 : cur - 1);
    };

    const rightHandle = useCallback(() => {
        setCur(cur + 1 > len - 1 ? 0 : cur + 1);
    }, [cur, len]);

    useEffect(() => {
        const interval = setTimeout(() => {
            rightHandle();
        }, 3000);
        return () => clearTimeout(interval);
    }, [rightHandle]);


    return (
        <div className="flex flex-col">
            <div className="hidden md:flex justify-between items-center gap-[50px]">
                {fakeEmployees.map((item, index) => {
                    return (
                        <div key={item.name} className="flex justify-between items-center">
                            {cur - 1 === index && <Testimonial name={item.name} position={item.position} testimonial={item.testimonial} />}
                            {cur === index && <Testimonial name={item.name} position={item.position} testimonial={item.testimonial} />}
                            {cur + 1 === index && <Testimonial name={item.name} position={item.position} testimonial={item.testimonial} />}
                        </div>
                    );
                })}
            </div>
            <div className="md:hidden flex justify-between items-center gap-[50px]">
                {fakeEmployees.map((item, index) => {
                    return cur === index && <MobileTestimonial key={item.name} name={item.name} position={item.position} testimonial={item.testimonial} />
                })}
            </div>
            <div className="hidden md:flex items-center justify-center mt-[126px] gap-[190px]">
                <button className="cursor-pointer" onClick={leftHandle}><img draggable="false" src="./arrow_left.png" /></button>
                <div className="flex items-center justify-center gap-[19px]">{fakeEmployees.map((item, index) => <img draggable="false" key={`${item.name}_${index}`} onClick={() => setCur(index)} className="cursor-pointer" src={`./${cur === index ? 'active' : 'inactive'}_vector.png`} />)}</div>
                <button className="cursor-pointer" onClick={rightHandle}><img draggable="false" src="./arrow_right.png" /></button>
            </div>
        </div>
    );
};

