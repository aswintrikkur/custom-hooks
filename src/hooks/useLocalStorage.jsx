import { useState } from "react"

export const useLocalStorage = (userName) => {
    const [userList, setUserList] = useState({
        name: []
    });

    // setUserList({...userList,userName});

    const handleSubmit = () => {
        
        
        localStorage.setItem('user-name', JSON.stringify(userList));


    }


    return { userList, handleSubmit };



}