import React, { useEffect, useState } from 'react'
const slide = [
    { image: "/image/first-hero-banner.jpeg" },
    { image: "/image/second-hero-banner.jpeg" },
    { image: "https://i.pinimg.com/1200x/74/12/17/741217495619ac33d28758a51f2a6f62.jpg" },
];


function Slide() {

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const time = setInterval(() => {
            setCurrent((pre) => {
                if (pre === slide.length - 1) {
                    return 0;
                }
                return pre + 1;
            });
        }, 3000);

        return () => clearInterval(time);
    }, []);

    return (
        <div className='w-full overflow-hidden p-3' style={{height: '75vh'}}>
            <img
                className='w-full h-full object-cover'
                src={slide[current].image}
                alt=""
            />
        </div>
    )
}

export default Slide
