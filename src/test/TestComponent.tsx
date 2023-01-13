import React from "react"
import { useTestHook } from "./useTestHook";

export const TestComponent = () => {
    const { test } = useTestHook();
    console.log("testeando")
    return <>TestComponents {test}</>
}