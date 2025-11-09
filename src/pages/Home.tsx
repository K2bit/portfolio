import { useState } from 'react';

import Hero from "../components/Hero/Hero";
import TypeToEnter from '../components/TypeToEnter/TypeToEnter';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {

    const [enter, setEnter] = useState(false);

    return (
        <>
            <AnimatePresence mode="wait">
                {!enter && (<motion.div key="type-to-enter" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 1, ease: "easeIn"}}><TypeToEnter setEnter={setEnter}/></motion.div>)}
                {enter && (<motion.div key="hero" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: "easeOut"}}><Hero/></motion.div>)}
            </AnimatePresence>
        </>
    )
}