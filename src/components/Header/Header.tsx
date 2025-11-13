import { motion } from "framer-motion";

import NavLink from "./NavLink";

import "./Header.css";
import Button from "../Button/Button";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <div className="header-container">
                <motion.header layout className="header">
                    <motion.nav layout className="header-nav">
                        <div>
                            <NavLink href={"#hero"}>Kurt Galvez</NavLink>
                        </div>

                        <div className="header-nav-action">
                            <NavLink href={"#about"}>About</NavLink>
                            <NavLink href={"#experience"}>Experience</NavLink>
                        </div>

                        <div className="header-nav-action-menu">
                            <Button onClick={() => setOpenMenu(true)}>Menu</Button>
                        </div>
                    </motion.nav>
                </motion.header>
            </div>
            <HeaderMenu open={openMenu} onClose={()=>setOpenMenu(false)} />
        </>
    );
}