'use client';

import { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player';
import { useEffect, useRef } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';

function ProductShowcase({ tab , click ,selected}) {
    const tabRef = useRef(null);
    const doLottieRef = useRef(null); 

    const xPercentage = useMotionValue(0);
    const yPercentage = useMotionValue(0);

    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

    useEffect(() => {
        if (!tabRef.current) return;
        const { height, width } = tabRef.current.getBoundingClientRect();
        const circumference = height * 2 + width * 2;

        const times = [
            0,
            width / circumference,
            (width + height) / circumference,
            (width * 2 + height) / circumference,
            1
        ];

        animate(xPercentage, [0, 100, 100, 0, 0], {
            times,
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
        });

        animate(yPercentage, [0, 0, 100, 100, 0], {
            times,
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
        });
    }, []);

    const handleTabHover = () => {
        if (doLottieRef.current === null) return;
        doLottieRef.current.seek(0);
        doLottieRef.current.play();
    };

    return (
        <div
            onClick={click}
            ref={tabRef} 
            onMouseEnter={handleTabHover}
            className="relative w-1/3 max-[720px]:w-full rounded-lg flex px-3 py-4 border border-white/15 items-center space-x-3"
        >
            <motion.div
                style={{ maskImage }}
                className={`w-full absolute inset-0 border ${selected?"":"hidden"} border-[#A369FF] rounded-xl`}
            ></motion.div>
            <div className="w-12 h-12 border p-3 rounded-lg">
                <DotLottiePlayer
                    src={tab.Icon}
                    autoplay
                    ref={doLottieRef}
                />
            </div>
            <p className="text-white">{tab.title}</p>
            {tab.isNew && <div className='bg-purple-500 px-3 rounded-xl flex justify-center items-center font-bold'>new</div>}
        </div>
    );
}

export default ProductShowcase;