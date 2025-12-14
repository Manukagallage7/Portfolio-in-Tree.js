import React from 'react'
import {useRef} from 'react'
import Card from '../components/Card'
import Globe from '../components/globe'

const About = () => {
    const grid2Container = useRef();
    return (
        <section className='c-space section-spacing'>
            <h2 className='text-heading'>About me</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
               {/* Grid 1 */}
                <div className='flex items-end grid-default-color grid-1'>
                    <img
                    src='assets/coding-pov.png'
                    className='absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
                    />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Manuka Gallage</p>
                        <p className='subtext'>
                            Over the last 3 years, I developed my Frontend & Backend dev,
                            skills to deliver dynamic and software and web applications.
                        </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'>

                    </div>
                </div>
                {/* Grid 2 */}
                <div className='grid-default-color grid-2'>
                    <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-5xl text-gray-500'>
                            Code IS CRAFT
                        </p>
                        <Card
                            style={{rotate: "95deg", top: "30%", left: "55%"}}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{rotate: "-30deg", top: "50%", left: "25%"}}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{rotate: "90deg", top: "30%", left: "70%"}}
                            text="Design Patterns"
                            containerRef={grid2Container}
                            />
                        <Card
                            style={{rotate: "-45deg", top: "55%", left: "0%"}}
                            text="Design Principles"
                            containerRef={grid2Container}
                            />
                        <Card
                            style={{rotate: "20deg", top: "10%", left: "30%"}}
                            text="SRP"
                            containerRef={grid2Container}
                            />
                        <Card
                            style={{rotate: "30deg", top: "70%", left: "70%"}}
                            image="assets/logos/csharp-pink.png"
                            containerRef={grid2Container}
                            />
                        <Card
                            style={{rotate: "-45deg", top: "70%", left: "25%"}}
                            image="assets/logos/dotnet-pink.png"
                            containerRef={grid2Container}
                            />
                        <Card
                            style={{rotate: "-45deg", top: "5%", left: "10%"}}
                            image="assets/logos/blazor-pink.png"
                            containerRef={grid2Container}
                            />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className='grid-black-color grid-3'>
                    <div className='z-10 w-[50%]'>
                        <p className='headtext'>
                            Time Zone
                        </p>
                        <p className='subtext'>I'm based in Kurunegala, and open to remote work worldwide.</p>
                    </div>
                    <figure className='absolute left-[30%] top-[10%]'>
                    <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className='grid-special-color grid-4'></div>
                {/* Grid 5 */}
                <div className='grid-default-color grid-5'></div>
            </div>
        </section>
    )
}

export default About