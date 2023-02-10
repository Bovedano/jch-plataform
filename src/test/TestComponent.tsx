import React from "react"
import { useTestHook } from "./useTestHook";

export const TestComponent = () => {
    const { test } = useTestHook();
    return <>TestComponents {test}</>
}