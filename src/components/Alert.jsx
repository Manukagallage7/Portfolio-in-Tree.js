import React from 'react';
import {motion, AnimatePresence} from 'motion/react';

const Alert = ({ type, text }) => {
    const alertVarients = {
        hidden: {opacity: 0, y: 50, scale: 0.8},
        visible: {opacity: 1, y: 0, scale: 1},
        exit: {opacity: 0, y: 50},
    }
    return (
        <AnimatePresence>
        <motion.div className='fixed z-50 flex items-center justify-center bottom-5 right-5'
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={alertVarients}
            transition={{duration: 0.3, ease: "easeInOut"}}
        >
            <div
                className={`flex items-center rounded-full px-4 py-2 ${
                type === "danger" ? "bg-red-500 text-white" : "bg-lavender text-black"
            } items-center text-indigo-100 leading-none lg:rounded-full lg:inline-flex rounded-md p-5`}
            >
                <p
                    className={`flex rounded-full mr-2 font-bold ${
                        type === "danger" ? "bg-red-500" : "bg-lavender"
                    }`}>
                        {type === "danger" ? "Failed" : "Success"}
                </p>
                <p className='text-left'>{text}</p>
            </div>
        </motion.div>
        </AnimatePresence>
    );
};

export default Alert;