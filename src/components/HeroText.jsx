import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {

    const variants = {
        hidden: { opacity: 0, x: -50  },
        visibale: { opacity: 1, y: 0 },
    }

    const words = [
    "Innovative Apps.",
    "Seamless Websites.",
    "Cutting-Edge Solutions.",
    "User-Centric Designs.",
    "Robust Systems.",
];

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-4xl font-medium"
                    variants={variants}
                    initial= "hidden"
                    animate= "visibale"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Manuka
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        variants={variants}
                        initial= "hidden"
                        animate= "visibale"
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial= "hidden"
                        animate= "visibale"
                        transition={{delay: 1.5}}
                    >
                        <FlipWords
                            words={words}
                            duration={500}
                            className="text-4xl font-medium text-blue-500"
                        />
                    </motion.div>
                    {/*
                    <div> get flip word from aceternity</div>
                     */}
                    <motion.p className="text-3xl font-medium text-neutral-300"
                        variants={variants}
                        initial= "hidden"
                        animate= "visibale"
                        transition={{delay: 1.8}}
                    >
                        Web Solutions
                    </motion.p>

                </div>
            </div>
            {/* Mobile View */}
            <div className="flex- flex-col space-y-6 md:hidden">
                <motion.p 
                className="text-4xl font-medium"
                variants={variants}
                initial= "hidden"
                animate= "visibale"
                transition={{delay: 1}}
                >
                    Hi I'm Manuka
                </motion.p>
                <div>
                <motion.p 
                className="text-5xl font-black text-neutral-300"
                variants={variants}
                initial= "hidden"
                animate= "visibale"
                transition={{delay: 1.2}}
                >
                    Building
                </motion.p>
                <motion.div
                variants={variants}
                initial= "hidden"
                animate= "visibale"
                transition={{delay: 1.5}}
                >
                    <FlipWords
                        words={words}
                        duration={500}
                        className="text-3xl font-black text-blue-500"
                    />
                </motion.div>
                <motion.p 
                className="text-4xl font-black text-neutral-300"
                variants={variants}
                initial= "hidden"
                animate= "visibale"
                transition={{delay: 1.8}}
                >
                    Web Application
                </motion.p>
            </div>
        </div>
    </div>
    )
}

export default HeroText;