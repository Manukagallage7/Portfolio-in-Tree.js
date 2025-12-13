import { motion , useScroll, useSpring, useTransform } from 'framer-motion'
import React from 'react'

const ParallaxBackground = () => {
    const {scrollProgress} = useScroll();
    const x = useSpring(scrollProgress, {damping: 50})
    const mountain3Y = useTransform(x, [0,0.5],["0%", "70%"])
    const planetsX = useTransform(x, [0,0.5],["0%", "-20%"])
    const mountain2Y = useTransform(x, [0,0.5],["0%", "30%"])
    const mountain1Y = useTransform(x, [0,0.5],["0%", "0%"])
    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* Background Sky */}
                <div
                    className='absolute inset-0 w-full h-screen -z-50'
                    style={{
                        backgroundImage: "url(/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover"
                    }}
                />
                {/* Mountain Layer 3 */}
                <div
                    className='absolute inset-0 w-full h-screen -z-40'
                    style={{
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }}
                />
                {/* Planets */}
                <div
                    className='absolute inset-0 w-full h-screen -z-30'
                    style={{
                        backgroundImage: "url(/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetsX

                    }}
                />
                {/* Mountain Layer 2 */}
                <div
                    className='absolute inset-0 w-full h-screen -z-20'
                    style={{
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y
                    }}
                />
                {/* Mountain Layer 1 */}
                <div
                    className='absolute inset-0 w-full h-screen -z-10'
                    style={{
                        backgroundImage: "url(/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y
                    }}
                />

            </div>
        </section>
    )
}

export default ParallaxBackground;