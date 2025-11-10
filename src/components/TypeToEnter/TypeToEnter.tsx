import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./TypeToEnter.css";

interface TypeToEnterProps {
    text?: string, // optional initial text prior to target text
    target: string, // target string the user must type to enter
    className?: string, // optional class name for the typing container div
    helpText?: string, // optional initial help text
    finalHelp?: string, // optional final help text that shows up when user has fully typed out the target text
    onEnter: () => void;
}

export default function TypeToEnter({text, target, className, helpText, finalHelp, onEnter }:TypeToEnterProps) {

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

    const targetTyped = () => {
        return typed.toLowerCase() === target.toLowerCase();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTyped(value.slice(0, target.length)); // limit length
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // if the user pressed enter and they have fully typed the target
        if (e.key === "Enter" && targetTyped()) {
            onEnter();
        }
    };

    return (
        <AnimatePresence>
            <motion.div layout className={className ? className : "typing-container"}>
                <motion.div layout>
                    {text && <motion.span>{text} </motion.span>}
                    {target.split("").map((character, index) => (
                        <span
                            className={index < typed.length ? typed[index].toLowerCase() === character.toLowerCase() ? "typing-correct" : "typing-incorrect" : "typing-empty"}
                            key={index}
                            >
                            {character}
                        </span>
                    ))}
                </motion.div>

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
                {helpText && !targetTyped() && 
                    <motion.p 
                        layout 
                        exit={{opacity: 0}}
                        className="help-text"
                    >
                        {helpText}
                    </motion.p>
                }
                
                {finalHelp && targetTyped() && 
                    <motion.p 
                        layout 
                        key="final-help-text" 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        exit={{opacity: 0}} 
                        transition={{duration: 0.5}}
                        className="help-text"
                    >
                            {finalHelp}
                    </motion.p>}
                
            </motion.div>
        </AnimatePresence>
    );
}

