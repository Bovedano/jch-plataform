import { useState } from "react";

export const useTestHook = () => {
    const [test] = useState<string>("Test2");

    return {
        test
    }
}