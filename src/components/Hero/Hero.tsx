import TypeToEnter from "../TypeToEnter/TypeToEnter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Hero.css";
import useAppNavigation from "../../hooks/useAppNavigation";

export default function Hero() {

    const { navPersonal } = useAppNavigation();

    const [helpText, setHelpText] = useState("start typing!");

    useEffect(() => {
        const timer = setTimeout(() => setHelpText(""), 1500); // hide after 1s
        return () => clearTimeout(timer); // cleanup if unmounts early
    }, [setHelpText]);

    return (
        <>  
            <div className="hero-container">

                <section className="intro-section">
                    
                    <motion.div onHoverStart={() => setHelpText("start typing!")} onHoverEnd={() => setHelpText("")}>
                        <TypeToEnter text={"Kurt"} target={"Galvez"} className={"hero-quote-type"} helpText={helpText} finalHelp={"enter?"} onEnter={navPersonal} />
                    </motion.div>
                </section>

                {/* <section className="about-section">
                    
                </section>

                <section className="skills-section">
                    
                </section>

                <section className="experience-section">


                </section>

                <section className="projects-section">


                </section>

                <section className="contact-section">

                </section> */}

            </div>
        </>
    );
}