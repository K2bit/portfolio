import { useEffect, useState, useRef, type SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./TypeToEnter.css";

interface TypeToEnterProps {
    setEnter: React.Dispatch<SetStateAction<boolean>>;
}

export default function TypeToEnter({setEnter}:TypeToEnterProps) {

    const target = "Hello World!";
    const [typed, setTyped] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus the input on mount and whenever user clicks anywhere
    useEffect(() => {
        const focusInput = () => inputRef.current?.focus();

        // Focus on page load
        focusInput();

        // Focus again if user clicks anywhere
        window.addEventListener("click", focusInput);
        return () => window.removeEventListener("click", focusInput);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTyped(value.slice(0, target.length)); // limit length
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // if the user pressed enter and they have fully typed the target
        if (e.key === "Enter" && typed === target) {
            setEnter(true);
        }
    };

    return (
        <>
            <AnimatePresence>
            <motion.div className="typing-container">
                <div className="typing-span-container">
                {target.split("").map((character, index) => (
                    <span
                        className={index < typed.length ? typed[index] === character ? "typing-correct" : "typing-incorrect" : "typing-empty"}
                        key={index}
                        >
                        {character}
                    </span>
                ))}
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={typed}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    style={{
                        position: "absolute",
                        opacity: 0,
                        pointerEvents: "none"
                    }}
                />
                <motion.p className="help-text">Type to enter my portfolio!</motion.p>
                <motion.p animate={{opacity: typed === target ? 1 : 0}} className="help-text">Press Enter :)</motion.p>
            </motion.div>
            </AnimatePresence>
        </>
    );
}

