import { useState } from "react"

export const useDirection = () => {
    const [direction,setDirection]=useState(null);

    const handleDirectionCheck = () => {

        if (document.dir === 'rtl') {
            setDirection('right-to-left');
        } else {
            setDirection('left-to-right');
        }
    }

    return {direction,handleDirectionCheck};
}