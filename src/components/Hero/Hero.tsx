import TypeToEnter from "../TypeToEnter/TypeToEnter";

import "./Hero.css";

export default function Hero() {

    function enterCurious() {
        alert("Easter Egg");
    }

    return (
        <>  
            <header className="hero-header">
                <nav>
                    <button>Skills</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </nav>
            </header>
            <div className="hero-container">

                <section className="intro-section">
                    <h1>Kurt Galvez</h1>
                    
                    <TypeToEnter text={"Stay"} target={"curious."} className={"hero-quote-type"} finalHelp={"enter?"} onEnter={enterCurious} />
                </section>

                <section className="about-section">
                    
                </section>

                <section className="skills-section">
                    
                </section>

                <section className="experience-section">


                </section>

                <section className="projects-section">


                </section>

                <section className="contact-section">

                </section>

            </div>
        </>
    );
}