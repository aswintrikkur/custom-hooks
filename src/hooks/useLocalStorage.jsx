import { useEffect, useState } from "react";

export const useLocalStorage = (user) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        handleRetrive();

    }, [])


    const handleLogIn = () => {

        if (user.userName && user.userId) {
            localStorage.setItem('user', JSON.stringify(user));
            handleRetrive();
        }

    }
    const handleRetrive = () => {
        const data = JSON.parse(localStorage.getItem('user'));
        setUserData(data);
    }


    const handleLogOut = () => {
        localStorage.clear();
        setUserData(null);
    }

    console.log('local-storage:', localStorage);
    return { userData, handleLogIn, handleLogOut };
}