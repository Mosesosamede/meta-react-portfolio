import { useState, useEffect } from "react";

export function useTypewriter(items = []) {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
        const handleType = () => {
            if (!items.length) return;
            const current = items[index % items.length];
            if (isDeleting) {
                setDisplayText(current.substring(0, displayText.length - 1));
                setSpeed(50);
            } else {
                setDisplayText(current.substring(0, displayText.length + 1));
                setSpeed(100);
            }

            if (!isDeleting && displayText === current) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex(index + 1);
            }
        };

        const timer = setTimeout(handleType, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, items, speed]);

    return { displayText };
}
