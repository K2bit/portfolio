import { motion } from "framer-motion";

interface ButtonProps {
    children?: string,
    onClick?: () => void,
}

export default function Button({children, onClick}:ButtonProps) {

    const parentVariant = {
        beforeHover: {
            scale: 1,
        },
        whileHover: {
            scale: 1,
            transition: {
                staggerChildren: 0.03
            },
        },
        whileTap: {
            scale: 0.98,
            transition: { duration: 0.01 }
        }
    }

    const childVariant = {
        beforeHover: {
            scale: 1,
            y: 0,
        },
        whileHover: {
            scale: 1,
            y: -3,
            transition: { duration: 0.3 },
        }
    }

    return (
        <>
            <motion.button
                variants={parentVariant}
                initial="beforeHover"
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={onClick}
            > 
                {children?.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={childVariant}
                    style={{ display: "inline-block" }}
                >
                {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
            </motion.button>
        </>
    );
}