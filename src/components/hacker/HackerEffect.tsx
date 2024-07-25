import React, { useEffect } from "react";
import './HackerEffect.css'

export const HackerEffect: React.FC = () => {

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iterations = 0;
        const target = document.querySelector("h1");
        let interval : any;

        if (target) {
            interval = setInterval(() => {
                target.innerText = target.innerText.split("").map((letter, index) => {
                    if (index < iterations) {
                        return target.dataset.value ? target.dataset.value[index] : letter;
                    }
                    return letters[Math.floor(Math.random() * 26)];
                }).join("");

                if (iterations >= (target.dataset.value ? target.dataset.value.length : 0)) {
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 30);
        }

        return () => {
            if (target) {
                clearInterval(interval);
            }
        };
    }, []);

    return (
        <h1 data-value="WELCOME" className="HackerEffect">WELCOME</h1>
    );
};
