import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function useLocalStorage({ key, defaultValue }) {
    const [value, setValue] = useState(() => {
        let currentValue

        try {
            currentValue = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue

        } catch (error) {
            console.log(error);
            currentValue = defaultValue


        }
        return currentValue
    });
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))


    },[value,key])
    return [value, setValue]
   
}

export default useLocalStorage