import { motion } from "framer-motion";

import NavLink from "./NavLink";

import "./Header.css";
import useAppNavigation from "../../hooks/useAppNavigation";

export default function Header() {

    const { navProjects } = useAppNavigation();

    return (
        <>
            <motion.header layout className="header">
                <motion.nav layout className="header-nav">
                    <div className="left">
                        <NavLink nav={navProjects}>Kurt Galvez</NavLink>
                    </div>

                    <div className="center">
                        <NavLink nav={navProjects}>Projects</NavLink>
                        <NavLink nav={navProjects}>Experience</NavLink>
                    </div>

                    <div className="right">
                        <NavLink nav={navProjects}>Contact</NavLink>
                    </div>
                </motion.nav>
            </motion.header>
        </>
    );
}