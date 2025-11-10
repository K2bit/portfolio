import { motion, useAnimation } from "framer-motion";

interface NavLinkProps {
    children: string,
    nav: () => void
}

export default function NavLink({children, nav}:NavLinkProps) {

    const controls = useAnimation();

    const OPEN_BRACKET = "(";
    const CLOSE_BRACKET = ")";

    return (
        <motion.a
            onHoverStart={() => controls.start({ opacity: 1})}
            onHoverEnd={() => controls.start({ opacity: 0, x: 5 })}
            onClick={nav}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                >
                    {OPEN_BRACKET} 
                </motion.span>

                    <span> {children} </span>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.2 }}
                >
                    {CLOSE_BRACKET}
                </motion.span>
        </motion.a>
    );
}