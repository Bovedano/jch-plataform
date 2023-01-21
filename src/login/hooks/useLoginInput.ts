import { useEffect, useState } from "react";
import { useLogin } from "./useLogin";

export const useLoginInput = (k: string, form: string, def?: string) => {
    const [value, setValue] = useState<string>(def || "");
    const { setFomrData } = useLogin();

    const set = (v: string) => {
        setValue(v)
    }

    useEffect(() => {
        setFomrData(k, value, form);
    }, [value]);

    const retorno: [string, (k: string) => void] = [
        value,
        set
    ]

    return retorno
}