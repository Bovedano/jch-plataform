import React from "react"
import { PromptSimpleMessage } from "../../PromptSimpleMessage/PromptSimpleMessage"
import { usePrompter } from "../../../context/usePrompter";
import { usePrompt } from "../../../hooks/usePrompt";
import { SemanticICONS } from "semantic-ui-react";

interface PresetConfirmationProps {
    message_text: string,
    button_text?: string,
    icon?: SemanticICONS
}

export const PresetConfirmation = (props: PresetConfirmationProps) => {
    const { close } = usePrompter();
    const { message } = usePrompt();

    const def_button_text = props.button_text || "Ok";
    const def_icon: SemanticICONS = props.icon || "info circle"

    return <PromptSimpleMessage
        boxed={false}
        text={props.message_text}
        icon={def_icon}
        buttons={[
            { text: def_button_text, fnc: () => { close() } },
            { text: "Reopen", fnc: () => { message(props.message_text + " *", def_button_text, def_icon) } }
        ]}
    />
}

