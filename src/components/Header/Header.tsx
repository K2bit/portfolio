import { motion } from "framer-motion";

import NavLink from "./NavLink";

import "./Header.css";

export default function Header() {

    return (
        <>
            <div className="header-container">
            <motion.header layout className="header">
                <motion.nav layout className="header-nav">
                    <div>
                        <NavLink href={"#about"}>Kurt Galvez</NavLink>
                    </div>

                    <div>
                        <NavLink href={"#experience"}>Experience</NavLink>
                        <NavLink href={"#projects"}>Projects</NavLink>
                    </div>

                    <div>
                        <NavLink href={"#contact"}>Contact</NavLink>
                    </div>
                </motion.nav>
            </motion.header>
            </div>
        </>
    );
}