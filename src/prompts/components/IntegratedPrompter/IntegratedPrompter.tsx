import React from "react"
import { Intersticial } from "../Intersticial/Intersticial"
import { ThemeComponent } from "../../../styles/components/ThemeComponent/ThemeComponent"
import { Prompt, PrompterContext } from "../../context/usePrompter"
import { createHash } from "../../../commons/utils/UtilHashGenerator"

interface IntegratedPrompterProps extends PrompterContext {
    children?: JSX.Element | JSX.Element[]
}


export const IntegratedPrompter = (props: IntegratedPrompterProps) => {
    const { prompts, close } = props;


    const onCloseHandler = (prompt: Prompt) => {
        if (prompt.options.closable) {
            close();
        }
    }

    console.log("IntegratedPrompter", prompts)

    return <>
        {props.children}
        <ThemeComponent id="prompt">
            <div>
                {prompts.map((prompt, index) => {
                    console.log(prompt)
                    return <ThemeComponent id="prompter" >
                        <Intersticial
                            key={"prompt_" + createHash(12)}
                            id={prompt.id}
                            active={index == 0}
                            onLayerClick={() => onCloseHandler(prompt)}
                            layerOptions={prompt.options.layer}
                        >
                            {prompt.content}
                        </Intersticial>
                    </ThemeComponent>
                })}
            </div>
        </ThemeComponent>
    </>
}

IntegratedPrompter.defaultProps = {
    children: <>IntegratedPrompter</>
}