import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useGetAuthContex = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('Nu poti folosi AuthContext acolo')
    }

    return context
}