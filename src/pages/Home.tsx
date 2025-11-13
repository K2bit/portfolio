import TypeToEnter from "../components/TypeToEnter/TypeToEnter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useAppNavigation from "../hooks/useAppNavigation";
import hero from "../assets/hero.jpg";
import portrait from "../assets/portrait-2.jpg";
import Header from '../components/Header/Header';

import "./Home.css";
import Button from "../components/Button/Button";

export default function Home() {

    const { navPersonal } = useAppNavigation();
    
    const [helpText, setHelpText] = useState("start typing!");

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50},
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" as any } 
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setHelpText(""), 2000);

        return () => clearTimeout(timer);
    }, [setHelpText]);

    return (
        <>
            <Header/>

            <div className="home-container">
            <section id="hero" className="hero-section">
                <motion.img className="hero-img" src={hero}/>
                <motion.div onHoverStart={() => setHelpText("start typing!")} onHoverEnd={() => setHelpText("")}>
                    <TypeToEnter text={"Stay"} target={"curious."} className={"hero-quote-type"} helpText={helpText} finalHelp={"enter?"} onEnter={navPersonal} />
                </motion.div>
            </section>

            <section id="about" className="about-section">
                <motion.h1 className="about-title">About me</motion.h1>
                <div className="about-grid">
                    <motion.img className="portrait-image" src={portrait}/>
                    <motion.div className="about-content">
                        <motion.p>I’m a passionate computer science student with a strong interest in software development, problem-solving, and building intuitive digital experiences. I enjoy exploring new technologies, collaborating on projects, and turning ideas into functional solutions.</motion.p>
                        <motion.p>People often describe me as collaborative, patient and reliable.</motion.p>
                        <Button>Download Resume</Button>
                    </motion.div>
                </div>
            </section>

            <motion.section id="experience" className="experience-section">
                <motion.h1 className="experience-title">Experience</motion.h1>

                <motion.div 
                    variants={containerVariants}
                    className="experience-content"
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.2}}
                >
                    <motion.div 
                        variants={itemVariants}
                        className="experience-content-item"
                    >
                        <div className="experience-content-header">
                            <h3>(01) Software Developer</h3>
                            <h2>SEPT 2025 - CURRENT</h2>
                        </div>
                        <h2 className="experience-content-company">EnLogin</h2>
                        
                        <ul>
                            <li>Full-stack Web Development</li>
                            <li>REST APIs</li>
                            <li>ReactJS</li>
                            <li>Spring boot</li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="experience-content-item"
                    >
                        <div className="experience-content-header">
                            <h3>(02) Programmer/Analyst</h3>
                            <h2>MAY 2024 - AUG 2024</h2>
                        </div>
                        <h2 className="experience-content-company">Agriculture and Agri-Food Canada (AAFC)</h2>
                        <ul>
                            <li>Back-end Web Development</li>
                            <li>REST APIs</li>
                            <li>Grails</li>
                            <li>VueJS</li>
                            <li>Visual Basic for Applications (VBA)</li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="experience-content-item"
                    >
                        <div className="experience-content-header">
                            <h3>(03) Photo Lab Specialist</h3>
                            <h2>SEPT 2022 - SEPT 2025</h2>
                        </div>
                        <h2 className="experience-content-company">London Drugs</h2>
                        <ul>
                            <li>Customer Service</li>
                            <li>Quality Assurance</li>
                            <li>Communication</li>
                            <li>Problem Solving</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>


            <section id="projects">
                <h1>Projects</h1>

                <div>
                    <h3>Android Calendar</h3>
                    <h4>Android calendar application in Java with a 3-tier architecture design</h4>
                    <ul>
                        <li>Applied Agile methodology for iterative development, incorporating feedback after each sprint to refine
features.</li>
                        <li>Leveraged SOLID principles to enhance code flexibility, maintainability, and readability.</li>
                    </ul>
                </div>

                <div>
                    <h3>Library Database (AAFC training project)</h3>
                    <h4>A RESTful web application that connects to a relational database containing authors, books and genres.</h4>
                    <ul>
                        <li>Implemented full-stack development using Grails and Vue, building CRUD operations and enabling
seamless frontend–backend integration.</li>
                    </ul>
                </div>
            </section>

            <section id="contact">
                <h1>Let's connect!</h1>
            </section>
            </div>
        </>
    )
}