import { useState } from "react";
import { LoginDirection } from "../interfaces";

export const useLoginDirections = () => {
    const [loginDirection, setLoginDirectionState] = useState<LoginDirection>(LoginDirection.LOGIN);
    const [prevLoginDirection, setPrevLoginDirection] = useState<LoginDirection>(LoginDirection.LOGIN);

    const setLoginDirection = (direction: LoginDirection) => {
        if (direction !== LoginDirection.BACK) {
            setPrevLoginDirection(loginDirection)
            setLoginDirectionState(direction);
        } else {
            setLoginDirectionState(prevLoginDirection);
        }
    }

    return { loginDirection, setLoginDirection }
}