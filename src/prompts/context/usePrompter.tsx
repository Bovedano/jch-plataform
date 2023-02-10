import React, { useCallback, useContext, useEffect, useState } from "react";
import { IntegratedPrompter } from "../components/IntegratedPrompter/IntegratedPrompter";
import { LayerOptions } from "../components/Intersticial/Intersticial";


interface PromptOptions {
    closable?: boolean,
    layer?: LayerOptions
}

export interface Prompt {
    id: string,
    options: PromptOptions
    content: JSX.Element | JSX.Element[]
}

export type PromptList = Array<Prompt>

export interface PrompterContext {
    prompts: PromptList,
    open: (content: JSX.Element | JSX.Element[], options: PromptOptions) => void,
    close: () => void,
    closeAll: () => void,
}

interface PrompterContextProps {
    children: JSX.Element | JSX.Element[]
}



const ctx = React.createContext<PrompterContext | null>(null);

export const PrompterContextProvider = (props: PrompterContextProps) => {

    const [prompts, setPrompts] = useState<PromptList>([]);


    const open = useCallback((content: JSX.Element | JSX.Element[], options: PromptOptions) => {
        const newPrompt = {
            id: "prompt_" + prompts.length,
            content: content,
            options: options
        }
        const newPrompts = [newPrompt, ...prompts];
        console.log("OpenPrompt: " + prompts.length + " -> " + newPrompts.length)
        setPrompts(newPrompts)
    }, [prompts.length]);


    let close = () => {
        const [, ...rest] = prompts;
        setPrompts(rest)
    }

    const closeAll = () => {
        console.log("CloseAllPrompt: " + prompts.length + " -> " + 0)
        setPrompts([])
    }

    const [value, setValue] = useState<PrompterContext>({
        prompts: [],
        open: open,
        close: close,
        closeAll: closeAll
    });

    useEffect(() => {
        console.log("Updating prompts: " + prompts.length)
        setValue({
            prompts: prompts,
            open: open,
            close: close,
            closeAll: closeAll
        })
    }, [prompts])



    return <ctx.Provider value={value} {...props}>
        <IntegratedPrompter {...value}>{props.children}</IntegratedPrompter>
    </ctx.Provider>
}

export const usePrompter = () => {
    const contexto = useContext(ctx)
    if (!contexto) {
        throw "Para utilizar usePrompterContext el componente debe estar anidado en el proveedor PrompterContextProvider"
    }
    return contexto
}
