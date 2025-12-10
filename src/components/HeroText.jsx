import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const words = [
    "Innovative Apps.",
    "Seamless Websites.",
    "Cutting-Edge Solutions.",
    "User-Centric Designs.",
    "Robust Systems.",
];

const HeroText = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1
                    className="text-4xl font-medium"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    Hi I'm Manuka
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>
                    <motion.div>
                        <FlipWords
                            words={words}
                            duration={500}
                            className="text-4xl font-medium text-blue-500"
                        />
                    </motion.div>
                    {/*
                    <div> get flip word from aceternity</div>
                     */}
                    <motion.p className="text-3xl font-medium text-neutral-300">
                        Web Solutions
                    </motion.p>

                </div>
            </div>
            {/* Mobile View */}
            <div className="flex- flex-col space-y-6 md:hidden">
                <p className="text-4xl font-medium">Hi I'm Manuka</p>
                <div>
                <p className="text-5xl font-black text-neutral-300">Building</p>
                <div>
                    <FlipWords
                        words={words}
                        duration={500}
                        className="text-3xl font-black text-blue-500"
                    />
                </div>
                <p className="text-4xl font-black text-neutral-300">Web Application</p>
            </div>
        </div>
    </div>
    )
}

export default HeroText;