import React from "react";
import { LoginContextProvider } from "../../login/context/LoginContext";
import { ThemeContextProvider } from "../../styles/context/useTheme";
import { PrompterContextProvider } from "../../prompts/context/usePrompter";

interface PlataformContextProps {
    children: JSX.Element | JSX.Element[]
}

export const PlataformContext = (props: PlataformContextProps) => {
    console.log("REnder plataform context")

    return <LoginContextProvider>
        <ThemeContextProvider>
            <PrompterContextProvider>
                {props.children}
            </PrompterContextProvider>
        </ThemeContextProvider>
    </LoginContextProvider>
}