import { useState } from "react";

export const useToggle = () => {
    const [text, setText] = useState(false);

    const handleToggle = () => {
        setText(prev => !prev);
    }

    return { text, handleToggle }
}